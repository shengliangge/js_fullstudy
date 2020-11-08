// 类型相同的话，看属性
// 如果属性不同的话，产生出来{ type: '',attrs:{class:'list-group} }
// 新的dom节点不存在{ type: 'remove', index: xxx }
// 类型不同的话，直接替换整个dom
// 文本不一样{ type: 'text', text: 1 }
function diff() {

}

export default diff