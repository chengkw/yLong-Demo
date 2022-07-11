<template>
  <div class="child_five">
      <div class='five_div'>
        <h3>热门城市</h3>
        <!-- <p> -->
          <ul>
            <li v-for='item in list'><a href="">{{item}}</a><span>|</span></li>
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
.child_five{
  width: 100%;
  /*position: fixed;*/
  overflow: hidden;
  /*bottom: 0;*/
  .five_div{
    width: 980px;
    height: 83px;
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
  name: 'child_five',
  components:{
   
  },
  data () {
   return{
      list:['QQ网购·旅游','西祠胡同','阳光旅游网','住哪网','酷讯网','TripAdvisor','火车网','吉祥航空','均瑶旅行网','北京房产','装修家居','住哲酒店管理系统']
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