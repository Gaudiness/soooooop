<template>
	<div class="s_section_item" :style="{backgroundImage:'url('+item.background+')'}">
		<div class="s_section_cover">
			<template v-for="pic in item.list">
				<TurnningPic :pic="pic"></TurnningPic>
			</template>
			<div class="s_section_author">Don't settle for less __by sun.</div>
		</div>
	</div>
</template>

<script>
import TurnningPic from '@/components/TurnningPic'
export default{
	name: '',
	props: ['item'],
	components:{ TurnningPic },
	mounted(){
		// console.log(this.item);
	}
}
</script>

<style lang="less">

</style>