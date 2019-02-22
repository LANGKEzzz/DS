const Mock = require("mockjs");
let data = Mock.mock({
    "data": {
      "id": 1,
      "username": "@csentence(3, 5)",
      "photo": "@image('180x180','@color()',#FFF,'png'",
      "dynamic|3-6": [{
        "day": "@datetime('M-d')",
        "time": "@datetime('H:m')",
        "equipment": "@csentence(7)",
        "con": "@csentence(20,50)",
        "pic|2-8": [
          "@image('230x230','@color()',#FFF,'png'"
        ]
      }]
    }
})
const userinfo = (config) => {
    return data.data;
}
export default userinfo;