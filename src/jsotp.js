/*
 *  @project  : jsotp
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 *  @link     : https://github.com/LanceGin/jsotp
 *  @Disc     : a node module to generate and verify one-time passwords
 */

import { TOTP } from './totp';
import { HOTP } from './hotp';
import { Base32 } from './base32';
import { Util } from './util';

/* ＊
 * Generate and return HOTP object
 *
 * @param {secret}
 * @type {String}
 * @desc random base32-encoded key to generate OTP.
 *
 * @return {OTP}
 */
function hotp_gen(secret, digits = 6, digest = 'SHA-1') {
  const hotp = new HOTP(secret, digits, digest);
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
function totp_gen(secret, interval = 30,digits=6,digest="SHA-1") {
  const totp = new TOTP(secret, interval,digits,digest);
  return totp;
}

export {
  hotp_gen as HOTP,
  totp_gen as TOTP,
  Base32,
  Util,
}