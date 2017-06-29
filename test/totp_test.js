var totp = require('../lib/totp');
var assert = require('assert');

describe('TOTP module test', function() {

    var TOTP = totp.TOTP;
    var a = new TOTP("BASE32_ENCODED_SECRET");
    
    describe('now() function', function() {
        it("should print 'TOTP.now'", function() {
            assert.equal("TOTP.now", a.now());
        });
    });

    describe('verify() function', function() {
        it("should print 'TOTP.verify'", function() {
            assert.equal("TOTP.verify", a.verify());
        })
    })
});
