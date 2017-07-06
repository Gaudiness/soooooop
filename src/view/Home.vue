<template>
  <div class="s_home">
    <HomeSection></HomeSection>
    <HomeSection></HomeSection>
    <HomeSection></HomeSection>
    <HomeSection></HomeSection>
    <HomeSearchBox></HomeSearchBox>
  </div>
  
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import HomeSection from '@/components/Home_Section'
import HomeSearchBox from '@/components/Home_SearchBox'
export default{
	name: 'home',

	components: { HomeSection, HomeSearchBox },

	data(){
	    return{
	      msg: '00:00'
	    }
	},
	mounted(){
		console.log('anything.');
	}

}	
</script>
<style lang="less">
.s_home{
	postion: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>