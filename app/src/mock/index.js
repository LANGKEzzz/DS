import dynamicApi from "../api/dynamic.js";
import messageApi from "../api/message";
import Mock from "mockjs"

Mock.mock(/\/getShopPage/,"get",dynamicApi.getShopPage)


// message  赞、@我的、评论
Mock.mock(/\/message/,"post",messageApi.data)


//  message首页
Mock.mock(/\/messageList/,"post",messageApi.messageList)
