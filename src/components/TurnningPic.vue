<template>
  <div class="s_turnning_pic" :style="pic.pos" @click="setPicPostion(pic)">
    <div class="s_turnning_content">
      <div class="s_trunning_front">
        <div class="s_trunning_pic_container">
          <img :src="pic.src" :class="{'s_img_color': pic.isCenter}"">
        </div>
        <div class="s_turnning_pic_name" :class="{ddd:pic.isCenter}">{{pic.name}}</div>
      </div>
      <div class="s_trunning_back"></div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'TurnningPic',
  props:['pic'],
  methods:{
    setPicPostion: function(item){
      if(!item.isCenter)
        this.$store.dispatch('setPicPostion', item);
    }
  }
}
</script>

<style lang="less">
.s_turnning_pic{
  position: absolute;
  width: 360px;
  height: 208px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  border: 1px solid #ddd;
  border-raduis: 4px;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out, left 0.6s ease-in-out, top 0.6s ease-in-out, right 0.6s ease-in-out, bottom 0.6s ease-in-out, width 0.6s ease-in-out, height 0.6s ease-in-out;

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

      .s_trunning_pic_container {
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 40px;

        img{
          width: 100%;
          height: 100%;
          background: white;
          border: 1px solid #ddd;
          -webkit-filter: grayscale(100%);
        }

        img:hover, .s_img_color{
          -webkit-filter: none;
        }
      }

      .s_turnning_pic_name{
        position: absolute;
        width: 100%;
        bottom: 10px;
        line-height: 30px;
        font-size: 12px;
        color: white;
      }
    }

    .s_trunning_back{

    }
  }
}

.ddd{
  color: #666!important;
}

</style>