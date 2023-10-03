export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const create = new DataView(new ArrayBuffer(length), 0, length);
  create.setInt8(position, value);
  return create;
}
