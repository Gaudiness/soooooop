<template>
  <div class="s_screen_stage">
    <div class="s_screen_show">
      <img src="" :style="movie.screenPos" @mousemove="screenMove">
    </div>
    <div class="s_screen_box" :style="movie.pos">
      <template v-for="item in movie.list">
        <div class="s_screen_card" :style="item.pos">
          <div class="s_card_container">
            <img :src="item.src">
          </div>
        </div>  
      </template>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ShiningScreen',
  props: ['movie'],
  methods:{
    screenMove: function(e){
      this.$store.dispatch('screenMove', e);
    }
  },
  mounted(){
    console.log(this.movie);
  }
}
</script>

<style lang="less">
.s_screen_stage{
  position: absolute;
  width: 100%;
  height: 100%;
  
  top: 0;

  .s_screen_show{
    top: 200px;
    top: 200px;
    width: 800px;
    height: 400px;
    margin: 120px auto 0 auto;
    transform: translateZ( 50px );
    transform-style: preserve-3d;
    perspective: 800px;

    img{
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .6);
      box-shadow: 0 0 20px rgba(255, 255, 255, 1);
    }
  }

  .s_screen_box{
    position: relative;
    height: 220px;
    margin: 40px auto 0 auto;
    

    .s_screen_card{
      position: absolute;
      width: 180px;
      height: 220px;
      perspective: 800px;
      z-index: 2;

      .s_card_container{
        transform-style: preserve-3d;
        perspective: 1200px;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease-in;
        transform: rotateY(-30deg);
        transform-origin: center;
        background: rgba(0, 0, 0, 0.5);

        img{
          width: 100%;
          height: 100%;
        }
      }
    }

    .s_screen_card:hover{
      z-index: 3;

      .s_card_container {
        transform: rotateY(0deg);

        
      }
    }

  }
}

@keyframes shining-screen {
  0%{
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5)
  }50%{
    box-shadow: 0 0 15px rgba(255, 255, 255, 1)
  }100%{
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5)
  }
}

</style>