<template>
  <div class="s_slide_bar">
    <div class="s_slide_container">
      <div class="s_slide_item" v-for="item in sectionList" 
        @click="turnHomePage(item)"
        :class="{s_slide_item_current: item.current}">{{item.name}}</div>
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
      width: 100%;
      height: 30px;
      line-height: 30px;
      background: rgba(0, 0, 0, 0.3);
      color: white;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      margin: 5px 0;
      padding: 0 15px;
      text-align: center;
    }

    .s_slide_item:hover,
    .s_slide_item_current{
      background: rgba(255, 255, 255, 0.5);
      color: black;
    }

  }
}	



</style>