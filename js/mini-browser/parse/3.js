let response = `
<html>
  <head></head>
  <body>
    <div></div>
  </body>
</html>
`

// 解析成 DOM 树
// 分词（词法分析）(FSM)-> 语法分析 ->AST (抽象语法树) (DOM树)
// 拿出标签名（开始标签、结束标签）
let currentToken = null;
let stack = [
  { type: 'document', children: [] }
];
function emitToken(token) {
  token = {
    ...token,
    children: [],
    nodeType: 'element'
  }
  let top = stack[stack.length - 1];  //栈顶元素
  if (token.type === 'startTag') {//入栈
    stack.push(token);
    top.children.push(token);
  } else {
    if (top.tagName === token.tagName) {
      stack.pop();
    }
  }
}
function data(c) {
  if (c === '<') {
    return tagOpen;
  }
  return data;
}
function tagOpen(c) {
  if (c === '/') {
    currentToken = {
      type: 'endTag',
      tagName: ''
    }
    return tagName;
  } else {
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName;
  }
}

// <  tagOpen  tagName >
function tagName(c) {
  if (c.match(/[a-z]/)) {
    currentToken.tagName += c;
    return tagName;
  } else if (c === '>') {
    emitToken(currentToken)
    return data;
  }
  // else if (c === '/')
}
function parseDom(html) {
  let state = data;
  for (let c of html) {
    state = state(c);
  }
}
parseDom(response);
console.log(JSON.stringify(stack,null,2))