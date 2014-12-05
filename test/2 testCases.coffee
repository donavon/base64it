base64 = require("..");

ts1 = "\xff\xef\xfe\xff\xef\xfeTesting 1 2 3"
ts2 = "The quick brown fox jumps over the lazy dog"

tests = [
    { in: ts1, out: "/+/+/+/+VGVzdGluZyAxIDIgMw==" }
    { in: ts1, out: "_-_-_-_-VGVzdGluZyAxIDIgMw==", options: {urlSafe:true} }
    { in: ts1, out: "/+/+/+/+VGVzdGluZyAxIDIgMw", options: {stripPadding:true} }
    { in: ts1, out: "/+/+/+/+VG\r\nVzdGluZyAx\r\nIDIgMw==", options: {lineLength:10} }
    { in: ts1, out: "/+/+/+/+VG\r\nVzdGluZyAx\r\nIDIgMw", options: {lineLength:10, stripPadding:true} }
    { in: ts1, out: "_-_-_-_-VG\r\nVzdGluZyAx\r\nIDIgMw", options: {lineLength:10, stripPadding:true, urlSafe:true} }

    { in: ts2, out: "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw==" }
    { in: ts2, out: "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw==", options: {lineLength:1000} }
    { in: ts2, out: "VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw", options: {lineLength:1000, stripPadding:true} }

    { in: "", out: "" }
]

describe "Test Cases", ->
    tests.forEach (test, i) ->
        it "Case #" + (i+1), ->
            base64.encode(test.in, test.options).should.equal(test.out);
