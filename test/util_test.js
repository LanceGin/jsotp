var util = require('../lib/util');
var assert = require('assert');

describe('Util module test', function() {

    var a = util.Util;
    
    describe('static rjust() function', function() {
        it("should set the init num length to n", function() {
            assert.equal("00123", a.rjust(123, 5));
        });
    });

    describe('static arr_rjust() function', function() {
        it("should set the init arr length to n", function() {
            let arr = [1, "", "3"];
            let arr_wanted_length = 4;
            assert.equal(arr_wanted_length, a.arr_rjust(arr, 4).length);
        });
    });

    describe('static byte_secret() function', function() {
        it("should transfer the secret to byte", function() {
            let secret = "J22U6B3WIWRRBTAV";
            assert.equal("NµO\u0007vE£\u0010Ì\u0015", a.byte_secret(secret));
        });
    });

    describe('static int_to_bytestring() function', function() {
        it("should transfer the input counter or time to bytestring", function() {
            let input = 49957590;
            assert.equal("\u0000\u0000\u0000\u0000\u0002úJÖ", a.int_to_bytestring(input));
        });
    });    

});
