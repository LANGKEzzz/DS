import axios from "../../lib"
export default{
    handleMessage({commit,state}){
        axios({
            method:"get",
        //    https://www.easy-mock.com/mock/5c3460cefad511025643ee25/example/message
            url:"/api/mock/5c3460cefad511025643ee25/example/message"
        })
        .then( (data)=>{
            // console.log(data)
            commit( "handleMessage",data.data)
        } )
    },
    getFocus({commit,state}){
        axios({
            method:"get",
            //https://www.easy-mock.com/mock/5c37f7b9bfca1e6e01d7e8ba/message/focus
            url:"/api/mock/5c37f7b9bfca1e6e01d7e8ba/message/focus"
        })
        .then( (data)=>{
            // console.log(data.data)
            commit( "getFocus",data.data)
        } )
    },
    getComment({commit,state}){
        axios({
            method:"get",
            // https://www.easy-mock.com/mock/5c37f7b9bfca1e6e01d7e8ba/message/comment
            url:"/api/mock/5c37f7b9bfca1e6e01d7e8ba/message/comment"
        })
        .then( (data)=>{
            // console.log(data)
            commit( "getComment",data.data )
        } )
    },
    getRemind({commit,state}){
        axios({
            method:"get",
            //https://www.easy-mock.com/mock/5c37f7b9bfca1e6e01d7e8ba/message/remind
            url:"/api/mock/5c37f7b9bfca1e6e01d7e8ba/message/remind",
            // data:{
                
            // }
        })
        .then( (data)=>{
            // console.log(data)
            commit( "getRemind",data.data )
        } )
    }
    
}