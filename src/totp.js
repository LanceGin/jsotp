/*
 *  @module   : TOTP module to generate and verify TOTP password
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

import OTP from './otp';

 class TOTP extends OTP {
    /*＊
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
    constructor(secret, interval=30) {
        super(secret);
        this.interval = interval;
    }

    /*＊
     * Generate the OTP with current time.
     *
     * @return {OTP}
     *
     * @example
     * ```javascript
     * let totp = jsotp.TOTP.gen('BASE32_ENCODED_SECRET');
     * totp.now(); // => 432143
     * ```
     */
    now() {
        console.log("TOTP.now");
    }

    /*＊
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
     * let totp = jsotp.TOTP.gen('BASE32_ENCODED_SECRET');
     * totp.now(); // => 432143
     * // Verify for current time
     * totp.verify(432143); // => true
     * // Verify after 30s
     * totp.verify(432143); // => false
     * ```
     */
    verify(otp, time=null) {
        console.log("TOTP.verify");
    }
 }