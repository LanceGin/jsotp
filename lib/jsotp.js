'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Util = exports.Base32 = exports.TOTP = exports.HOTP = undefined;

var _totp = require('./totp');

var _hotp = require('./hotp');

var _base = require('./base32');

var _util = require('./util');

/* ＊
 * Generate and return HOTP object
 *
 * @param {secret}
 * @type {String}
 * @desc random base32-encoded key to generate OTP.
 *
 * @return {OTP}
 */
/*
 *  @project  : jsotp
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 *  @link     : https://github.com/LanceGin/jsotp
 *  @Disc     : a node module to generate and verify one-time passwords
 */

function hotp_gen(secret) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var digest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'SHA-1';

  var hotp = new _hotp.HOTP(secret, digits, digest);
  return hotp;
}

/* ＊
 * Generate and return TOTP object
 *
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
function totp_gen(secret) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

  var totp = new _totp.TOTP(secret, interval);
  return totp;
}

exports.HOTP = hotp_gen;
exports.TOTP = totp_gen;
exports.Base32 = _base.Base32;
exports.Util = _util.Util;