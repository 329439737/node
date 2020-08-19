import Vue from "vue"
import Vuex from "vuex"
//uniapp- vuex不需要下载,内置有
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		goods: [],
		cartList: [],
	},
		mutations:{
		add(state,data){
			//console.log(data);
            // console.log(data._id)
			//var bool = true;
			/*
				循环...!
			*/
			state.cartList.map(res=>{
			 	if(res._id===data._id){
			 		res.num++;
			 		bool=false;
			 	}
			 })
			 if(bool){
			 	data.num = 1;
			 	state.cartList.push(data);
			 }
			console.log(state.cartList)
		}
	}
})
export default store;