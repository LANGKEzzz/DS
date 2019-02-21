const qs = require("qs")
const Mock = require("mockjs");
let data = Mock.mock({
    "concern|50":[
        {
            "photo": "@Image('200x100','@color()', '#ffffff')",
            "nickname": "@cword(3, 5)",
            "time": "@time",
            "phone": "来自iPone客户端",
            "content": "@cparagraph",
            "pic": [
              "@Image('200x100','@color()', '#ffffff')",
              "@Image('200x100','@color()', '#ffffff')",
              "@Image('200x100','@color()', '#ffffff')",
              "@Image('200x100','@color()', '#ffffff')",
              "@Image('200x100','@color()', '#ffffff')"
            ],
            "handle": [
              {
                "name": "transpond",
                "count": '@integer(60, 100)',
                "url": "../../../static/icon/icon_zf@2x.png"
              },
              {
                "name": "comment",
                "count": '@integer(60, 100)',
                "con|10": [
                  {
                    "photo": "@Image('200x100','@color()', '#ffffff')",
                    "nickname": "@cword(3, 5)",
                    "time": "@now()",
                    "infor": "@csentence()"
                  },
                  {
                    "photo": "@Image('200x100','@color()', '#ffffff')",
                    "nickname": "@cword(3, 5)",
                    "time": "@now()",
                    "infor": "@csentence()"
                  }
                ],
                "url": "../../../static/icon/icon_pl@2x.png"
              },
              {
                "name": "",
                "count": '@integer(60, 100)',
                "url": "../../../static/icon/icon_dz@2x.png"
              }
            ]
          }    
    ]
})

let dataList = data.concern;
function currentpage(page,limit){
  var arr = dataList.filter((item,index)=>{
    return index<(page*limit)&&index>=(page-1)*limit
  })
  return arr;
}
const getShopPage = (config)=>{
  let{page,limit} = qs.parse(config.url.split("?")[1]);
  return{
    data:currentpage(page,limit),
    page:Math.ceil(dataList/length/limit)
  };
}
export default{
  getShopPage
}