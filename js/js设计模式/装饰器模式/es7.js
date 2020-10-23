function classDecorator(target) {
  target.hasDecorator = true
  return target
}


@classDecorator  // classDecorator(Button)
class Button {

}

console.log('Button是否被装饰了：', Button.hasDecorator);