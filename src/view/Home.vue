<template>
  <div class="s_home">
  	<div class="s_section">
	    <HomeSection>v-for="item in sectionList"</HomeSection>
    </div>
    <div class="s_search">
    	<HomeSearchBox></HomeSearchBox>
    </div>
    <div class="s_slide">
    	
    </div>
  </div>
  
</template>
<script>
import HomeSection from '@/components/Home_Section'
import HomeSearchBox from '@/components/Home_SearchBox'
import { mapGetters, mapActions } from 'vuex'
export default{
	name: 'home',
	components: { HomeSection, HomeSearchBox },
	coputed: mapGetters({
  	sectionList: 'sectionList'
  }),
	mounted(){
		console.log('anything.', this.sectionList);
	}
}	
</script>
<style lang="less">
.s_home{
	postion: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;

	.s_section{
		position: absolute;
		top: 0;
	}

	.s_search{
		position: absolute;
		top: 200px;
		width: 100%;
		height: 120px;
	}

	.s_slide{
		position: absolute;
		right: 0;
		width: 40px;
		height: 100%;
	}
}
</style>