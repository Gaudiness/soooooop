<template>
  <div class="s_home">
  	<div class="s_section" :style="{top: currentSection}">
        <template v-for="item in sectionList">
	       <SectionItem :item="item"></SectionItem>
        </template>
    </div>
    <div class="s_search">
    	<SearchBox></SearchBox>
    </div>
    <div class="s_slide">
    	<SlideBar :sectionList="sectionList"></SlideBar>
    </div>
  </div>
</template>
<script>
import SectionItem from '@/components/Section'
import SearchBox from '@/components/SearchBox'
import SlideBar from '@/components/SlideBar'
import { mapGetters, mapActions } from 'vuex'
export default{
	name: 'home',
	components: { SectionItem, SearchBox, SlideBar },
	computed: mapGetters({
  	sectionList: 'sectionList',
    currentSection: 'currentSection'
  }),
	mounted(){
	}
}	
</script>
<style lang="less">
.s_home{
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;

	.s_section{
		position: absolute;
		top: 0;
    width: 100%;
    height: 100%;
    -webkit-transition: top 0.5s;
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