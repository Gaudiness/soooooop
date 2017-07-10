<template>
  <div class="s_music_stage">
    <div v-for="item in music" class="s_music_row" :style="item.pos"></div>
    <div class="s_stage_line"></div>
  </div>
</template>

<script>
export default{
  name: 'DancingMusic',
  props: ['music'],
  mounted(){
    console.log(this.music);
  }
}
</script>

<style lang="less">
.s_music_stage{
  width: 100%;
  height: 100%;

  .s_stage_line{
    position: absolute;
    left: 20px;
    right: 20px;
    height: 4px;
    bottom: 50px;
    border-radius: 3px;
    background: #ddd;
  }

  .s_music_row{
    position: absolute;
    left: 100px;
    bottom: 50px;
    height: 300px;
    width: 20px;
    background: rgba(0, 0, 0, 0.5);
  }
}

</style>