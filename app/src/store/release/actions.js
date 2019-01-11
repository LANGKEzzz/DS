export default{
    handleadd({commit},data){
        var arr = [];
        arr.push(data.formattedAddress)
        commit("handleadd",arr)
    },
}