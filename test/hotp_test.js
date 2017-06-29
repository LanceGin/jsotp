var hotp = require('../lib/hotp');
var assert = require('assert');

describe('HOTP module test', function() {

    var HOTP = hotp.HOTP;
    var a = new HOTP("BASE32_ENCODED_SECRET");
    
    describe('at() function', function() {
        it("should print 'HOTP.at'", function() {
            assert.equal("HOTP.at", a.at());
        });
    });

    describe('verify() function', function() {
        it("should print 'HOTP.verify'", function() {
            assert.equal("HOTP.verify", a.verify());
        })
    })
});
