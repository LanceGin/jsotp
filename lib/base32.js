'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 *  @module   : BASE32 module to generate the random b32 key
 *              and decode the secret.
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

var nibbler = require('./nibbler/nibbler');

var Base32 = exports.Base32 = function () {
  function Base32() {
    _classCallCheck(this, Base32);
  }

  _createClass(Base32, null, [{
    key: 'decode',

    /* ＊
       * Base32 decode function
       *
       * @param {secret}
       * @type {String}
       * @desc input string
       *
       * @return {String}
       */
    value: function decode(secret) {
      return nibbler.b32decode(secret);
    }

    /* ＊
       * Base32 generate random b32 encoded string function
       *
       * @param {length}
       * @type {int}
       * @desc the length of random b32 encoded string
       *
       * @return {String}
       */

  }, {
    key: 'random_gen',
    value: function random_gen() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;

      var random_str = Math.random().toString(36);
      random_str = nibbler.b32encode(random_str);

      return random_str.substring(0, length);
    }
  }]);

  return Base32;
}();