# jsotp

`jsotp`是一个用来生成用来生成及验证一次性密码的js模块，一次性密码通常用来在web应用或者其他登录系统中作为二步验证或多步验证使用。

该模块基于 [RFC4226](https://tools.ietf.org/html/rfc4226) （HOTP：基于计数器的一次性密码算法）和 [RFC6238](https://tools.ietf.org/html/rfc6238)（TOTP：基于时间的一次性密码算法）实现

### 示例

![](http://wx4.sinaimg.cn/large/89243dfbgy1fh3bz5e8bkj20rs0go460.jpg)

### 功能

* 随机生成base32加密的字符串
* 将base32加密后的字符串生成otpauth链接，可用来生成二维码
* 创建可验证的HOTP对象
* 验证HOTP密码
* 创建可验证的TOTP对象
* 验证TOTP密码

### 安装

```shell
npm install jsotp
```
	
### 模块

全部模块支持:

```javascript
const jsotp = require('jsotp');
```
	
### 使用

#### 基于时间的OTP

```javascript
// import
const jsotp = require('jsotp');

// Create TOTP object
const totp = jsotp.TOTP('BASE32ENCODEDSECRET');
totp.now(); // => 432143

// Verify for current time
totp.verify(432143); // => true

// Verify after 30s
totp.verify(432143); // => false
```

#### 基于计数器的OTP

```javascript
// import
const jsotp = require('jsotp');

// Create HOTP object
const hotp = jsotp.HOTP('BASE32ENCODEDSECRET');
hotp.at(0); // => 432143
hotp.at(1); // => 231434
hotp.at(2132); // => 242432

// Verify with a counter
hotp.verify(242432, 2132); // => true
hotp.verify(242432, 2133); // => false
```

#### 生成随机base32加密字符串

```javascript
// import
const jsotp = require('jsotp');

// Generate
const b32_secret = jsotp.Base32.random_gen();
```

### 接口

#### • [jsotp.Base32.random_gen(length)](https://github.com/LanceGin/jsotp/blob/master/src/base32.js#L32)

	param: length
	type: int
	default: 16
	return: String
	desc: the length of random base32 encoded string.

#### • [jsotp.TOTP(secret)](https://github.com/LanceGin/jsotp/blob/master/src/jsotp.js#L48)
	
	param: secret
	type: string
	return: TOTP
	desc: generate TOTP instance.
	
#### • [jsotp.TOTP.now()](https://github.com/LanceGin/jsotp/blob/master/src/totp.js#L38)
	
	return: String
	desc: get the one-time password with current time.

#### • [jsotp.TOTP.verify(totp)](https://github.com/LanceGin/jsotp/blob/master/src/totp.js#L70)

	param: totp
	type: string
	return: Boolean
	desc: verify the totp code.
	
#### • [jsotp.TOTP.url_gen(issuer)](https://github.com/LanceGin/jsotp/blob/master/src/totp.js#L94)

	param: issuer
	type: string
	return: string
	desc: generate url with TOTP instance

#### • [jsotp.HOTP(secret)](https://github.com/LanceGin/jsotp/blob/master/src/jsotp.js#L47)
	
	param: secret
	type: string
	return: HOTP
	desc: generate HOTP instance.
	
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

#### • [jsotp.HOTP.url_gen(issuer)](https://github.com/LanceGin/jsotp/blob/master/src/hotp.js#L69)

	param: issuer
	type: string
	return: string
	desc: generate url with HOTP instance

### 开发

* 克隆代码并安装依赖

```shell
git clone git@github.com:LanceGin/jsotp.git
npm install
```

* 在`src/`文件夹中进行源码编写，执行下面命令将es6代码编译成es2015，命令会生成一个`lib/`本地文件夹。

```shell
npm run build
```

* 单元测试

```shell
npm test
```

### [README](../README.md)