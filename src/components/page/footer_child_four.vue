<template>
  <div class="child_four">
      <div class='four_div'>
        <h3>热门城市</h3>
        <!-- <p> -->
          <ul>
            <li v-for='item in list'><a href="">{{item}}酒店</a><span>|</span></li>
          </ul>
        <!-- </p> -->
      </div>
  </div>
</template>
<style lang="scss" scope>
*{
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.child_four{
  width: 100%;
  /*position: fixed;*/
  overflow: hidden;
  /*bottom: 0;*/
  .four_div{
    width: 980px;
    height: 105px;
    margin: 0 auto;
    font-size: 12px;
    color: #555;
    background: #f0f0f0;
    padding-left: 20px;
    h3{
      font-size: 18px;
      padding: 25px 0 2px 0;
    }
    ul{
      li{
        float: left;
        padding: 0 3px 5px 2px;
        a{
          color: #555;
        }
        a:hover{
          text-decoration: underline;
        }
        span{
          margin-left: 5px;
        }
      }
    /*  li:nth-child(11) span{
        display: none;
      }*/
    }
  }
}
</style>
<script>
export default {
  name: 'child_four',
  components:{
   
  },
  data () {
   return{
      list:['北京','上海','杭州','成都','深圳','青岛','苏州','广州','香港','厦门','天津','西安','武汉','重庆','沈阳','长沙','三亚','珠海','宁波','南京','大连','济南','昆明','合肥']
   }
  },
  methods:{
   
   },
  watch:{
    
  },
  mounted(){

  }
}
</script>