class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
}

class SuperHero extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.isSuperHero = true;
  }

  fightCrime() {
    console.log('fighting crime!');
  }
}

const hero = new SuperHero('divid', 'smith');

console.log(hero.getFullName());
hero.fightCrime();
