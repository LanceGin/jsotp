/*
 *  @module   : OTP module to generate the password
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

export default class OTP  {
    constructor(secret, digits=6, digest="sha1") {
        /*
         * This constructor will create OTP instance
         */
        this.secret = secret;
        this.digits = digits;
        this.digest = digest;
    };

    generate_otp() {
        console.log("OTP.generate_otp");
    };
 }

