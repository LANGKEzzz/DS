<template>
  <div class="app" ref="box">
    <div class="user" v-for="(item,index) in obj"  @click="handleInfo()">
      <router-link :to="{name:'main'}">
        <div class="photo">
          <img :src="item.imgsrc">
        </div>
        <p class="username">{{item.username}}</p>
      </router-link>
    </div>
  </div>
</template>


<script>
import Vuex from "vuex";
import axios from "../../../lib";
export default {
  created(){
    axios({
      
    })
  },
  methods:{
    ...Vuex.mapActions({
      handleInfo:"Home/handleInfo"
    })

  },
  data() {
    return {
      obj: [
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_10@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_11@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_12@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_13@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_17@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_18@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_16@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_20@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_10@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_11@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_12@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_13@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_17@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_18@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_16@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_20@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_10@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_10@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_11@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_12@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_13@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_17@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_18@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_16@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_20@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_18@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_16@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_20@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_17@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_18@2x.png"
        },
        {
          id: 1,
          username: "啦啦啦啦啦啦",
          imgsrc: "../../../static/home/sy_tx_16@2x.png"
        }
      ]
    };
  },
  mounted() {
    let tagEle = this.$refs.box.children;
    let paper = this.$refs.box;
    let RADIUS = 300,
      fallLength = 500,
      tags = [],
      angleX = Math.PI / 500,
      angleY = Math.PI / 500,
      CX = paper.offsetWidth / 2,
      CY = paper.offsetHeight / 2,
      EX = paper.offsetLeft,
      EY = paper.offsetTop ,
      timer = null;
    function innit() {
      for (var i = 0; i < tagEle.length; i++) {
        var a, b;
        var k = (2 * (i + 1) - 1) / tagEle.length - 1;
        var a = Math.acos(k);
        var b = a * Math.sqrt(tagEle.length * Math.PI);
        
        var x = RADIUS * Math.sin(a) * Math.cos(b);
        var y = RADIUS * Math.sin(a) * Math.sin(b);

        var z = RADIUS * Math.cos(a);
        var t = new tag(tagEle[i], x, y, z);
        tagEle[i].style.color =
          "rgb(" +
          parseInt(Math.random() * 255) +
          "," +
          parseInt(Math.random() * 255) +
          "," +
          parseInt(Math.random() * 255) +
          ")";
        tags.push(t);
        t.move();
      }
    }

    Array.prototype.Each = function(callback) {
      for (var i = 0; i < this.length; i++) {
        callback.call(this[i]);
      }
    };

    function animate() {
     timer = setInterval(function() {
        rotateX();
        rotateY();
        tags.Each(function() {
          this.move();
        });
      }, 30);
    }

    if ("addEventListener" in window) {
      paper.addEventListener("mousemove", function(event) {
        var x = event.clientX - EX - CX;
        var y = event.clientY - EY - CY;
        angleY = -x * 0.0001;
        angleX = -y * 0.0001;
      });
    } else {
      paper.attachEvent("onmousemove", function(event) {
        var x = event.clientX - EX - CX;
        var y = event.clientY - EY - CY;
        angleY = -x * 0.0001;
        angleX = -y * 0.0001;
      });
    }
    function rotateX() {
      var cos = Math.cos(angleX);
      var sin = Math.sin(angleX);
      tags.Each(function() {
        var y1 = this.y * cos - this.z * sin;
        var z1 = this.z * cos + this.y * sin;
        this.y = y1;
        this.z = z1;
      });
    }

    function rotateY() {
      var cos = Math.cos(angleY);
      var sin = Math.sin(angleY);
      tags.Each(function() {
        var x1 = this.x * cos - this.z * sin;
        var z1 = this.z * cos + this.x * sin;
        this.x = x1;
        this.z = z1;
      });
    }

    var tag = function(ele, x, y, z) {
      this.ele = ele;
      this.x = x;
      this.y = y;
      this.z = z;
    };
    tag.prototype = {
      move: function() {
        var scale = fallLength / (fallLength - this.z);
        var alpha = (this.z + RADIUS) / (2 * RADIUS);
        this.ele.style.fontSize = (15 * scale)/100 + "rem";
        this.ele.style.opacity = alpha + 0.5;
        this.ele.style.filter = "alpha(opacity = " + (alpha + 0.5) * 100 + ")";
        this.ele.style.zIndex = parseInt(scale * 100);
        this.ele.style.left = (this.x + CX - this.ele.offsetWidth / 2)/100 + "rem";
        this.ele.style.top = (this.y + CY - this.ele.offsetHeight / 2)/100 + "rem";
      }
    };
   innit();
   animate();
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.app {
  height: 12rem;
  width: 100%;
  background:#5e918c;
  position: relative;
  .user {
    width: 1.4rem;
    height: 0.86rem;
    overflow: hidden;
    position: absolute;
    .photo {
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 auto;
      img {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    p {
      width: 1.4rem;
      font-size: 0.2rem;
      line-height: 0.24rem;
      color: white;
      text-align: center;
      margin-top: 0.12rem;
    }
  }
}
// .slide-enter{
//     transform: scale(0);
// }
// .slide-enter-active{
//     transform: all .3s;
// }
</style>