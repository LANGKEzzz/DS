import axios from "../../lib"
export default{
    handleInfo({commit},params){
        axios({
            method:"get",
            url:"/api/mock/5c35928e879a3554aca75c90/ds/userinfo"
        }).then((data)=>{
           commit("handleData",data.data)
        })
    }


}