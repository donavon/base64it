base64 = require("..")

unenc = "\xff\xef\xfe\xff\xef\xfeTesting 1 2 3"

enc = "/+/+/+/+VGVzdGluZyAxIDIgMw=="
encnopad = "/+/+/+/+VGVzdGluZyAxIDIgMw"
encCRLF = "/+/+/+/+VGVzdGl\r\nuZyAxIDIgMw=="
encCRLFnopad = "/+/+/+/+VGVzdGl\r\nuZyAxIDIgMw"

encSafe = "_-_-_-_-VGVzdGluZyAxIDIgMw=="
encSafenopad = "_-_-_-_-VGVzdGluZyAxIDIgMw"
encSafeCRLF = "_-_-_-_-VGVzdGl\r\nuZyAxIDIgMw=="
encSafeCRLFnopad = "_-_-_-_-VGVzdGl\r\nuZyAxIDIgMw"

describe "Base64It", ->
    it "should implement a `encode` method", ->
        base64.should.respondTo("encode")
    it "should implement a `decode` method", ->
        base64.should.respondTo("decode")
    it "should implement a `strictEncode` method", ->
        base64.should.respondTo("strictEncode")
    it "should implement a `strictDecode` method", ->
        base64.should.respondTo("strictDecode")
    it "should implement a `urlSafeEncode` method", ->
        base64.should.respondTo("urlSafeEncode")
    it "should implement a `urlSafeDecode` method", ->
        base64.should.respondTo("urlSafeDecode")

describe "When encode is called", ->
    describe "with no options", ->
        it "should encode it", ->
            val = base64.encode(unenc)
            val.should.be.equal(enc)

    describe "with stripPadding option set to true", ->
        it "should strip padding", ->
            val = base64.encode(unenc, {stripPadding:true})
            val.should.be.equal(encnopad)

    describe "with lineLength option set to '15'", ->
        it "should break after 15 chars", ->
            val = base64.encode(unenc, {lineLength:15})
            val.should.be.equal(encCRLF)

    describe "with BOTH above options set", ->
        it "should break after 4 chars AND strip padding", ->
            val = base64.encode(unenc, {stripPadding:true, lineLength:15})
            val.should.be.equal(encCRLFnopad)


describe "When decode is called", ->
    describe "with a non CRLF encoded string", ->
        it "should decode it", ->
            val = base64.decode(enc)
            val.should.be.equal(unenc)

    describe "with a CRLF encoded string", ->
        it "should decode it", ->
            val = base64.decode(encCRLF)
            val.should.be.equal(unenc)

describe "When strictEncode is called", ->
    describe "with no options", ->
        it "should encode it", ->
            val = base64.strictEncode(unenc)
            val.should.be.equal(enc)

    describe "with stripPadding option set to true", ->
        it "should strip padding", ->
            val = base64.strictEncode(unenc, {stripPadding:true})
            val.should.be.equal(encnopad)

    describe "with lineLength option set to '15'", ->
        it "should break after 15 chars", ->
            val = base64.strictEncode(unenc, {lineLength:15})
            val.should.be.equal(encCRLF)

    describe "with BOTH above options set", ->
        it "should break after 4 chars AND strip padding", ->
            val = base64.strictEncode(unenc, {stripPadding:true, lineLength:15})
            val.should.be.equal(encCRLFnopad)


describe "When strictDecode is called", ->
    describe "with a non CRLF encoded string", ->
        it "should decode it", ->
            val = base64.strictDecode(enc)
            val.should.be.equal(unenc)

    describe "with a CRLF encoded string", ->
        it "should decode it", ->
            val = base64.strictDecode(encCRLF)
            val.should.be.equal(unenc)


describe "When urlSafeEncode is called", ->
    describe "with no options", ->
        it "should encode it", ->
            val = base64.urlSafeEncode(unenc)
            val.should.be.equal(encSafe)

    describe "with stripPadding option set to true", ->
        it "should strip padding", ->
            val = base64.urlSafeEncode(unenc, {stripPadding:true})
            val.should.be.equal(encSafenopad)

    describe "with lineLength option set to '15'", ->
        it "should break after 15 chars", ->
            val = base64.urlSafeEncode(unenc, {lineLength:15})
            val.should.be.equal(encSafeCRLF)

    describe "with BOTH above options set", ->
        it "should break after 15 chars AND strip padding", ->
            val = base64.urlSafeEncode(unenc, {stripPadding:true, lineLength:15})
            val.should.be.equal(encSafeCRLFnopad)


describe "When urlSafeDecode is called", ->
    describe "with a non CRLF encoded string", ->
        it "should decode it", ->
            val = base64.urlSafeDecode(encSafe)
            val.should.be.equal(unenc)

    describe "with a CRLF encoded string", ->
        it "should decode it", ->
            val = base64.urlSafeDecode(encSafeCRLF)
            val.should.be.equal(unenc)
