var totp = require('../lib/totp');
var assert = require('assert');

describe('TOTP module test', function() {

    var TOTP = totp.TOTP;
    var a = new TOTP("J22U6B3WIWRRBTAV");
    
    describe('now() function', function() {
        it("should print 'TOTP.now'", function() {
            assert.equal("string", typeof(a.now()));
        });
    });

    describe('verify() function', function() {
        it("should verify the digit", function() {
            assert.equal(true, a.verify(parseInt(a.now())));
        })
    });

    describe('url_gen() function', function() {
        it("should return string", function() {
            assert.equal("string", typeof(a.url_gen()));
        })
    })
});
