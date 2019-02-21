import axios from "../../lib"
export default{
    conGetData({commit},page){
        
        axios({
            method:"get",
            url:"/getShopPage?page="+page+"&limit=8"
        }).then((data)=>{
            console.log(data.data,11)
            commit("conGetData",data.data)
        })
    },
    recGetData({commit}){
        axios({
            method:"get",
            url:"/getShopPage?page=1&limit=8"
        }).then((data)=>{
            console.log(data.data,22)
            commit("recGetData",data.data)
        })
    },
    neaGetData({commit}){
        axios({
            method:"get",
            url:"/getShopPage?page=1&limit=8"
        }).then((data)=>{
            console.log(data.data,33)
            commit("neaGetData",data.data)
        })
    }
}