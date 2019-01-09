<template>
	<Model
		v-model="flag"
		cancel-text="取消"
		ok-text="确定"
		title="为确保您的账号与安全，修改密码请填写原密码"
        @on-ok="ok"
        @on-cancel="cancel"
        :mask-closable=true>
    	<input type="text" placeholder="请输入密码"/>
		
	</Model>
</template>
<script>
export default {
    props:["flag"],
	created(){
		console.log(this)
	},
	methods:{
		ok () { 
			this.$Message.info('Clicked ok'); 
		},
		cancel () { 
			this.$Message.info('Clicked cancel');
		}
	}
}
</script>

