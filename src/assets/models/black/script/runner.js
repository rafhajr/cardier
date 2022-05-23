import Blob from "buffer"


var blob = new Blob.Blob(['some text'], {
  type: 'text/plain;charset=utf-8;',
})
saveAs(blob, 'thing.txt')
