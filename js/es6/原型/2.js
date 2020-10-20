
Car.prototype.height = 1400
Car.prototype.lang = 4900
Car.prototype.carName = 'BMW'

function Car(color, owner) {
  this.color = color
  this.owner = owner
}

var car = new Car('red', 'wang')
var var1 = new Car('green', 'haonan')