/*
 *  @module   : OTP module to generate the password
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

export default class OTP  {
    /*＊
     * This constructor will create OTP instance.
     *
     * @param {secret}
     * @type {String}
     * @desc random base32-encoded key, it is the 
     * key that be used to verify.
     *
     * @param {digits}
     * @type {int} 
     * @desc the length of the one-time password, default to be 6
     *
     * @param {digest}
     * @type {String}
     * @desc the key that be used to do HMAC encoding, dedault and 
     * only to be "sha1"
     *
     */
    constructor(secret, digits=6, digest="sha1") {
        this.secret = secret;
        this.digits = digits;
        this.digest = digest;
    }

    /*＊
     * When class HOTP or TOTP pass the input params to this
     * function, it will generate the OTP object with params,
     * the params may be counter or time. 
     *
     * @param {input}
     * @type {int} 
     * @desc input params to generate OTP object, maybe
     * counter or time.
     *
     * @return {OTP}
     */
    generate_otp(input) {
        console.log("OTP.generate_otp");
    }
 }

