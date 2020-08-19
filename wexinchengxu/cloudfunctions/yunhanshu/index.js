// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
 const { userInfo, no1, no2,caozuo} = event
  //let { OPENID, APPID } = cloud.getWXContext() // 这里获取到的 openId 和 appId 是可信的
  if(event.caozuo=="+"){
   return sun = Number(no1)+Number(no2)

  }
  if(event.caozuo=="-"){
   return sum = no1-no2

  }
  if(event.caozuo=="/"){
   return sum = no1 / no2

  }
  if(event.caozuo=="*"){
   return  sum = no1 * no2

  }
  else{
     return sum= console.log("线路走偏了")
  }
 return{
   event
 }
}