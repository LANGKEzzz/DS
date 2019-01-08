export default{
    conGetData(state,params){
        state.concern = params
    },
    recGetData(state,params){
        state.recommend = params
    },
    neaGetData(state,params){
        state.nearby = params
    }
}