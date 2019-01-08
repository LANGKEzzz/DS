<template>
    <div class="settings">
        <as-com></as-com>
    </div>
</template>
<script>

import AS from "./page/AS.vue";
export default {
    components:{
        "as-com":AS

    }
}
</script>
<style lang="scss" scoped>
    .settings{
        width:7.5rem;
        height:13.34rem;;
        background: #eee;
    }
</style>