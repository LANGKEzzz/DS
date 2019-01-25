export default{
    handleAttentionData(state,params){
        console.log(params)
        state.arrAttention = params
    },
    handleCollectData(state,params){
        console.log(params)
        state.arrCollect = params
        console.log(state.arrCollect)
<<<<<<< HEAD
    }
=======
    },
    handleMyData(state,params){
        console.log(params)
        state.arrMy = params
        console.log(state.arrMy)
    }

>>>>>>> 716a0de049a9848d8cd78d9e02c43585fa045a97
}