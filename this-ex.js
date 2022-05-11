//this is to  refer to the object in the function  determined entirely by how this function be called

// implicit binding, explicit binding, new binding or default binding

// implicit binding

const person = {
  name: 'meng',
  say() {
    console.log(this.name);
  },
};

person.say();

//new binding

function Person(name) {
  // constructor function

  // this is set as {}
  this.name = name;

  //this new object is returned
}

// construtor function  is invoked  with new keyword

// default binding using the global object

function sayMyName() {
  console.log(`${this.name}`);
}

sayMyName('davis');

// explicit binding

let newPerson = {
  name: 'julia',
};

sayMyName.call(newPerson);

// order of precedence


