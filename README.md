# jsotp

`jsotp` is a node module to generate and verify one-time passwords that were used to implement 2FA and MFA authentication method in web applications and other login-required systems.

The module was implement based on [RFC4226](https://tools.ietf.org/html/rfc4226) (HOTP: An HMAC-Based One-Time Password Algorithm) and [RFC6238](https://tools.ietf.org/html/rfc6238) (TOTP: Time-Based One-Time Password Algorithm)

### Feature

* Generate random base32 encoded string
* Generate a `otpauth url` with the b32 encoded string
* Create a HOTP object with verification
* Verify a HOTP token
* Create a TOTP object with verification
* Verify a TOTP token

### Installation

```shell
npm install jsotp
```
	
### Module

All modules support:

```javascript
let jsotp = require('jsotp');
```
	
Only `Base32` module support:

```javascript
let jsotp = require('jsotp/base32');
```
	
Only `HOTP` module support:

```javascript
let jsotp = require('jsotp/hotp');
```
	
Only `TOTP` module support: 

```javascript
let jsotp = require('jsotp/totp');
```
	
### Usage

#### Time-based OTPs

```javascript
// import
let jsotp = require('jsotp');

// Create TOTP object
let totp = jsotp.TOTP('BASE32ENCODEDSECRET');
totp.now(); // => 432143

// Verify for current time
totp.verify(432143); // => true

// Verify after 30s
totp.verify(432143); // => false
```

#### Counter-based OTPs

```javascript
// import
let jsotp = require('jsotp');

// Create HOTP object
let hotp = jsotp.HOTP('BASE32ENCODEDSECRET');
hotp.at(0); // => 432143
hotp.at(1); // => 231434
hotp.at(2132); // => 242432

// Verify with a counter
hotp.verify(242432, 2132); // => true
hotp.verify(242432, 2133); // => false
```

#### Generate random base32 encoded secret

```javascript
// import
let jsotp = require('jsotp');

// Generate
let b32_secret = jsotp.Base32.random_gen();
```

### Api

#### • [jsotp.Base32.random_gen(length)](https://github.com/LanceGin/jsotp/blob/master/src/base32.js#L32)

	param: length
	type: int
	default: 16
	return: String
	desc: the length of random base32 encoded string.

#### • <del>jsotp.Util.url_gen()</del>

#### • [jsotp.TOTP.now()](https://github.com/LanceGin/jsotp/blob/master/src/totp.js#L38)
	
	return: String
	desc: get the one-time password with current time.

#### • [jsotp.TOTP.verify(totp)](https://github.com/LanceGin/jsotp/blob/master/src/totp.js#L70)

	param: totp
	type: string
	return: Boolean
	desc: verify the totp code.

#### • [jsotp.HOTP.at(counter)](https://github.com/LanceGin/jsotp/blob/master/src/hotp.js#L24)

	param: counter
	type: int
	return: String
	desc: generate one-time password with counter.

#### • [jsotp.HOTP.verify(hotp, count)](https://github.com/LanceGin/jsotp/blob/master/src/hotp.js#L50)
	
	param: hotp
	type: string
	param: count
	type: int
	return: Boolean
	desc: verify the hotp code.

### Contribute

* Clone repo and install dependencies

```shell
git clone git@github.com:LanceGin/jsotp.git
npm install
```

* Contribute the code in `src/`, and run command below to build the es6 code to es2015. That will create a local directory named `lib/`.

```shell
npm run build
```

* Unit test

```shell
npm test
```

### [中文文档](docs/README_zh.md)

