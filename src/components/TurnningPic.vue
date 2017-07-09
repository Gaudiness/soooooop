<template>
  <div class="s_turnning_pic" :style="pic.pos">
    <div class="s_turnning_content">
      <div class="s_trunning_front">
        <img :src="pic.src">
        <div class="s_turnning_pic_name">{{pic.name}}</div>
      </div>
      <div class="s_trunning_back"></div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'TurnningPic',
  props:['pic'],

}
</script>

<style lang="less">
.s_turnning_pic{
  position: absolute;
  width: 360px;
  height: 208px;
  border: 1px solid #ddd;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  .s_turnning_content{
    position: relative;
    width: 100%;
    height: 100%;


    .s_trunning_front,
    .s_trunning_back{
      position: absolute;
      width:100%;
      height: 100%;
      padding: 10px;
    }

    .s_trunning_front{
      z-index: 2;

      img{
        width: 100%;
        height: 160px;
        background: white;
      }

      .s_turnning_pic_name{
        line-height: 30px;
        font-size: 12px;
        color: white;
      }
    }

    .s_trunning_back{

    }
  }

}
</style>