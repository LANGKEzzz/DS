import dynamicApi from "../api/dynamic.js";
import indexInfo from "../api/home";
import userinfo from "../api/main";
import Mock from "mockjs"

Mock.mock(/\/getShopPage/,"get",dynamicApi.getShopPage)
Mock.mock(/\/indexinfo/,"get",indexInfo)
Mock.mock(/\/userinfo/,"get",userinfo)
