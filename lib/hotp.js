'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HOTP = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _otp = require('./otp');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @module   : HOTP module to generate and verify HOTP password
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author   : Gin (gin.lance.inside@hotmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var HOTP = exports.HOTP = function (_OTP) {
  _inherits(HOTP, _OTP);

  function HOTP() {
    _classCallCheck(this, HOTP);

    return _possibleConstructorReturn(this, (HOTP.__proto__ || Object.getPrototypeOf(HOTP)).apply(this, arguments));
  }

  _createClass(HOTP, [{
    key: 'at',

    /* ＊
       * Generate the OTP with the given count
       *
       * @param {count}
       * @type {int}
       * @desc the OTP HMAC counter
       *
       * @return {OTP}
       *
       * @example
       * ```javascript
       * let hotp = jsotp.HOTP('BASE32_ENCODED_SECRET');
       * hotp.at(0); // => 432143
       * ```
       */
    value: function at(count) {
      var digit = _get(HOTP.prototype.__proto__ || Object.getPrototypeOf(HOTP.prototype), 'generate_otp', this).call(this, count);
      return digit;
    }

    /* ＊
       * Verifies the OTP passed in against the current counter.
       *
       * @param {otp}
       * @type {String}
       * @desc the OTP waiting for checking
       *
       * @param {counter}
       * @type {int}
       * @desc the OTP HMAC counter
       *
       * @return {Boolean}
       *
       * @example
       * ```javascript
       * let hotp = jsotp.HOTP('BASE32_ENCODED_SECRET');
       * hotp.at(0); // => 432143
       * hotp.verify(432143, 0); // => true
       * hotp.verify(432143, 1); // => false
       * ```
       */

  }, {
    key: 'verify',
    value: function verify(otp, counter) {
      var otp_count = this.at(counter);

      if (otp === otp_count) {
        return true;
      }
      return false;
    }

    /* ＊
       * Generate a url with HOTP instance.
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

      return _get(HOTP.prototype.__proto__ || Object.getPrototypeOf(HOTP.prototype), 'url_gen', this).call(this, issuer, 'hotp');
    }
  }]);

  return HOTP;
}(_otp.OTP);