var a={
  user:'蜗牛',
  fn:function(){
    console.log(this.user);
  }
}
var b=a.fn;
b()
