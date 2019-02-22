import dynamicApi from "../api/dynamic.js";
import messageApi from "../api/message";
import myattention from "../api/my";
import mycollection  from "../api/mycollection";
import Mock from "mockjs"


Mock.mock(/\/getShopPage/,"get",dynamicApi.getShopPage)


// message  赞、@我的、评论
Mock.mock(/\/message/,"post",messageApi.data)


//  message首页
Mock.mock(/\/messageList/,"post",messageApi.messageList)

//  我的关注
Mock.mock(/\/myattention/,"get",myattention.data)

//  我的收藏
Mock.mock(/\/mycollection/,"get",mycollection.data)
