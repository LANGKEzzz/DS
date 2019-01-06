import axios from "../../lib"
export default{
    conGetData({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/concern"
        }).then((data)=>{
            console.log(data)
            commit("conGetData",data)
        })
    }
}