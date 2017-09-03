/*
 *  @module   : OTP module to generate the password
 *  @author   : Gin (gin.lance.inside@hotmail.com)
 */
const jsSHA = require('jssha');

import { Base32 } from './base32';
import { Util } from './util';

export class OTP {
  /* ＊
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
  constructor(secret, digits = 6, digest = 'SHA-1') {
    this.secret = secret;
    this.digits = digits;
    this.digest = digest;
  }

  /* ＊
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
    // generate HMAC object with SHA-1 digest
    const hmacObj = new jsSHA(this.digest, 'BYTES');
    // set hmac token
    hmacObj.setHMACKey(Util.byte_secret(this.secret), 'BYTES');
    // hamc encode the input param
    hmacObj.update(Util.int_to_bytestring(input));

    // get HMAC ans
    const hmac = hmacObj.getHMAC('BYTES');

    // transfer hmac to Array
    const hmac_a = hmac.split('');

    // calculate the init offset
    const offset = hmac_a[hmac_a.length - 1].charCodeAt() & 0xf;

    // calculate the code
    const code = (
      (hmac_a[offset].charCodeAt() & 0x7f) << 24 |
            (hmac_a[offset + 1].charCodeAt() & 0xff) << 16 |
            (hmac_a[offset + 2].charCodeAt() & 0xff) << 8 |
            (hmac_a[offset + 3].charCodeAt() & 0xff)
    );

    // get the init str code
    let str_code = (code % 10 ** this.digits).toString();

    // rjust format
    str_code = Util.rjust(str_code, this.digits);

    return str_code;
  }

  /* ＊
     * Generate a url with TOTP or HOTP instance.
     *
     * @param {issuer}
     * @type {String}
     * @desc maybe it is the Service name
     *
     * @param {type}
     * @type {String}
     * @desc type of OTP instance
     *
     * @return {String}
     */
  url_gen(issuer, type) {
    return `otpauth://${type}/SK?secret=${this.secret}&issuer=${issuer}`;
  }
}

