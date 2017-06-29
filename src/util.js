/*
 *  @module   : Util module to process the datas.
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

import { Base32 } from './base32';

export class Util {
    /*＊
     * Util rjust number with 0
     *
     * @param {num}
     * @type {int} 
     * @desc input number
     *
     * @param {n}
     * @type {int} 
     * @desc wanted length
     *
     * @return {String}
     */
    static rjust(num, n) {
        let len = num.toString().length;

        while (len < n) {
            num = "0" + num;
            len++;
        }

        return num;
    }

    /*＊
     * Util rjust array with ""
     *
     * @param {arr}
     * @type {Array} 
     * @desc input array
     *
     * @param {n}
     * @type {int} 
     * @desc wanted length
     *
     * @return {BYTES}
     */
    static arr_rjust(arr, n) {
        if (0 <= arr.lenth) {
            arr = arr.splice(arr.lenth - 1 - n);
            return arr;
        } else {
            let diff = n - arr.length;
            for (let i = 0; i < diff; i++) {
                arr.unshift(String.fromCharCode(0));
            }
            return arr;
        }
    }

    /*＊
     * Base32 decode the init secret
     *
     * @param {secret}
     * @type {String} 
     * @desc input param, the init secret
     *
     * @return {String}
     */
    static byte_secret(secret) {
        return Base32.decode(secret.toUpperCase());
    }

    /*＊
     * transfer the int type to BYTES type
     *
     * @param {input}
     * @type {int} 
     * @desc input param, maybe counter or time
     *
     * @return {BYTES}
     */
    static int_to_bytestring(input, padding=8) {
        let result = [];

        while (0 != input) {
            result.push(String.fromCharCode(input & 0xFF));
            input >>= 8;
        }

        result = result.reverse();
        result = Util.arr_rjust(result, padding).join("");

        return result;
    }

}