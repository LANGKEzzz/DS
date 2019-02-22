import Mock from "mockjs";
import dynamicApi from "../api/dynamic.js";
import messageApi from "../api/message";
import indexInfo from "../api/home";
import userinfo from "../api/main";

Mock.mock(/\/getShopPage/,"get",dynamicApi.getShopPage)

// message  赞、@我的、评论
Mock.mock(/\/message/,"post",messageApi.data)

//  message首页
Mock.mock(/\/messageList/,"post",messageApi.messageList)

Mock.mock(/\/indexinfo/,"get",indexInfo)
Mock.mock(/\/userinfo/,"get",userinfo)
