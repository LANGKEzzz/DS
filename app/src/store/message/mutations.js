export default{
    handleMessage(state,params){
        state.messageList = params;
    },
    getFocus(state,params){
        state.focusList = params;
    },
    getComment(state,params){
        state.commentList = params;
        // var rows = JSON.parse(JSON.stringify(params.rows));
		// state.hotlist = [...state.hotlist,...rows];
		// state.hotpageIndex++;
    },
   
    getRemind(state,params){
        state.remindList = params;
    }
}