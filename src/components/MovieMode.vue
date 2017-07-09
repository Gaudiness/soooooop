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

</style>