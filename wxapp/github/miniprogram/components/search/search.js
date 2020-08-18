// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  class: ['cancel-class'],
  properties: {
    placeholder: String,
    customClass: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  //search 父子关系
  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function onChange(event) {
      console.log(event);

      this.$emit('search', event.detail);
    }
  }
})
