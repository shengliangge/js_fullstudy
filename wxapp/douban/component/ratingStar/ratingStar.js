// component/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0,
    isHasDecimal: 0,
    residue: 5
  },
  lifetimes: {
    attached: function () {
      //  检验数据合理，防止星星超出5
      if (this.data.score <= 0) {   //如果分小于0，直接结束，按默认值
        return
      } else if (this.data.score >= 5) {    //如果分大于5，直接设置满星
        this.setData({
          num: 5,
          residue: 0
        })
        return
      }
      // 获取整数部分
      console.log(this.data.score)
      let num = parseInt(this.data.score)
      //获取小数部分
      let decimal = (this.data.score) - num
      //如果小数大于0，则代表有半颗星
      if (decimal > 0) {
        this.setData({
          isHasDecimal: 1
        })
      }
      //获取剩余的off星
      let residue = 5 - num - (this.data.isHasDecimal)
      this.setData({
        num,
        residue
      })

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
