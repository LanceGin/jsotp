var otp = require('../lib/otp');
var assert = require('assert');

describe('OTP module test', function() {

    var OTP = otp.OTP;
    var a = new OTP("BASE32_ENCODED_SECRET");
    
    describe('generate_otp() function', function() {
        it("should print 'OTP.generate_otp'", function() {
            assert.equal("OTP.generate_otp", a.generate_otp())
        });
    });
});
