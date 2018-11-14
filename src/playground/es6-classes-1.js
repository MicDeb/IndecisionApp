class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getGrettings() {
    return `hi. i am ${this.name}`
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += `. Their major is ${this.major}.`
    }

    return description;
  }
}


class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGrettings() {
    let greetings = super.getGrettings();

    if(this.homeLocation) {
      greetings += `. I'm visiting from ${this.homeLocation}.`
    }

    return greetings;
  }
}


const me = new Traveler('Michal', 26, 'Warsaw');
console.log(me.getGrettings());

const you = new Traveler('Michal', 26);
console.log(you.getGrettings());
