import axios from "../../lib"
export default {
    getshieldListA({commit}){
        axios({
            method:"get",
            // https://www.easy-mock.com/mock/5c3465747db0f179db202922/example/shield
            url:"/api/mock/5c3465747db0f179db202922/example/shield"
        }).then((data)=>{
            // console.log(data)
            commit("getshieldListM",data.data)
            
        })
    }
 }