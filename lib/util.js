'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Util = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  @module   : Util module to process the datas.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  @author   : Gin (gin.lance.inside@hotmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _base = require('./base32');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = exports.Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: 'rjust',

    /* ＊
       * Util rjust number with 0
       *
       * @param {num}
       * @type {int}
       * @desc input number
       *
       * @param {n}
       * @type {int}
       * @desc wanted length
       *
       * @return {String}
       */
    value: function rjust(num, n) {
      var numTmp = num;
      var len = numTmp.toString().length;

      while (len < n) {
        numTmp = '0' + numTmp;
        len += 1;
      }

      return numTmp;
    }

    /* ＊
       * Util rjust array with ""
       *
       * @param {arr}
       * @type {Array}
       * @desc input array
       *
       * @param {n}
       * @type {int}
       * @desc wanted length
       *
       * @return {BYTES}
       */

  }, {
    key: 'arr_rjust',
    value: function arr_rjust(arr, n) {
      var arrTmp = arr;
      if (n <= arrTmp.length) {
        arrTmp = arrTmp.splice(arrTmp.length - 1 - n);
        return arrTmp;
      }
      var diff = n - arrTmp.length;
      for (var i = 0; i < diff; i += 1) {
        arrTmp.unshift(String.fromCharCode(0));
      }
      return arrTmp;
    }

    /* ＊
       * Base32 decode the init secret
       *
       * @param {secret}
       * @type {String}
       * @desc input param, the init secret
       *
       * @return {String}
       */

  }, {
    key: 'byte_secret',
    value: function byte_secret(secret) {
      return _base.Base32.decode(secret.toUpperCase());
    }

    /* ＊
       * transfer the int type to BYTES type
       *
       * @param {input}
       * @type {int}
       * @desc input param, maybe counter or time
       *
       * @return {BYTES}
       */

  }, {
    key: 'int_to_bytestring',
    value: function int_to_bytestring(input) {
      var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;

      var inputTmp = input;
      var result = [];

      while (inputTmp !== 0) {
        result.push(String.fromCharCode(inputTmp & 0xFF));
        inputTmp >>= 8;
      }

      result = result.reverse();
      result = Util.arr_rjust(result, padding).join('');

      return result;
    }

    /* ＊
       * format the time string to int
       *
       * @param {time}
       * @type {Date}
       * @desc the time need to be format
       *
       * @param {interval}
       * @type {Int}
       * @desc interval means the one-time password's life,
       * default to be 30.
       *
       * @return {Int}
       */

  }, {
    key: 'timecode',
    value: function timecode(time, interval) {
      var timeStr = Date.parse(time).toString();

      // fotmat the time, the ms is not needed.
      var formatTime = timeStr.substring(0, timeStr.length - 3);

      return parseInt(parseInt(formatTime) / interval);
    }
  }]);

  return Util;
}();