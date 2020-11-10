//4个奖品类型，一等奖概率1%，二等奖概率3%，三等奖概率6%，参与奖90%，设置如下

const model = [

  { name: '一等奖', key: 'level1', radio: 1, },

  { name: '二等奖', key: 'level2', radio: 3, },

  { name: '三等奖', key: 'level3', radio: 6, },

  { name: '参与', key: 'level4', radio: 90 }

];
class Draw {
  random() {
    let num = parseInt(Math.random() * 100 + 1)
    if (num <= 90) {
      return '参与奖'
    } else if (num <= 96) {
      return '三等奖'
    } else if (num <= 99) {
      return '二等奖'
    } else if (num <= 100) {
      return '四等奖'
    }
  }
} // 补充 Draw 的实现
const draw = new Draw(model);

const result = draw.random();
console.log(result)