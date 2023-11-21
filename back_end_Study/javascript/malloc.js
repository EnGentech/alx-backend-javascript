//working with Buffer in javascript

const mybuffer = Buffer.alloc(10)
//console.log(mybuffer)
const U8view = new Int8Array(mybuffer)
U8view.set(2, 1)
console.log(U8view[1])


//declaring buffer with array
const arr = [1, 5, 8, 10]
const buffer2 = Buffer.from(arr)
//console.log(buffer2.byteLength)