<template>
  <div class="s_slide_bar">
    <div class="s_slide_container">
      <div class="s_slide_item" v-for="item in sectionList" 
        @click="turnHomePage(item)"
        :class="{s_slide_item_current: item.current}"></div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'SlideBar',
  methods:{
    turnHomePage: function(item){
      this.$store.dispatch('turnHomePage', item);
    }
  },
  props: ['sectionList'],
  mounted(){
    // console.log(this.sectionList);
  }
}
</script>

<style lang="less">
.s_slide_bar {
  display: table;
  height: 100%;
  width: 100%;

  .s_slide_container{
    display: table-cell;
    vertical-align:middle;

    .s_slide_item{
      cursor: pointer;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid #ddd;
      backround: transparent;
      margin: 10px 0;
    }

    .s_slide_item:hover{
      border-color: #222;
    }

    .s_slide_item_current{
      border-color: #222;
      background: #222;
    }

    .s_slide_item_current{
      border-color: #333!important;
      background: #333!important;
    }

    
  }
}	
</style>