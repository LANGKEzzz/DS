// const qs = require("qs")
import Mock from "mockjs";

let data = Mock.mock({
    "data|50":[
        {
			"userId|+1": 1,
      		'headPortrait': '@image("90x90","@color()")',
			'nickname': '@cname',
			'datatime': '@date("MM-dd")',
			'time': '@time("HH:mm")',
			'equipment': '来自iPhone客户端',
			'layoutImg': '@image("230x230","@color()")',
			'publish': '@csentence()',
			'mynickname': '@cname',
			'myimg': '@image("87x87","@color()")',
			'mydata': '@date("MM-dd")',
			'mytime': '@time("HH:mm")',
			'myEquipment': '来自iPhone客户端'
        }
    ],
	'messageList|15': [
		{
			'imgUrl': "../../../static/message/dh_tx_02@2x.png",
			'nickname': '@cname',
			'message': '@csentence()',
			'time': '@time'
		}
	]
})
// let dataList = data.concern;
// function currentpage(page,limit){
//   var arr = dataList.filter((item,index)=>{
//     return index<(page*limit)&&index>=(page-1)*limit
//   })
//   return arr;
// }
// const getShopPage = (config)=>{
//   let{page,limit} = qs.parse(config.url.split("?")[1]);
//   return{
//     data:currentpage(page,limit),
//     page:Math.ceil(dataList/length/limit)
//   };
// }


export default {
	data
}