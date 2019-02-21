import axios from "../../lib"
export default{
    // 消息列表
    handleMessage({commit,state}){
        axios({
            method:"post",
            //https://www.easy-mock.com/mock/5c3460cefad511025643ee25/example/message
            // url:'/api/mock/5c3460cefad511025643ee25/example/message',
			url:'/messageList',            
            data:{

            }          
        })
        .then( (data)=>{
            // console.log(data)
            commit( "handleMessage",data.messageList)
        } )
    },
    // 赞
    getFocus({commit,state}){
        axios({
            method:"post",
            //https://www.easy-mock.com/mock/5c37f7b9bfca1e6e01d7e8ba/message/focus
            // url:"/api/mock/5c37f7b9bfca1e6e01d7e8ba/message/focus",
			url:"/message",            
            data:{

            }
        })
        .then( (data)=>{
            // console.log(data.data)
            commit( "getFocus",data.data)
        } )
    },
    // 评论
    getComment({commit,state}){       
        axios({
            method:"post",
            // https://www.easy-mock.com/mock/5c37f7b9bfca1e6e01d7e8ba/message/comment
            // url:"/api/mock/5c37f7b9bfca1e6e01d7e8ba/message/comment",
			url:"/message",                        
            data:{

            }
        })
        .then( (data)=>{
            // console.log(data)
            commit( "getComment",data.data )
        } )
    },
    getCommentAgain({dispatch}){
        dispatch("getComment")
    },
    // @我的
    getRemind({commit,state}){
        axios({
            method:"post",
            //https://www.easy-mock.com/mock/5c37f7b9bfca1e6e01d7e8ba/message/remind
            // url:"/api/mock/5c37f7b9bfca1e6e01d7e8ba/message/remind",
			url:"/message",                        
            data:{
                
            }
        })
        .then( (data)=>{
            // console.log(data)
            commit( "getRemind",data.data )
        } )
    }
    
}