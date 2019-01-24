export default{
    handleadd(state,data){
        var arr = [];
        arr.push(data.formattedAddress)
        state.address = arr;
        state.province = data.addressComponent.province;
    },
    modify(state,data){
        state.address = data;
    }
}