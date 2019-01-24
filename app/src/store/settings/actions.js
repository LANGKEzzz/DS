import axios from "../../lib"
export default {
  getshieldListA({commit}) {
    axios({
      method: "get",
      // https://www.easy-mock.com/mock/5c3465747db0f179db202922/example/shield
      url: "/api/mock/5c387d557198202bdf59ef4c/example/attention"
    }).then((data) => {
      // console.log(data)
      var arr=data.cities.item.filter((item,index)=>{
        return item.id == localStorage.storeId
      })
      commit("getshieldListM",arr)
      // console.log(arr)

      })

    }
  }
