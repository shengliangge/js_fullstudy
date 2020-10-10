function Animal() {
  this.name = "animal";
  this.say = function () {
    console.log(this.name);
  }
}
Animal.prototype.look = function () {
  console.log("Animal look");
};
function Dog() {
  Animal.call(this)          //把Animal的this指向Dog的this   继承父类的属性
  this.name = "dog";
}
// 继承父类的方法
Dog.prototype = Object.create(Animal.prototype);
var dog = new Dog();
//写出输出内容
dog.look();
//写出输出内容
dog.say();