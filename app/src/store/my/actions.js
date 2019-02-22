import axios from "axios"
export default{
    handleAttentionData({commit}){
        axios({
            method:"get",
            url:"/myattention"
        })
        .then( (data)=>{
            // console.log(data.cities.item);
            commit("handleAttentionData",data.cities.item);
        })
    },
    handleCollectData({commit}){
        axios({
            methods:"get",
            url:"/mycollection"
        })
        .then( (data)=>{
            console.log(data);
            commit("handleCollectData",data.item);
        })
    },
    handleMyData({commit}){
        axios({
            methods:"get",
            url:"/mycollection"
        })
        .then( (data)=>{
            // console.log(data.item);
            commit("handleMyData",data.item);
        })
    }
}
