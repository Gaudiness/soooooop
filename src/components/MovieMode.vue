<template>
	<div class="s_section_item" :style="{backgroundImage:'url('+item.background+')'}">
		<div class="s_section_cover">
			<!-- {{ item.name }} -->
			<template v-for="snow in item.list">
				<RunningSnow :snow="snow"></RunningSnow>
			</template>
			<div class="s_section_author">Don't settle for less __by sun.</div>
		</div>
	</div>
</template>

<script>
import SnowItem from '@/components/SnowItem'
import RunningSnow from '@/components/RunningSnow'
export default{
	name: '',
	props: ['item'],
	components: { SnowItem, RunningSnow },
	mounted(){
		// console.log(this.item.list);
	}
}
</script>

<style lang="less">
.s_section_item{
	width: 100%;
	height: 100%;
	background: url(../images/pic.jpg) no-repeat center;

	.s_section_cover{
		position: relative;
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