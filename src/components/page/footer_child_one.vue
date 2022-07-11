<template>
  <div class="child_one">
      <div class='one_div'>
        <h3>酒店预订</h3>
        <p>艺龙旅行网提供全球50万家酒店的预订服务和酒店团购服务。通过真实的酒店照片、酒店评价，无论您是和家人一起旅游度假还是商务出行，我们都能为您提供称心如意的酒店。</p>
        <h3><a href="">艺龙酒店地标大全</a></h3>
        <p>为了方便用户快速定位酒店而存在，我们涵盖了北京、西安、上海、成都、广州、武汉、南京、东莞、长沙、深圳、重庆等城市的常见地标类型。</p>
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
.child_one{
  width: 100%;
  .one_div{
    width: 980px;
    height: 126px;
    margin: 0 auto;
    font-size: 12px;
    color: #555;
    background: #f0f0f0;
    padding-left: 20px;
    h3{
      font-size: 18px;
      padding: 5px 0 2px 0;
      a{
        color: #555;
      }
    }
    h3:nth-child(1){
      padding-top: 20px;
    }
  }
}
</style>
<script>
export default {
  name: 'child_one',
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