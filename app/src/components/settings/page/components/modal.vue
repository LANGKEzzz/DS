<template>
    <div class="modal-backdrop" @click="close" v-show="show">
        <div class="modal" @click.stop>
            <div class="modal-header">
                <slot name="header">
                <h2>为保障您的账号与安全，修改密码请填写原密码</h2>
                <button type="button" class="btn-close" @click="close">x</button>
                </slot>
            </div>
            <div class="modal-body">
                <slot name="body">
                    <input type="text" placeholder="请输入密码"/>
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                <!-- 这是Modal弹框的脚部 -->
                <button type="button" class="btn-green" @click="close">关闭</button>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    props:["show"],
    data () {
        return {
        }
    },
    methods: {
        close: function () {
            this.$emit('close');
        }
    }
}
</script>
<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background-color: #fff;
        box-shadow: 0.02rem 0.02rem 0.02rem 0.01rem;
        overflow-x:auto;
        display: flex;
        flex-direction: column; 
    }
    .modal-header,
    .modal-footer {
        padding: 0.15rem;
        display: flex;
    }
    .modal-header {
        border-bottom: 0.01rem solid #eee;
        color: #4aae9b;
        justify-content: space-between;
    }
    .modal-footer {
        border-top: 0.01rem solid #eee;
        justify-content: flex-end;
    }
    .modal-body {
        position: relative;
        padding: .2rem .1rem;
    }
    .btn-close {
        border: none 0;
        font-size: .2rem;
        padding: .2rem;
        cursor: pointer;
        font-weight: bold;
        color: #4aae9b;
        background-color: transparent;
    }
    .btn-green {
        color: #fff;
        background-color: #4aae9b;
        border: 0.01rem solid #4aae9b;
        border-radius: 0.02rem;
    }
</style>

