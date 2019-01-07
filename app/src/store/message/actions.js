import axios from "../../lib"
export default{
    handleMessage({commit}){
        axios({
            method:"post",
            url:""
        })
        .then( (data)=>{
            console.log(data)
            commit( "handleMessage",deta )
        } )
    }
}