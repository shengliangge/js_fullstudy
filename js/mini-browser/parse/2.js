function find(str) {
  let state = start;
  for (let c of str) {
    state = state(c);
  }
  return state === end
}

function start(c) {
  if (c === 'a') return founda(c);
  return start
}
function end(c) {
  return end
}

function founda(c) {
  if (c === 'a') return foundb
  return start(c)
}
function foundb(c) {  
  if (c === 'b') return foundc
  return start(c)
}
function foundc(c) {
  if (c === 'c') return end
  return start(c)
}

console.log(find('ababaabbc'));
