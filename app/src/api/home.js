const Mock = require("mockjs");
let data = Mock.mock({
    "data|26":[{
        "id|+1":0,
        "imgsrc":"@Image('50x50','@color()',#FFF,'png', '头像')",       
        "username":"@csentence(3, 6)",
    }]
})
const indexInfo = (config) => {
    return data.data;
}
export default indexInfo;