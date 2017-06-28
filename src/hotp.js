/*
 *  @module   : HOTP module to generate and verify HOTP password
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

import OTP from './otp';

class HOTP extends OTP {
    /*＊
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
     * let hotp = jsotp.HOTP.gen('BASE32_ENCODED_SECRET');
     * hotp.at(0); // => 432143
     * ```
     */
    at(count) {
        console.log("HOTP.at");
    }

    /*＊
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
     * let hotp = jsotp.HOTP.gen('BASE32_ENCODED_SECRET');
     * hotp.at(0); // => 432143
     * hotp.verify(432143, 0); // => true
     * hotp.verify(432143, 1); // => false
     * ```
     */
    verify(otp, counter) {
        console.log("HOTP.verify");
    }
}