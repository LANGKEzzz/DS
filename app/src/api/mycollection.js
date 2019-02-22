import Mock from "mockjs";

let data = Mock.mock({
    "item|5": [
        {
          "id": 1,
          "userPhoto":'@image("200x200","@color()")',
          "userName": "@cname",
          "userTime": "@date('MM-dd')",
          "userMain": "@csentence()",
          "mainPhotoOne": "http://dummyimage.com/'230x230'/79f2d5','#50B347', '#FFF', 'EasyMock')",
          "mainPhotoTwo": "http://dummyimage.com/'230x230'/79f2d5','#50B347', '#FFF', 'EasyMock')",
          "mainPhotoThree": "http://dummyimage.com/'230x230'/79f2d5','#50B347', '#FFF', 'EasyMock')",
          "mainPhotoFour": "http://dummyimage.com/'230x230'/79f2d5','#50B347', '#FFF', 'EasyMock')",
          "mainPhotoFive": "http://dummyimage.com/'230x230'/79f2d5','#50B347', '#FFF', 'EasyMock')",
          "mainPhotoSix": "http://dummyimage.com/'230x230'/79f2d5','#50B347', '#FFF', 'EasyMock')"
        }
      ]
})
export default {
	data
}