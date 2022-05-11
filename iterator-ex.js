const obj = {
  [Symbol.iterator]: function () {
    let step = 0;

    return {
      next() {
        step++;
        if (step === 1) {
          return { value: 1, done: false };
        } else if (step === 2) {
          return { value: 2, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (let val of obj) {
  console.log(val);
}
//******************************** */

class Students {
  constructor(data) {
    this.data = data;
  }

  print() {
    console.log(this.data);
  }

  [Symbol.iterator]() {
    let index = -1;
    let data = this.data;

    return {
      next: () => ({ value: data[++index], done: !(index in data) }),
    };
  }
}

let students = new Students(['mark', 'lina', 'victoria']);

students.print();

for (let item of students) {
  console.log(item);
}
