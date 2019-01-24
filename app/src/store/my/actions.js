import axios from "axios"
export default{
    handleAttentionData({commit}){
        axios({
            method:"get",
            url:"/api/mock/5c387d557198202bdf59ef4c/example/attention"
        })
        .then( (data)=>{
            // console.log(data.cities.item);
            commit("handleAttentionData",data.cities.item);
        })
    },
    handleCollectData({commit}){
        axios({
            methods:"get",
            url:" /api/mock/5c387d557198202bdf59ef4c/example/collect"
        })
        .then( (data)=>{
            console.log(data.item);
            commit("handleCollectData",data.item);
        })
    }
}
