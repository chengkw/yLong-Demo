<template>
  <div class="child_three">
      <div class='three_div'>
        <h3>酒店团购</h3>
        <!-- <p> -->
          <ul>
            <li v-for='item in list'><a href="">{{item}}酒店团购</a><span>|</span></li>
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
.child_three{
  width: 100%;
  /*position: fixed;*/
  overflow: hidden;
  /*bottom: 0;*/
  .three_div{
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
        padding: 0 3px 5px 3px;
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
      li:nth-child(11) span{
        display: none;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'child_three',
  components:{
   
  },
  data () {
   return{
      list:['北京','上海','三亚','广州','杭州','厦门','苏州','深圳','西安','成都','丽江','武汉','宁波','重庆','大连','南京','青岛','桂林','天津','沈阳']
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