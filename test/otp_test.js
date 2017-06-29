var otp = require('../lib/otp');
var assert = require('assert');

describe('OTP module test', function() {

    var a = new otp.OTP("J22U6B3WIWRRBTAV");

    console.log(a.generate_otp(49957590));
    
    describe('generate_otp() function', function() {
        it("should print '139878'", function() {
            assert.equal("139878", a.generate_otp(49957590))
        });
    });
});
