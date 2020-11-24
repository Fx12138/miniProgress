// conponents/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabItem(e){
      // console.log(e.currentTarget.dataset.index)
      const {index}=e.currentTarget.dataset;
      //触发父组件的自定义事件，并将数据传到父组件
      //this.triggerEvent("父组件自定义事件的名称"，要传的参数)
      this.triggerEvent("itemChange",{index});
      // let {items}=this.data;
      // items.forEach((v,i)=>i===index?v.isactive=true:v.isactive=false);
      // this.setData({
      //   items
        
      // })
      // console.log(items)
    }
  }
})
