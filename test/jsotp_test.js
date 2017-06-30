let jsotp = require("../lib/jsotp");
var assert = require('assert');

describe('jsotp class test', function() {
    describe('is HOTP module import?', function() {

        let hotp = jsotp.HOTP("J22U6B3WIWRRBTAV");

        it("should return object", function() {
            assert.equal("object", typeof(hotp))
        });
    });

    describe('is TOTP module import?', function() {
        
        let totp = jsotp.TOTP("J22U6B3WIWRRBTAV");

        it("should return object", function() {
            assert.equal("object", typeof(totp))
        });
    });

    describe('is Base32 module import?', function() {
        
        let b32_random = jsotp.Base32.random_gen();

        it("should return string", function() {
            assert.equal("string", typeof(b32_random))
        });
    });

    describe('is Util module import?', function() {
        
        let now = jsotp.Util.timecode(new Date(), 30);

        it("should return int", function() {
            assert.equal("number", typeof(now))
        });
    });
});
