/*
 *  @module   : Util module to process the datas.
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */

import { Base32 } from './base32';

export class Util {
  /* ＊
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
    let numTmp = num;
    let len = numTmp.toString().length;

    while (len < n) {
      numTmp = `0${numTmp}`;
      len += 1;
    }

    return numTmp;
  }

  /* ＊
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
    let arrTmp = arr;
    if (n <= arrTmp.length) {
      arrTmp = arrTmp.splice(arrTmp.length - 1 - n);
      return arrTmp;
    }
    const diff = n - arrTmp.length;
    for (let i = 0; i < diff; i += 1) {
      arrTmp.unshift(String.fromCharCode(0));
    }
    return arrTmp;
  }

  /* ＊
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

  /* ＊
     * transfer the int type to BYTES type
     *
     * @param {input}
     * @type {int}
     * @desc input param, maybe counter or time
     *
     * @return {BYTES}
     */
  static int_to_bytestring(input, padding = 8) {
    let inputTmp = input;
    let result = [];

    while (inputTmp !== 0) {
      result.push(String.fromCharCode(inputTmp & 0xFF));
      inputTmp >>= 8;
    }

    result = result.reverse();
    result = Util.arr_rjust(result, padding).join('');

    return result;
  }

  /* ＊
     * format the time string to int
     *
     * @param {time}
     * @type {Date}
     * @desc the time need to be format
     *
     * @param {interval}
     * @type {Int}
     * @desc interval means the one-time password's life,
     * default to be 30.
     *
     * @return {Int}
     */
  static timecode(time, interval) {
    const timeStr = Date.parse(time).toString();

    // fotmat the time, the ms is not needed.
    const formatTime = timeStr.substring(0, timeStr.length - 3);

    return parseInt(parseInt(formatTime) / interval);
  }
}
