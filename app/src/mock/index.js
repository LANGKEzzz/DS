import dynamicApi from "../api/dynamic.js";
import Mock from "mockjs"

Mock.mock(/\/getShopPage/,"get",dynamicApi.getShopPage)