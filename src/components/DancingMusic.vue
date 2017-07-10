<template>
  <div class="s_music_stage">
    <div class="s_music_container" :style="music.pos">
      <template v-for="item in music.list">
        <div class="s_music_item" :style="item.pos"></div>
      </template>
    </div>
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
  height: 100%;
  width: 100%;

  .s_music_container{
    position: relative;
    bottom: 5px;
    margin: auto;

    .s_music_item{
      position: absolute;
      bottom: 0;
      width: 20px;
      background: rgba(0, 0, 0, 0.5);
      transition: height .3s ease-in;
    }
  }

  .s_stage_line{
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 50px;
    height: 5px;
    border-radius: 4px;
    background: rgba(0, 0, 0, .5);
  }
}

</style>