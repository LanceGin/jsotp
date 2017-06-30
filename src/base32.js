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

    /*＊
     * Base32 generate random b32 encoded string function
     *
     * @param {length}
     * @type {int} 
     * @desc the length of random b32 encoded string
     *
     * @return {String}
     */
    static random_gen(length=16) {
        let random_str = Math.random().toString(36);
            random_str = nibbler.b32encode(random_str);

        return random_str.substring(0, length);
    }
}