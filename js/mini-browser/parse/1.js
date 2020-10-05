function find1(str) {
  let founda = false, fundb = false;
  for (let c of str) {
    if (c === 'a') {
      founda = true;
    } else if (founda && c === 'b') {
      return true
    } else {
      founda = false
    }
  }
}