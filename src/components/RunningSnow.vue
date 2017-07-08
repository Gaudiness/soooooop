<template>
  <div class="s_snow_container" :style="{ top: snow.top, left: snow.left }">
    <div class="s_running_snow s_snow_animation">
      <div class="s_running_front">{{ snow.name }}</div>
      <div class="s_running_back">{{ snow.discription }}</div>
    </div>
  </div>
</template>

<script>
export default{
  name: '',
  props: ['snow'],
  mounted(){
    // console.log(this.snow);
  }
}
</script>

<style lang="less">

.s_snow_container{
  position: absolute;
  transform:rotate(-45deg);

  .s_running_snow {
    position: relative;
    display: inline-block;
    margin: 20px 10px;
    width: 150px;
    height: 150px;
    cursor: pointer;
    transition: 0.6s;
    background: rgba(0, 0, 0, 0.5);
    transform-style: preserve-3d;


    .s_running_front , .s_running_back{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 10px;
      color: white;
      text-align: center;
      backface-visibility: hidden;
    }
    .s_running_front {
      transform: rotateY(0deg) rotate(45deg);
      z-index: 2;
    }
    .s_running_back {
      transform: rotateY(-180deg) rotate(45deg);
    }
  }

  .s_running_snow:hover{
    animation: none;
  }

  .s_snow_animation{
    animation: s_snow_truning 3s infinite;
  }

  @keyframes s_snow_truning{
    0%{
      transform: rotateY(0deg);
    }50%{
      transform: rotateY(180deg);
    }100%{
      transform: rotateY(360deg);
    }
  }
}
</style>