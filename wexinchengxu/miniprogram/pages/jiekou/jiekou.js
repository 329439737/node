// miniprogram/pages/jiekou/jiekou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  xinxi:[],
  panduan:false
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
   this.jiekou()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     this.jiekou()
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
     this.jiekou()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //调用接口
  jiekou(){
    var that = this
    wx.request({
      url: 'http://www.liulongbin.top:3005/api/getprodlist', 
      method:'GET',
      data:'',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        that.setData({
          xinxi:res.data.message
        })
       
      },
      fail:function(){

      }
    })
  },
  formSubmit(e) {
    var that = this
    let cat = e.detail.value.input
    //console.log(cat)
    var that = this
    wx.request({
      url: 'http://www.liulongbin.top:3005/api/addproduct?name', 
      method:'POST',
      data: {
      name: cat
       
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
       that.setData({
        panduan:false
       })
       },
      
      fail:function(){
      console.log("添加失败")
      }
      
    })
    this.jiekou();
  },
  btn(){
    this.setData({
      panduan:true
    })
  },
  btn1(){
    this.setData({
      panduan:false
    })
  },
  //删除
  del(e){
    let id = e.currentTarget.dataset.id
    //console.log(e.currentTarget.dataset.id)
  // var that =this
    wx.showModal({
      title: '提示',
        content: '确定要删除吗？',
        success:function(res){
        if(res.confirm){
          wx.request({
            url: 'http://www.liulongbin.top:3005/api/delproduct/'+id, 
            method:'GET',
            data: '',
            header: {
              'content-type': 'application/json' // 默认值
            },
            success:function(res){
             
            wx.showToast({
              title: '删除成功',
              })
             },
           })
           this.jiekou()
         }
          },
          
    })
      
  }
  
})