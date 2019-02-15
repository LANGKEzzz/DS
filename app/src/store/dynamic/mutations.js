export default{
    conGetData(state,params){
        state.concern = state.concern.concat(params)
    },
    recGetData(state,params){
        state.recommend = state.recommend.concat(params)
    },
    neaGetData(state,params){
        state.nearby = state.nearby.concat(params)
    }
}