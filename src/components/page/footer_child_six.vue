<template>
  <div class="child_six">
      <div class='six_div'>
        <h3>常见酒店</h3>
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
.child_six{
  width: 100%;
  /*position: fixed;*/
  overflow: hidden;
  /*bottom: 0;*/
  .six_div{
    width: 980px;
    height: 149px;
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
        padding: 0 3px 7px 3px;
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
      li:nth-child(46) span{
        display: none;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'child_six',
  components:{
   
  },
  data () {
   return{
      list:['如家酒店官网','布丁酒店','酒店预订','汉庭酒店官网','七天连锁酒店官网','希尔顿酒店','书香府邸酒店','情侣酒店','桔子酒店','格林豪泰连锁酒店官网','香格里拉酒店','维也纳酒店','喜来登酒店','酒店式公寓','广州长隆酒店','四季酒店','万豪酒店','皇冠假日酒店','书香世家酒店','凯宾斯基酒店','锦江之星连锁酒店官网','洲际酒店','全季酒店','广州大学城附近酒店','威斯丁酒店','杭州西湖附近的酒店','w酒店','速8酒店官网','星程酒店','丽思卡尔顿酒店','华天酒店','半岛酒店','国宾酒店','凯悦酒店','宜必思酒店','千岛湖洲际度假酒店','盘古七星酒店','北戴河刘庄家庭旅馆','公寓','家庭旅馆','青年旅舍','情侣酒店','农家乐','短租公寓','客栈','主题酒店']
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