export default{
    handleAttentionData(state,params){
      
        state.arrAttention = params
    },
    handleCollectData(state,params){
       
        state.arrCollect = params
        // console.log(state.arrCollect)
    },
    handleMyData(state,params){
        
        state.arrMy = params
        // console.log(state.arrMy)
    }

}