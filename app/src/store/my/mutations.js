export default{
    handleAttentionData(state,params){
        console.log(params)
        state.arrAttention = params
    },
    handleCollectData(state,params){
        console.log(params)
        state.arrCollect = params
        console.log(state.arrCollect)
    }
}