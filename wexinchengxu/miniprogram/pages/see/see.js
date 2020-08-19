// miniprogram/pages/see/see.js
const app = getApp()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  name:'',
  img:'',
  del:false,
  userid:'',
  list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.myself();
    this.quaninfo();
   },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (ev) {
   
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
  //个人信息查询
  myself(){
    let id = app.userInfo._id
   // console.log(id)
    db.collection('users').doc(id).get().then((res)=>{
    this.setData({
      img:app.userInfo.userPhoto,
      name:app.userInfo.nickName,
      userid:app.userInfo._id
    })

   })
  },
  
  //查询所有信息
  quaninfo(){
    let myid = app.userInfo._id;
    db.collection("xiangfa").orderBy('time','desc').get().then((res)=>{
      
       this.setData({
        list:res.data,
      })
    
   // console.log(myid);
    
    })
  },
  //跳转到发表
  xiangfa(){
    wx.navigateTo({
      url: '../xiangfa/xiangfa',
    })
  },
 //进入信息详情页
 jinru(e){

let id = e.currentTarget.dataset.id
//console.log(id)
wx.navigateTo({
  url: '../index/xiangqing/xiangqing?userid='+id,
})
 },
 wo(e){
  let id = e.currentTarget.dataset.id
  //console.log(id)
  wx.navigateTo({
    url: '../index/xiangqing/xiangqing?userid='+id,
  })
 }
})