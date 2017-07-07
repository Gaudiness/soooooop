<template>
	<div class="s_searchbox" :class="{ 's_search_shadow':shadowMode }">
		<div class="s_search_container">
			<input @focus="searchFocus" @blur="searchBlur">
			<i class="soop s-bigger"></i>
		</div>
	</div>
</template>

<script>
export default{
	name: 'SearchBox',
	props: ['shadowMode'],
	methods: {
		searchFocus(){
			this.$store.dispatch('setShadowMode', true);
		},

		searchBlur(){
			this.$store.dispatch('setShadowMode', false);
		}
	}
}
</script>

<style lang="less">
.s_searchbox{
	position: fixed;
	top: 40px;
	left: 100px;
	right: 100px;
	height: 100px;
	margin: 0 auto;
	border-radius: 3px;
	background: rgba(0, 0, 0, 0.3);
	-webkit-transition: top 0.5s, left 0.5s, right 0.5s, height 0.5s;

	.s_search_container{
		position: relative;
		padding: 20px 0;
		width: 80%;
		margin: 10px auto;
		
		input{
			width: 100%;
			height: 40px;	
			border: none;
			border-bottom: 1px solid #ddd;
			background: transparent;
			outline: none;
			color: #ddd;
			font-size: 18px;
			padding: 0 35px 0 10px;
			text-align: center;
		}

		.soop{
			position: absolute;
			right: -3px;
			top: 27px;
			font-size: 30px;
			color: #ddd;
		}
	}
}

.s_search_shadow{
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
}
</style>