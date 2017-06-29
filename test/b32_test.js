var b32 = require('../lib/base32');
var assert = require('assert');

describe('Base32 module test', function() {

    var a = b32.Base32;
    
    describe('static decode() function', function() {
        it("should print 'static Base32.decode'", function() {
            assert.equal("static Base32.decode", a.decode());
        });
    });

    describe('static random_gen() function', function() {
        it("should print 'static Base32.random_gen'", function() {
            assert.equal("static Base32.random_gen", a.random_gen());
        })
    })
});
