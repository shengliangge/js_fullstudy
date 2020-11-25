function myInstanceof(left, right) {
  if (typeof left != "object" || left == null) return false
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto == null) return null   //知道为null，寻找失败
    if (proto == right.prototype) return true
    proto = Object.getPrototypeOf(proto)  //不停往上找
  }
}

