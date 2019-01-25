export default{
    handleAttentionData(state,params){
        console.log(params)
        state.arrAttention = params
    },
    handleCollectData(state,params){
        console.log(params)
        state.arrCollect = params
 
    },
    handleMyData(state,params){
        console.log(params)
        state.arrMy = params
        console.log(state.arrMy)
    }


}
