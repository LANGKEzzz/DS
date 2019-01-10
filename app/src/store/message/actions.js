import axios from "../../lib"
export default{
    handleMessage({commit}){
        axios({
            method:"post",
            // https://www.easy-mock.com/mock/5c3460cefad511025643ee25/example/focus
            url:"/api/mock/5c3460cefad511025643ee25/example/focus"
        })
        .then( (data)=>{
            console.log(data)
            // commit( "handleMessage",data )
        } )
    },
    handleFocus({commit}){
        axios({
            methods:"post",
            url:""
        })
        .then( (data)=>{
            console.log(data)
            commit("handleFocus",data)
        } )
    }
}