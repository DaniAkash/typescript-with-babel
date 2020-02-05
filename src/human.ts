class Human {
  name: string;
  age: number;
  spokenWords: string[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.spokenWords = [];
  }

  speak(words) {
    this.spokenWords.push(words);
    console.log(words);
  }
}

const dani = new Human("Dani", 20);

dani.speak("Hello world!");
dani.speak("New Language");

console.log(dani.name);
console.log(dani.age);
console.log(dani.spokenWords);
