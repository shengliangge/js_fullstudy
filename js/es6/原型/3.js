Person.prototype.lastName='Fu'
function Person(name) {
  this.name = name
}
var person = new Person('jinlong')

console.log(person.lastName);
person.lastName='Yu'
console.log(person.lastName);

// constructor 为了让Car()这个构造出的所有的对象都能找到它的