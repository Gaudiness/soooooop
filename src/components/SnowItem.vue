<template>
	<div class="s_snow_conttainer">
		<div class="s_snow_outer s_snow_animation">  
	    <div class="s_snow_middle">  
	      <div class="s_snow_inner">
            <div class="s_snow_front">{{snow.name}}</div>
            <div class="s_snow_back">{{snow.name}}</div>
	      </div>  
	    </div>
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
.s_snow_outer{

  transition: 0.6s;
  transform-style: preserve-3d;

  width: 80px;
  height: 120px;
  float: left;
  overflow: hidden;

  .s_snow_middle{
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform:rotate(120deg);

    .s_snow_inner{
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      transform:rotate(-60deg);
      position: relative;

      .s_snow_front,
      .s_snow_back{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        line-height: 120px;
        text-align: center;
        color: red;
        cursor: pointer;
      }

      .s_snow_front{
        background: #0099ff;
        transform: rotateY(0deg);
        z-index: 2;
      }

      .s_snow_back{
        background: black;
        transform: rotateY(-180deg);
      }
    }
  }

}
.s_snow_animation{
  animation: s_snow_truning 5s infinite;
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

.s_snow_conttainer{
  display: inline-block;
  -webkit-perspective: 500;
  -moz-perspective: 500;
  -ms-perspective: 500;
  perspective: 500;
  -ms-transform: perspective(500px);
  -moz-transform: perspective(500px);
  transform-style: preserve-3d;
  overflow: hidden;
  transform:rotate(-60deg);
  
 
  
}




</style>