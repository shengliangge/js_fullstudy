// Object.create 的实现原理
function create(obj) {
  if (typeof obj != 'object') throw TypeError
  function Ctor() { }
  Ctor.prototype = obj
  let o = new Ctor()
  return o
}