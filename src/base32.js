/*
 *  @module   : BASE32 module to generate the random b32 key
 *              and decode the secret.
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

const  nibbler = require("./nibbler/nibbler");

export class Base32 {
    /*＊
     * Base32 decode function
     *
     * @param {secret}
     * @type {String} 
     * @desc input string
     *
     * @return {String}
     */
    static decode(secret) {
        return nibbler.b32decode(secret);
    }

    static random_gen() {
        return "static Base32.random_gen";
    }
}