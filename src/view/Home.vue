<template>
  <div class="s_home" @mousewheel="mousewheelMove">
  	<div class="s_section" :style="{top: currentSection}">
        <template v-for="item in sectionList">
          <template v-if="item.mode==='movie'">
            <MovieMode :item="item"></MovieMode>
          </template>
          <template v-else-if="item.mode=='music'">
            <MusicMode :item="item"></MusicMode>
          </template>
          <template v-else-if="item.mode==='pic'">
            <PicMode :item="item"></PicMode>
          </template>
        </template>
    </div>
  	<SearchBox :shadowMode="shadowMode"></SearchBox>
    <div class="s_slide">
    	<SlideBar :sectionList="sectionList" :shadowMode="shadowMode"></SlideBar>
    </div>
  </div>
</template>
<script>
import MovieMode from '@/components/MovieMode'
import MusicMode from '@/components/MusicMode'
import PicMode from '@/components/PicMode'
import SearchBox from '@/components/SearchBox'
import SlideBar from '@/components/SlideBar'
import { mapGetters, mapActions } from 'vuex'
export default{
	name: 'home',
	components: { MovieMode, MusicMode, PicMode, SearchBox, SlideBar },
  data(){
    return{
      ableToWheel: true
    }
  },
	computed: mapGetters({
  	sectionList: 'sectionList',
    currentSection: 'currentSection',
    shadowMode: 'shadowMode'
  }),
  methods:{
    mousewheelMove(e){
      let _this = this;
      if(_this.ableToWheel){
        let dir;
        if(e.wheelDeltaY > 0){
          dir = 'up'
        }else{
          dir = 'down'
        }
        this.$store.dispatch('turnHomePage', dir);
        _this.ableToWheel = false;
        setTimeout(function(){
          _this.ableToWheel = true;
        }, 500)
      }
    },

    winDowresize(){
      this.$store.dispatch('setPicPostion');
      this.$store.dispatch('setMovieCube');
    }
  },
	mounted(){
    let _this = this;
    // 获取图片位置
    this.$store.dispatch('setPicPostion');
    // 获取音乐点位
    setInterval(function(){
      _this.$store.dispatch('getMusicItem');
    }, 300);
    // 设置电影cube参数
    this.$store.dispatch('setMovieCube');
    // 监听屏幕 
    window.addEventListener('resize', this.winDowresize)
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
		top: 40px;
		width: 100%;
		height: 120px;

	}

	.s_slide{
		position: absolute;
		right: 0;
		height: 100%;
    z-index: 200;
	}
}

.s_section_item{
  width: 100%;
  height: 100%;
  background: url(../images/pic.jpg) no-repeat center;

  .s_section_cover{
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;

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