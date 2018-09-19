'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOTP = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _otp = require('./otp');

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @module   : TOTP module to generate and verify TOTP password
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author   : Gin (gin.lance.inside@hotmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TOTP = exports.TOTP = function (_OTP) {
  _inherits(TOTP, _OTP);

  /* ＊
     * @param {secret}
     * @type {String}
     * @desc random base32-encoded key to generate OTP.
     *
     * @param {interval}
     * @type {int}
     * @desc the time interval in seconds for OTP.
     * This defaults to 30.
     *
     * @return {OTP}
     */
  function TOTP(secret) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    var digits = arguments[2];
    var digest = arguments[3];

    _classCallCheck(this, TOTP);

    var _this = _possibleConstructorReturn(this, (TOTP.__proto__ || Object.getPrototypeOf(TOTP)).call(this, secret, digits, digest));

    _this.interval = interval;
    return _this;
  }

  /* ＊
     * Generate the OTP with current time.
     *
     * @return {OTP}
     *
     * @example
     * ```javascript
     * let totp = jsotp.TOTP('BASE32ENCODEDSECRET');
     * totp.now(); // => 432143
     * ```
     */


  _createClass(TOTP, [{
    key: 'now',
    value: function now() {
      // get now time string
      var now = _util.Util.timecode(new Date(), this.interval);

      // generate the one-time password
      var digit = _get(TOTP.prototype.__proto__ || Object.getPrototypeOf(TOTP.prototype), 'generate_otp', this).call(this, now);
      return digit;
    }

    /* ＊
       * Verifies the OTP passed in against the current time OTP.
       *
       * @param {otp}
       * @type {String}
       * @desc the OTP waiting for checking
       *
       * @param {time}
       * @type {int or datetime}
       * @desc Time to check OTP at (defaults to now)
       *
       * @return {Boolean}
       *
       * @example
       * ```javascript
       * let totp = jsotp.TOTP('BASE32ENCODEDSECRET');
       * totp.now(); // => 432143
       * // Verify for current time
       * totp.verify(432143); // => true
       * // Verify after 30s
       * totp.verify(432143); // => false
       * ```
       */

  }, {
    key: 'verify',
    value: function verify(otp) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var otp_time = void 0;

      if (time == null) {
        time = new Date();
      }
      otp_time = _get(TOTP.prototype.__proto__ || Object.getPrototypeOf(TOTP.prototype), 'generate_otp', this).call(this, _util.Util.timecode(time, this.interval));

      if (otp === otp_time) {
        return true;
      }
      return false;
    }

    /* ＊
       * Generate a url with TOTP instance.
       *
       * @param {issuer}
       * @type {String}
       * @desc maybe it is the Service name
       *
       * @return {String}
       */

  }, {
    key: 'url_gen',
    value: function url_gen() {
      var issuer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return _get(TOTP.prototype.__proto__ || Object.getPrototypeOf(TOTP.prototype), 'url_gen', this).call(this, issuer, 'totp');
    }
  }]);

  return TOTP;
}(_otp.OTP);