Base64It [![Build Status](https://travis-ci.org/YuzuJS/base64it.svg)](https://travis-ci.org/YuzuJS/base64it)
========

A simple base64 encoder/decoder that works with HTML5 and Node. Supports strict mode and URL safe encoding/decoding.

### Get the package

```
npm install base64it --save
```

##Encoding

base64it supports the following encoding standards:

1. Standard 'base64' (i.e. strict) (see [RFC 4648 § 4](http://tools.ietf.org/html/rfc4648#section-4>))
2. Standard 'base64url' with URL and Filename Safe Alphabet (see [RFC 4648 § 5](http://tools.ietf.org/html/rfc4648#section-5>))

### Examples

To encode, just call base64.encode.
```javascript
var base64 = require("base64it");

var encoded = base64.encode("Hello world")
console.log(encoded); // SGVsbG8gd29ybGQ=
```

To convert it back, just call base64.decode.
```javascript
var decoded = base64.decode(encoded)
console.log(decoded); // Hello world
```

### Live Demo

You can also see Base64It in action, live, on the Interwebs! Check out this fiddle. <http://jsfiddle.net/donavon/aqv815ec/>

## API

##### base64.encode(unencoded:string, options?:Options):string
Encodes a string into a base64 encoded string.

Where:  
**unencoded** is the string you want to encode.  
**options** is a set of encoding Options as follows (optional)  

* **stripPadding**:Boolean - determines whether the resulting string will have any padding characters (i.e. "=") removed (default = false)
* **lineLength**:Number - if set, the resulting string will be broken into multiple lines seperated by \r\n. This is normally set to either 64 or 76. (default = one continuous line)
* **urlSafe**:Boolean - if set, the resulting string will be URL Safe (i.e. "+" and "/" chars willbe converted to "-" and "_" respectively). (default = false)

##### base64.strictEncode(unencoded:string, options?:Options):string
This is simply sugar around `base64.encode` with the `urlSafe` options seto to `false`. 

##### base64.urlSafeEncode(unencoded:string, options?:Options):string
This is simply sugar around `base64.encode` with the `urlSafe` options seto to `true`. 

##### base64.strictDecode(encoded:string):string
This will decode a base64 encoded string. Padding characters are optional.

##### base64.urlSafeDecode(encoded:string):string

This will decode a URL safe base64 encoded string. Padding characters are optional.

## License
For use under [MIT license](http://github.com/YuzuJS/base64it/raw/master/LICENSE)

