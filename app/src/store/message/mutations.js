export default{
    handleMessage(state,params){
        state.messageList = params;
    },
    getFocus(state,params){
        state.focusList = params;
    },
    getComment(state,params){
        state.commentList = params;
    },
    getRemind(state,params){
        state.remindList = params;
    }
}