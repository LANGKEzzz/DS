<template>
    <div id="nav">
        <ul>
            <li v-for="(item,index) in navs" v-bind:key="index">
                <router-link :to="{name:item.name}">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navs:[
                {
                    name:"concern",
                    title:"关注"
                },
                {
                    name:"recommend",
                    title:"推荐"
                },
                {
                    name:"nearby",
                    title:"附近"
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    #nav{
        width: 100%;
        height: .88rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.15);
        line-height: .88rem;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content:space-between;
            align-items: center;
            li{
                width: 100%;
                height: 100%;
                text-align: center;
                a{
                    color: #333;
                    font-weight: bold;
                }
                .router-link-active{
                    color: #63D7D4;
                }
            }
        }
    }
</style>