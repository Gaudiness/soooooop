<template>
	<div class="s_section_item" :style="{backgroundImage:'url('+item.background+')'}">
		<div class="s_section_cover">
			<DancingMusic :music="item.list"></DancingMusic>
			<div class="s_section_author">Don't settle for less __by sun.</div>
		</div>
	</div>
</template>

<script>
import DancingMusic from '@/components/DancingMusic'
export default{
	name: '',
	props: ['item'],
	components: { DancingMusic },
	mounted(){
		// console.log(this.item);
	}
}
</script>

<style lang="less">

</style>