# jsotp

`jsotp`是一个用来生成用来生成及验证一次性密码的js模块，一次性密码通常用来在web应用或者其他登录系统中作为二步验证或多步验证使用。

该模块基于 [RFC4226](https://tools.ietf.org/html/rfc4226) （HOTP：基于HMAC的一次性密码算法）和 [RFC6238](https://tools.ietf.org/html/rfc6238)（TOTP：基于时间的一次性密码算法）实现

### 功能

* 随机生成base32加密的字符串
* 将base32加密后的字符串生成otpauth链接，可用来生成二维码
* 创建可验证的HOTP对象
* 验证HOTP密码
* 创建可验证的TOTP对象
* 验证TOTP密码

### 安装

	npm install jsotp
	
### 模块

全部模块支持:

	let jsotp = require('jsotp');
	
仅 `Base32` 模块支持:

	let jsotp = require('jsotp/base32');
	
仅 `HOTP` 模块支持:

	let jsotp = require('jsotp/hotp');
	
仅 `TOTP` 模块支持: 

	let jsotp = require('jsotp/totp');
	
### 使用

#### 基于时间的OTP

```javascript
# import
let jsotp = require('jsotp');

# Create TOTP object
let totp = jsotp.TOTP.gen('BASE32_ENCODED_SECRET');
totp.now(); # => 432143

# Verify for current time
totp.verify(432143); # => true

# Verify after 30s
totp.verify(432143); # => false
```

#### 基于计数器的OTP

```javascript
# import
let jsotp = require('jsotp');

# Create HOTP object
let hotp = jsotp.HOTP.gen('BASE32_ENCODED_SECRET');
hotp.at(0); # => 432143
hotp.at(1); # => 231434
hotp.at(2132); # => 242432

# Verify with a counter
hotp.verify(242432, 2132); # => true
hotp.verify(242432, 2133); # => false
```

#### 生成随机base32加密字符串

```javascript
# import
let jsotp = require('jsotp');

# Generate
let b32_secret = jsotp.Base32.random_gen();
```

### 接口

#### • jsotp.Base32.random_gen()

#### • jsotp.Util.url_gen

#### • jsotp.TOTP.gen()

#### • jsotp.TOTP.now()

#### • jsotp.TOTP.verify()

#### • jsotp.HOTP.gen()

#### • jsotp.HOTP.at()

#### • jsotp.HOTP.verify()

### [README](../README.md)