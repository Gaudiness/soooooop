<template>
  <div>
    <div class="s_list_header">
      <div class="s_container">
        <div class="s_list_title">
          <a href="#" class="s_title_big">Soooooop</a>
          <span class="s_title_small">
            <a href="#/list/pic">pictrue</a>
            <a href="#/list/music">music</a>
            <a href="#/list/movie">movie</a>
          </span>
        </div>
      </div>
    </div>
    <div class="s_list_container">
      <div class="s_container">
        <router-view></router-view>
      </div>
    </div>
    <div class="s_list_footer">
      <div class="s_container">
        <div>© soooooop. Tort-Delete.</div>
        <div>dont't settle for less. __by sun.</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default{
  mounted(){
    console.log('have a try.');
    this.$store.dispatch('axiosTest');
  }
}

</script>

<style lang="less">

/*容器*/
.s_container{
  width: 1180px;
  margin: 0 auto;
}

/*头部*/
.s_list_header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);

  .s_list_title{
    font-size: 22px;

    s_title_big{
      display: inline-block;
      width: 200px;
    }

    .s_title_small{
      font-size: 14px;
      float: right;

      a{
        display: inlint-block;
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }

  
}

/*中部*/
.s_list_container{
  min-height: 800px;
}

/*尾部*/
.s_list_footer{
  font-size: 14px;
  color: #ddd;
  padding-top: 10px;
  height: 80px;
  text-align: right;
}

</style>