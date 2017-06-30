var hotp = require('../lib/hotp');
var assert = require('assert');

describe('HOTP module test', function() {

    var HOTP = hotp.HOTP;
    var a = new HOTP("J22U6B3WIWRRBTAV");
    
    describe('at() function', function() {
        it("should return string", function() {
            assert.equal("string", typeof(a.at(0)));
        });
    });

    describe('verify() function', function() {
        it("should verify the digit", function() {
            assert.equal(true, a.verify(a.at(0), 0));
            assert.equal(false, a.verify(a.at(0), 1));
        })
    })
});
