function doSth(t, cb) {

  return function () {
    if (--t === 0) {
      console.log(t)
      cb();
    }
  }
}

function logSth() {
  console.log('打印')
}

let fn = doSth(4, logSth)

fn();
fn()
fn()
fn()
fn()
fn()
fn()