<template>
    <div>
        <messageHeader></messageHeader>
        <messageMain></messageMain>
    </div>
</template>
<script>
import messageHeader from "./components/message-header.vue";
import messageMain from "./components/message-main.vue";
export default {
    components:{
        messageHeader,
        messageMain
    }
}
</script>
<style lang="scss" scoped>

</style>