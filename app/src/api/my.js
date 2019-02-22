import Mock from "mockjs";

let data = Mock.mock({
    "cities": {
        "item|20": [{
          "id": 1,
          "friendName": "@cname",
          "friendMain": "@csentence()",
          "picUrl": '@image("200x200","@color()")'
        }]
    }
})
export default {
	data
}