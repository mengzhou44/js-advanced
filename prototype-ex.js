function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName
}

Person.prototype.getFullName = function() {
      return `${this.firstName} ${this.lastName}`
}


let person = new Person('meng', 'zhou')

console.log(person.getFullName())