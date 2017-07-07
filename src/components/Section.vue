<template>
	<div class="s_section_item">
		<div class="s_section_cover">
			{{ item.name }}
			<div class="s_section_author">by sun. Don't settle for less</div>
		</div>
	</div>
</template>

<script>
export default{
	name: '',
	props: ['item'],
	data(){
		return {
			name: ''
		}
	},
	mounted(){
		// console.log(this.item);
	}
}
</script>

<style lang="less">
.s_section_item{
	
	width: 100%;
	height: 100%;
	background: url(../images/pic.jpg) no-repeat 100% 100%;

	.s_section_cover{
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);

		.s_section_author{
			position: absolute;
			right: 20px;
			bottom: 20px;
			font-size: 12px;
			color: #ddd;
		}
	}
}
</style>