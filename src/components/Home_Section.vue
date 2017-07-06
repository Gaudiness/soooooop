<template>
	<div class="s_section">
		section
	</div>
</template>

<script>
export default{
	name: '',

	data(){
		return {
			name: ''
		}
	},

	mount(){
		console.log('mount');
	}
}
</script>

<style lang="less">
.s_section{
	width: 100%;
	height: 100%;
}
</style>