<template>
  <div class="s_movie_state">
    <!-- <div class="s_movie_device">
    </div>
    <div class="s_movie_screen">
      
    </div> -->
    <div class="s_movie_cube" :style="movie.cube">
      <!-- <div class="s_cube_side top" :style="movie.top"></div> -->
      <div class="s_cube_side bottom" :style="movie.bottom"></div>
      <!-- <div class="s_cube_side left" :style="movie.left"></div> -->
      <div class="s_cube_side right" :style="movie.right">
        <div class="s_container">
          <div class="s_movie_screen"></div>
        </div>
      </div>
      <div class="s_cube_side front" :style="movie.front">
        <div class="s_container">
          <div class="s_movie_dot"></div>
          <div class="s_line_1" :style="movie.line1"></div>
          <div class="s_line_2" :style="movie.line2"></div>
          <div class="s_line_3" :style="movie.line3"></div>
          <div class="s_line_4" :style="movie.line4"></div>
        </div>
      </div>
      <!-- <div class="s_cube_side back" :style="movie.back"></div> -->
      
    </div>
  </div>
</template>

<script>
export default{
  name: '',
  props: ['movie'],
  mounted(){
    console.log(this.movie);
  }
}
</script>

<style lang="less">
.s_movie_state{
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 800px;


  .s_movie_device{
    position: absolute;
    left: 150px;
    bottom: 100px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 5px #fff;
  }

  .s_movie_screen{
    position: absolute;
    width: 100%;
    height: 300px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  }

  .s_movie_cube{
    position: relative;
    width: 600px;
    height: 300px;
    transform-origin: 0 0 200px;
    transform: rotateY(10deg);
    transform-style: preserve-3d;

    .s_cube_side{
      position: absolute;
      border: 1px solid #ddd;

      .s_container{
        position: relative;
        width: 100%;
        height: 100%;
        perspective: 800px;
      }
    }
  }

  .s_movie_dot{
    position: absolute;
    top: -5px;
    left: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
  
  .s_line_1,
  .s_line_2,
  .s_line_3,
  .s_line_4{
    position: absolute;
    top: 0;
    height: 1px;
    background: white;
    transform-origin: left;
  }

}

</style>