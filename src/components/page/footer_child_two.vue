<template>
  <div class="child_two">
      <div class='two_div'>
        <h3>机票查询</h3>
        <p>艺龙旅行网是中航协认证的机票服务提供商，提供国内和国际的特价机票、航班信息、机票查询和预订服务。</p>
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
.child_two{
  width: 100%;
 /* position: fixed;
  bottom: 0;*/
  .two_div{
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
  }
}
</style>
<script>
export default {
  name: 'child_two',
  components:{
   
  },
  data () {
   return{
   
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