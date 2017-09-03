/*
 *  @module   : HOTP module to generate and verify HOTP password
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

import { OTP } from './otp';

export class HOTP extends OTP {
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
  at(count) {
    const digit = super.generate_otp(count);
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
  verify(otp, counter) {
    const otp_count = this.at(counter);

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
  url_gen(issuer = '') {
    return super.url_gen(issuer, 'hotp');
  }
}
