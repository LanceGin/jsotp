var b32 = require('../lib/base32');
var assert = require('assert');

describe('Base32 module test', function() {

    var a = b32.Base32;
    
    describe('static decode() function', function() {
        it("should print 'Hello, World!'", function() {
            assert.equal("Hello, World!", a.decode("JBSWY3DPFQQFO33SNRSCC====="));
        });
    });

    describe('static random_gen() function', function() {
        it("should print 'static Base32.random_gen'", function() {
            assert.equal("static Base32.random_gen", a.random_gen());
        })
    })
});
