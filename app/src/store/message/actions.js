import axios from "../../lib"
export default{
    handleMessage({commit,state}){
        axios({
            method:"get",
        //    https://www.easy-mock.com/mock/5c3460cefad511025643ee25/example/focus
            url:"/api/mock/5c3460cefad511025643ee25/example/focus"
        })
        .then( (data)=>{
            console.log(data)
            commit( "handleMessage",data )
        } )
    }
}