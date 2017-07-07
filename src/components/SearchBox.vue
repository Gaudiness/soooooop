<template>
	<div class="s_searchbox">
		<div class="s_search_container">
			<input >
			<i class="soop s-bigger"></i>
		</div>
	</div>
</template>

<script>
export default{
	name: 'SearchBox',
	data(){
		return {
      
		}
	}
}
</script>

<style lang="less">
.s_searchbox{
	width: 1000px;
	height: 100px;
	margin: 0 auto;
	border-radius: 3px;
	background: rgba(0, 0, 0, 0.3);

	.s_search_container{
		position: relative;
		padding: 20px 0;
		width: 800px;
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
			padding: 0 50px 0 10px;
		}

		.soop{
			position: absolute;
			right: 10px;
			top: 27px;
			font-size: 30px;
			color: #ddd;
		}
	}
}
</style>