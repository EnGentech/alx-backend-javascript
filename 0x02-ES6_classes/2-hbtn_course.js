export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this.students;
  }

  set name(val) {
    if (typeof (val) === 'string') {
      this._name = val;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(num) {
    if (typeof (num) === 'number') {
      this._length = num;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(arr) {
    if (typeof (arr) === 'array') {
      this._students = arr;
    }
  }
}
