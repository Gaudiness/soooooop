<template>
	<div class="s_snow_outer">  
    <div class="s_snow_middle">  
      <div class="s_snow_inner">  
          
      </div>  
    </div>  
  </div> 
</template>

<script>
export default{
	name: '',

	data(){
		return {
			
		}
	}
}
</script>

<style lang="less">
.s_snow_outer{
	position: absolute;
	top: 200px;
	left: 300px;
	width: 150px;
	height: 150px;
	float: left;
	overflow: hidden;
	transform:rotate(120deg);
	cursor: pointer;

	.s_snow_middle{
		width: 100%;
		height: 100%;
		overflow: hidden;
		transform:rotate(-60deg);

		.s_snow_inner{
			width: 100%;
			height: 100%;
			overflow: hidden;
			transform:rotate(-60deg);
			position: relative;
			background: rgba(0, 0, 0, 0.3);
		}
	}
}
</style>