<template>
  <div class="s_screen_stage">
    <div class="s_screen_show">
      <img :src="movie.screenPos.src" :style="movie.screenPos" @mousemove="screenMove">
    </div>
    <div class="s_screen_box" :style="movie.pos">
      <template v-for="(item, index) in movie.list">
        <div class="s_screen_index" @mouseover="screenPicOver(item)">{{index + 1}}</div>
        <div class="s_screen_card" :style="item.pos">
          <div class="s_card_container" @mouseover="screenPicOver(item)">
            <img :src="item.src">
            <div class="s_card_discription"></div>
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
    },

    screenPicOver: function(item){
      this.$store.dispatch('screenPicOver', item);
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
    position: absolute;
    left: 0;
    right: 0;
    top: 160px;
    margin: auto;
    width: 800px;
    height: 400px;
    transform: translateZ( 50px );
    transform-style: preserve-3d;
    perspective: 800px;
    transition: all 0.3s ease-in;

    img{
      width: 100%;
      height: 100%;
      padding: 30px 0;
      background: rgba(0, 0, 0, .6);
      box-shadow: 0 0 20px rgba(255, 255, 255, 1);
    }

  }

  .s_screen_box{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 60px;
    height: 220px;
    margin: auto;
    text-align: center;
    transition: all 0.3s ease-in;

    .s_screen_index{
      display: none;
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      margin: 150px 20px 0 5px;
      cursor: pointer;
    }

    .s_screen_index:hover{
      background: rgba(255, 255, 255, 0.5);
      color: black;
    }

    .s_screen_card{
      position: absolute;
      width: 180px;
      height: 220px;
      perspective: 800px;
      z-index: 2;

      .s_card_container{
        cursor: pointer;
        transform-style: preserve-3d;
        perspective: 1200px;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease-in;
        transform: rotateY(-60deg);
        transform-origin: center;
        background: rgba(0, 0, 0, 0.5);
        padding: 10px;

        img{
          display: block;
          width: 100%;
          height: 190px;
          border: 1px solid #ddd;
          -webkit-filter: grayscale(1);
          transition: all .5s cubic-bezier(.25,.46,.45,.94);
        }

        .s_card_discription{
          width: 100%;
          height: 20px;
          color: black;
        }
      }
    }

    .s_screen_card:hover{
      z-index: 33!important;

      .s_card_container {
        transform: rotateY(0deg);
        background: white;

        img{
          -webkit-filter: none;
        }
      }
    }

  }
}

.test{
  width: 100px;
  height: 40px;
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

@media (max-height: 840px) {
  
  .s_screen_show{
    top: 180px!important;
  }

  .s_card_container{
    display: none;
  }

  .s_screen_index{
    display: inline-block!important;
  }

}

@media (max-height: 720px) {
  .s_screen_index{
    margin-top: 180px!important;
  }
}

</style>