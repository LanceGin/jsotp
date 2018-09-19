'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OTP = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base32');

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 *  @module   : OTP module to generate the password
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */
var jsSHA = require('jssha');

var OTP = exports.OTP = function () {
  /* ＊
     * This constructor will create OTP instance.
     *
     * @param {secret}
     * @type {String}
     * @desc random base32-encoded key, it is the
     * key that be used to verify.
     *
     * @param {digits}
     * @type {int}
     * @desc the length of the one-time password, default to be 6
     *
     * @param {digest}
     * @type {String}
     * @desc the key that be used to do HMAC encoding, dedault and
     * only to be "sha1"
     *
     */
  function OTP(secret) {
    var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
    var digest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'SHA-1';

    _classCallCheck(this, OTP);

    this.secret = secret;
    this.digits = digits;
    this.digest = digest;
  }

  /* ＊
     * When class HOTP or TOTP pass the input params to this
     * function, it will generate the OTP object with params,
     * the params may be counter or time.
     *
     * @param {input}
     * @type {int}
     * @desc input params to generate OTP object, maybe
     * counter or time.
     *
     * @return {OTP}
     */


  _createClass(OTP, [{
    key: 'generate_otp',
    value: function generate_otp(input) {
      // generate HMAC object with SHA-1 digest
      var hmacObj = new jsSHA(this.digest, 'BYTES');
      // set hmac token
      hmacObj.setHMACKey(_util.Util.byte_secret(this.secret), 'BYTES');
      // hamc encode the input param
      hmacObj.update(_util.Util.int_to_bytestring(input));

      // get HMAC ans
      var hmac = hmacObj.getHMAC('BYTES');

      // transfer hmac to Array
      var hmac_a = hmac.split('');

      // calculate the init offset
      var offset = hmac_a[hmac_a.length - 1].charCodeAt() & 0xf;

      // calculate the code
      var code = (hmac_a[offset].charCodeAt() & 0x7f) << 24 | (hmac_a[offset + 1].charCodeAt() & 0xff) << 16 | (hmac_a[offset + 2].charCodeAt() & 0xff) << 8 | hmac_a[offset + 3].charCodeAt() & 0xff;

      // get the init str code
      var str_code = (code % Math.pow(10, this.digits)).toString();

      // rjust format
      str_code = _util.Util.rjust(str_code, this.digits);

      return str_code;
    }

    /* ＊
       * Generate a url with TOTP or HOTP instance.
       *
       * @param {issuer}
       * @type {String}
       * @desc maybe it is the Service name
       *
       * @param {type}
       * @type {String}
       * @desc type of OTP instance
       *
       * @return {String}
       */

  }, {
    key: 'url_gen',
    value: function url_gen(issuer, type) {
      return 'otpauth://' + type + '/SK?secret=' + this.secret + '&issuer=' + issuer;
    }
  }]);

  return OTP;
}();