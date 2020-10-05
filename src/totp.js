/*
 *  @module   : TOTP module to generate and verify TOTP password
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

import { OTP } from './otp';
import { Util } from './util';

export class TOTP extends OTP {
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
  constructor(secret, interval = 30) {
    super(secret);
    this.interval = interval;
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
  now() {
    // get now time string
    const now = Util.timecode(new Date(), this.interval);

    // generate the one-time password
    const digit = super.generate_otp(now);
    return digit;
  }
  prev() {
    return this.generate_otp(
      (Date.now() / 1000 - this.interval | 0) / this.interval
    )
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
  verify(otp, time = null) {
    let otp_time;

    if (time == null) {
      time = new Date();
    }
    otp_time = super.generate_otp(Util.timecode(time, this.interval));

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
  url_gen(issuer = '') {
    return super.url_gen(issuer, 'totp');
  }
}
