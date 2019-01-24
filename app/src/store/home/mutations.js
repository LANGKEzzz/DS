export default{
    handleData(state,params){
        
        state.id = params.id;
        state.imgurl = params.photo,
        state.username = params.username;
        state.content = params.dynamic;
        // console.log(state)
    },
    screenShow(state){
        state.flag = !state.flag;
    }

}