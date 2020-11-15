function myNew(con, ...args) {
  if (typeof con !== 'function') {
    throw new Error('type error')
  }
  const obj = Object.create(con.prototype)
  const res = con.apply(this, args)
  const isObj = typeof res == 'object' && res !== null
  const isFun = typeof res == 'function'
  return isObj || isFun ? res : obj
}