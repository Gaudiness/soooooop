<template>
	<div class="s_section_item" :style="{backgroundImage:'url('+item.background+')'}">
		<div class="s_section_cover">
			<!-- <template v-for="snow in item.list">
				<RunningSnow :snow="snow"></RunningSnow>
			</template> -->
			<!-- <PlayingMovie :movie="item"></PlayingMovie> -->
			<ShiningScreen :movie="item"></ShiningScreen>
			<div class="s_section_author">Don't settle for less. __by sun.</div>
		</div>
	</div>
</template>

<script>
import SnowItem from '@/components/SnowItem'
import PlayingMovie from '@/components/PlayingMovie'
import RunningSnow from '@/components/RunningSnow'
import ShiningScreen from '@/components/ShiningScreen'
export default{
	name: '',
	props: ['item'],
	components: { SnowItem, PlayingMovie, RunningSnow, ShiningScreen },
	mounted(){
		// console.log(this.item.list);
	}
}
</script>

<style lang="less">

</style>