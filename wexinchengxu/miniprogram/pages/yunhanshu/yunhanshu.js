// miniprogram/pages/yunhanshu/yunhanshu.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    no1:'',
    no2:'',
    select:false,
    grade_name:'--请选择--',
    grades:['+',"-",'*','/'],
    result:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindshow(){
    this.setData({
      select:!this.data.select
    })
  },
  se(e){
   
   let name = e.currentTarget.dataset.name
   //console.log(name)
   this.setData({

    grade_name:name,
    select:false
   })
  },
  no1(e){
    this.setData({
      no1:e.detail.value
    })
  },
  no2(e){
    //console.log(e.detail.value)
  this.setData({
    no2:e.detail.value
  })
  },
  btn(e){
    if(e.target.dataset.caozuo=="--请选择--"){
wx.showToast({
  title: '请选择操作符',
  icon:"none"
})

    }
    else{
      wx.cloud.callFunction({
        name:"yunhanshu",
        data:{
          no1:e.target.dataset.no1,
          no2:e.target.dataset.no2,
          caozuo:e.target.dataset.caozuo,
        },
        
      
    }).then((res)=>{
      this.setData({
        result:res.result
      })
    //console.log(res)
    
    })
    }
   //console.log(e)
  
  }
})