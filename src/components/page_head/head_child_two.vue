<template>
  <div id="huangshan">
    <v-head></v-head>
   <div class="cont_box">
     <div class="mt10">
       <h2>黄山酒店预订</h2>
       <a href="">首页</a>
       <span>></span>
       <a href="">酒店</a>
       <span>></span>
       <a href="">黄山酒店</a>
       <span>></span>
       <a href="">黄山酒店</a>
     </div>
     <div class="search_box">
       <div class="search_item mini">
        <label>
           <span>目的地</span>
           <input type="text" value="黄山市">
        </label>
       </div>
       <div class="search_item search_date">
        <label class="br">
          <span>入口</span>
          <input type="text" value="2017-11-20">
          <span class="icon_date_s"></span>
        </label>
        <label>
          <span>离店</span>
          <input type="text" value="2017-11-21">
          <span>(共一晚)</span>
          <span class="icon_date_e"></span>
        </label>
       </div>
       <div class="search_item">
         <span>关键词</span>
         <input class="input_f16" type="text" value="如位置\酒店名\品牌">
       </div>
       <div class="btn_search_w1">
         <span class="mr10"></span>
         搜索
       </div>
     </div>
     <div class="filter_box">
       <div class="filter_item">
         <div class="filter_title">
           <span></span>位置
         </div>
         <div class="filter_option">
           <div class="filter_unlimited">不限</div>
           <ul class="filter_posi_type">
             <li><i></i>行政区</li>
             <li>商圈<i></i></li>
             <li>机场/车站<i></i></li>
             <li>医院<i></i></li>
             <li>大学<i></i></li>
             <li>室内景点<i></i></li>
             <li>室外景点<i></i></li>
           </ul>
           <div class="filter_posi_show">
             <ul>
               <li>
                 <input type="radio" name="sex">
                 <span>黄山山顶</span>
               </li>
               <li>
                 <input type="radio" name="sex">
                 <span>黄山市区(屯溪)</span>
               </li>
               <li>
                 <input type="radio" name="sex">
                 <span>汤口地区</span>
               </li>
               <li>
                 <input type="radio" name="sex">
                 <span>太平湖</span>
               </li>
               <li>
                 <input type="radio" name="sex">
                 <span>黄山南大门</span>
               </li>
               <li>
                 <input type="radio" name="sex">
                 <span>黄山区(太平)</span>
               </li>
               <li>
                 <input type="radio" name="sex">
                 <span>山下</span>
               </li>
               <li>
                 <input type="radio" name="sex">
                 <span>歙县</span>
               </li>
             </ul>
             <div class="icon_h1"></div>
           </div>
         </div>
       </div>
       <div class="filter_iter">
         <div class="filter_it">
           <i></i>
           房价
         </div>
         <div class="filter_posi_box">
           <div class="filter_unlimited wr">不限</div>
           <ul class="filter_cd_list">
             <li>
               <input type="radio" name="sex">150元以下
             </li>
             <li>
               <input type="radio" name="sex">150-300元
             </li>
             <li>
               <input type="radio" name="sex">301-450元
             </li>
             <li>
               <input type="radio" name="sex">451-600元
             </li>
             <li>
               <input type="radio" name="sex">600元以上
             </li>
           </ul>
           <div class="filter_custom">
             <span>自定义</span>
             <span>
               <input type="text">
             </span>
             <span>——</span>
             <span>
               <input type="text">
             </span>
             <span>确定</span>
           </div>
         </div>
       </div>
       <div class="filter_iter">
         <div class="filter_it">
           <i class="in_1"></i>
           星级
         </div>
         <div class="filter_posi_box">
           <div class="filter_unlimited wr">不限</div>
           <ul class="filter_cd_list">
             <li>
               <input type="radio" name="sex">经济/客栈
             </li>
             <li>
               <input type="radio" name="sex">三星/舒适
             </li>
             <li>
               <input type="radio" name="sex">四星/高档
             </li>
             <li>
               <input type="radio" name="sex">五星/豪华
             </li>
             <li>
               <input type="radio" name="sex">公寓
             </li>
           </ul>
           
         </div>
       </div>
       <div class="filter_iter">
         <div class="filter_it">
           <i class="in_2"></i>
           品牌
         </div>
         <div class="filter_posi_box">
           <div class="filter_unlimited">不限</div>
           <ul class="filter_cd_list">
             <li>
               <input type="radio" name="sex">7天
             </li>
             <li>
               <input type="radio" name="sex">汉庭
             </li>
             <li>
               <input type="radio" name="sex">如家
             </li>
             <li>
               <input type="radio" name="sex">莫泰
             </li>
             <li>
               <input type="radio" name="sex">布丁
             </li>
             <li>
               <input type="radio" name="sex">速8
             </li>
             <li>
               <input type="radio" name="sex">尚客优
             </li>
           </ul>
           <div class="icon_h1"></div>
           <div class="filter_cd">舒适/高档/化品牌</div>
         </div>
       </div>
       <div class="filter_iter">
         <div class="filter_it">
           <i class="in_3"></i>
           主题
         </div>
         <div class="filter_posi_box">
           <div class="filter_unlimited">不限</div>
           <ul class="filter_cd_list">
             <li>
               <input type="radio" name="sex">商旅之家
             </li>
             <li>
               <input type="radio" name="sex">聚会做饭
             </li>
             <li>
               <input type="radio" name="sex">农家乐
             </li>
             <li>
               <input type="radio" name="sex">休闲情调
             </li>
             <li>
               <input type="radio" name="sex">四合院
             </li>
             <li>
               <input type="radio" name="sex">青年旅社
             </li>
             <li>
               <input type="radio" name="sex">度假休闲
             </li>
             <li>
               <input type="radio" name="sex">看病就医
             </li>
           </ul>
           <div class="icon_h1"></div>
         </div>
       </div>
     </div>
     <div class="fillter_btn">展开服务设施&房型人数</div>
     <div class="condition">
       <span>1525</span>家酒店满足条件
     </div>
     <div class="hlist_box">
       <div class="hlist_main">
         <div class="h_sort">
           <ul class="sort_list">
             <li>推荐</li>
             <li>口碑<i></i></li>
             <li>距离<i></i></li>
             <li>价格<i></i></li>
           </ul>
           <div class="sort_filter">
             <ul class="sort_back_tit">
               <li>返后价</li>
               <li>返前价</li>
             </ul>
           </div>  
         </div>
         <div class="h_list">
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_0006kMoR.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_0006kMoR.jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>1</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>99%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1706</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:2小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">168</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>1130人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_0009vyQj.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_0009vyQj (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>2</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>100%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1522</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:23分钟前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">175</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>849人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_00080mi2.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_00080mi2 (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>3</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>100%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>2673</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:10分钟前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">171</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>1235人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/0009z607.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/0009z607 (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>4</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>98%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1138</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:1小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">149</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>542人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/0000wY2D.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/0000wY2D (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>5</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>95%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>211</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:1小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">152</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>216人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/00008nH8.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/00008nH8 (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>6</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>98%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1628</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:17小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">379</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>399人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/0000cfLj.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/0000cfLj (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>7</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>97%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>3868</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:3小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">198</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>100人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_0008dwg8.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_0008dwg8 (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>8</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>100%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1596</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:1小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">176</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>316人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/0006ObFu.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/0006ObFu (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>9</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>96%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1823</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:3小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">134</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>457人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_0009yPEM.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_0009yPEM (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>10</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>100%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1774</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:昨天</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">236</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>194人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/0009tGSu.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/0009tGSu (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>11</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>96%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>3143</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:22小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">270</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>145人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/0004AFeu.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/0004AFeu (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>12</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>99%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>4025</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:15小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">97</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>2062人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/00040jAh.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/00040jAh (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>13</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>98%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1961</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:13小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">353</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>561人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_0009vz5t.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_0009vz5t (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>14</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>100%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>639</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:5小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">330</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>97人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_0009tqtT.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_0009tqtT (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>15</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>98%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>5095</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:21小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">328</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>443人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_0005p1ho.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_0005p1ho (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>16</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>95%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>646</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:19小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">95</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>275人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/0003Bgcm.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/0003Bgcm (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>17</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>100%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1633</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:12小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">99</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>576人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/0003FZyt.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/0003FZyt (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>18</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>92%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1633</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:10小时前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">93</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>484人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>

           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_0005o1Nz.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_0005o1Nz (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>19</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>99%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>1572</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:17分钟前</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">249</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>821人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="h_item">
             <div class="h_info">
               <div class="h_info_pic">
                <img class="img1" src="../../assets/nw_0008TAxG.jpg" alt="">
                 <div class="img2">
                   <img src="../../assets/nw_0008TAxG (1).jpg" alt="">
                 </div>
               </div>
               <div class="h_info_text">
                 <div class="h_info_base">
                   <p class="h_info_b1">
                     <a href=""><span>20</span>滨江时尚酒店(屯溪老街店)</a>
                     <b></b>
                     <i></i>
                   </p>
                   <p class="h_info_b2">
                     <a href="">[黄山市区(屯溪)]</a>屯溪滨江中路1号(局老街步行3分钟)新开业酒店
                   </p>
                   <p class="h_info_b3">
                     <span></span>
                     <span></span>
                   </p>
                   <p class="h_info_b4">
                     <span><i></i>地图</span>
                     <span><i></i>街景</span>
                   </p>
                 </div>
                 <div class="h_info_comt">
                   <a href="">
                     <div class="comt1">
                       <span>100%</span>
                       <span>好评</span>
                     </div>
                     <div class="comt2">
                      来自
                       <span>229</span>
                       条点评
                     </div>
                   </a>
                   <p>最新预订:昨天</p>
                 </div>
                 <div class="h_info_pri">
                   <p>
                    <a href="">
                     <span class="c666">￥</span>
                     <span class="num">183</span>
                     <span class="cf55">起</span>
                    </a>
                   </p>
                   <div class="to_detai">查看详情</div>
                   <div class="h_add_cc">
                     <i></i>
                     <span>447人</span>收藏
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="listSEO">
             <div class="seo">
               <span>黄山市酒店信息</span>
               <i></i>
             </div>
           </div>
         </div>
       </div>
       <div class="hlist_sider">
         <div class="r_where">
           看看大家都住哪
           <i class="i2"></i>
           <i class="i1"></i>
         </div>
       </div>
     </div>
   </div>
     <v-foot class='huangshan_foot'></v-foot>
   
  </div>
</template>

<script>
export default {
  name: 'huangshan',
  components:{

  },
  data () {
    return {
     
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
<style lang="scss" scope>
#huangshan{
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
}
.cont_box{
  width:1200px;
  height:3922px;
  background:#fff;
  margin:0 auto;
  .mt10{
    width:1200px;
    height:45px;
    line-height:45px;
    h2{
      float:left;
      margin:0 20px 0 0 ;
      color:#555;
    }
    a{
      text-decoration:none;
      font-size:13px;
      color:#555;
    }
    span{
      color:#555;
    }
  }
  .search_box{
    width:1200px;
    height:44px;
    background:#eff4fa;
    border-top:2px solid #b5cbe6;
    padding:10px 0 0 0;
    display:flex;
    justify-content:space-between;
    .search_item{
      border:1px solid #b5cbe6;
      width:260px;
      height:34px;
      line-height:34px;
      background:#fff;
      span{
        color:#999;
      }
      input{
        width:173px;
        height:34px;
        border:0;
        font-size:18px;
        outline:none;
      }
      .input_f16{
        color:#999;
      }
    }
    .mini{
      margin:0 0 0 10px;
    }
    .search_date{
      width:493px;
      font-size: 12px;
      .br{
        border-right:1px solid #CDE;
        float:left;
        input{
          padding: 0 0 0 5px;
          width:180px;
        }
        .icon_date_s{
          display:block;
          width:18px;
          height:16px;
          background:url(../../assets/icon2015-1.png) 0 -77px no-repeat;
          float:right;
          margin:10px 0 0 0;
        }
      }
      input{
          padding: 0 0 0 5px;
          width:120px;
        }
      .icon_date_e{
        display:block;
        width:18px;
        height:16px;
        background:url(../../assets/icon2015-1.png) -34px -77px no-repeat;
        float:right;
        margin:10px 0 0 0;
      }
    }
    .btn_search_w1{
      width:140px;
      height:34px;
      background:#F55;
      line-height:34px;
      color:#fff;
      font-size:18px;
      cursor:pointer;
      margin:0 10px 0 0;
      .mr10{
        display:block;
        width:18px;
        height:19px;
        background:url(../../assets/icon2015-1.png) -71px -78px no-repeat;
        float:left;
        margin:8px 10px 0 30px;
      }
    }
    .btn_search_w1:hover{
      background:#d83131;
    }
  }
  .filter_box{
    width:1200px;
    height:216px;
    background:aqua;
    margin:10px 0 0 0;
    .filter_item{
      width:1200px;
      height:67px;
      background:#fff;
      display:flex;
      justify-content:space-between;
      border-bottom:1px solid #eee;
      .filter_title{
        width:96px;
        background:#eff4fa;
        padding:10px 0 0 0;
        span{
          display:block;
          width:18px;
          height:18px;
          background:url(../../assets/icon2015-1.png) -98px -3px no-repeat;
          float:left;
          margin:4px 5px 0 10px;
        }
      }
      .filter_option{
        width:1062px;
        height:67px;  
        .filter_unlimited{
          width:42px;
          height:22px;
          background:#e3f0ff;
          border:1px solid #e3f0ff;
          border-radius:10px;
          font-size:12px;
          text-align:center;
          line-height:22px;
          cursor:pointer;
          float:left;
        }
        .filter_unlimited:hover{
          border:1px solid #39F;
          color:#39F;
        }
        .filter_posi_type{
          list-style:none;
          font-size:12px;
          li{
            float:left;
            height:25px;
            line-height:25px;
            margin:0 0 0 10px;
            padding:0 0 0 20px;
            cursor:pointer;
            color:#555;
            i{
              display:block;
              width:8px;
              height:4px;
              background:url(../../assets/icon2015-1.png) -462px -50px no-repeat;
              float:right;
              margin:10px 25px 0 0 ;
            }
          }
          li:hover{
            border-top:2px solid #39F;
            color:#39F;
          }
        }
        .filter_posi_show{
          height:30px;
          margin:35px 0 0 0;
          background:#f7f7f7;
          ul{
            list-style:none;
            line-height:30px;
            li{
              float:left;
              margin:0 0 0 40px;
              cursor:pointer;
              font-size:13px;
              color:#555;
            }
            li:hover{
              color:#39F;
            }
          }
          .icon_h1{
          width:22px;
          height:22px;
          background:url(../../assets/icon2015-1.png) -102px -76px no-repeat;
          float:right;
          margin:7px 5px 0 0;
        }
        .icon_h1:hover{
          background:url(../../assets/icon2015-1.png) -161px -76px no-repeat;
        }
        }
      }
    }
    .filter_iter{
      width:1200px;
      height:37px;
      background:#fff;
      display:flex;
      justify-content: space-between;
      border-bottom:1px solid #eee;
      .filter_it{
        width:96px;
        height:36px;
        line-height:36px;
        background:#eff4fa;
        i{
          display:block;
          width:18px;
          height:18px;
          background:url(../../assets/icon2015-1.png) -119px -4px no-repeat;
          float:left;
          margin:9px 5px 0 10px;
        }
        .in_1{
          background:url(../../assets/icon2015-1.png) -141px -4px no-repeat;
        }
        .in_2{
          background:url(../../assets/icon2015-1.png) -164px -3px no-repeat;
        }
        .in_3{
          background:url(../../assets/icon2015-1.png) -186px -3px no-repeat;
        }
      }
      .filter_posi_box{
        width:1062px;
        height:36px;
        line-height:36px;
        .filter_unlimited{
          width:42px;
          height:22px;
          background:#e3f0ff;
          border:1px solid #e3f0ff;
          border-radius:10px;
          font-size:12px;
          text-align:center;
          line-height:22px;
          cursor:pointer;
          float:left;
          margin:6px 0 0 0;
        }
        .filter_unlimited:hover{
          border:1px solid #39F;
          color:#39F;
        }
        .wr{
          width:42px;
          height:22px;
          font-size:12px;
          text-align:center;
          cursor:pointer;
          float:left;
          background:#fff;
          border:1px solid #fff;
        }
        .filter_cd_list{
          list-style:none;
          font-size: 12px;
          li{
            width:100px;
            float:left;
            margin:0 0 0 20px;
            cursor:pointer;
            color:#555;
          }
          li:hover{
            color:#39F;
          }
        }
        .filter_custom{
          width:240px;
          height:21px;
          float:right;
          font-size:13px;
          line-height:21px;
          margin:6px 150px 0 0;
          cursor:pointer;
          span{
            input{
              width:40px;
            }
          }
          span:last-of-type{
            padding:2px 15px 2px 15px;
            border:1px solid #999;
            background:#DDD;
          }
        }
        .filter_cd{
          font-size:13px;
          line-height:20px;
          text-align:center;
          width:116px;
          height:20px;
          border:1px solid #999;
          background:#DDD;
          cursor:pointer;
          float:right;
          margin:-20px 40px 0 0;
          color:#555;
        }
        .icon_h1{
          width:22px;
          height:22px;
          background:url(../../assets/icon2015-1.png) -102px -76px no-repeat;
          float:right;
          margin:7px 5px 0 0;
        }
        .icon_h1:hover{
          background:url(../../assets/icon2015-1.png) -161px -76px no-repeat;
        }
      }
    }
  }
  .fillter_btn{
    width:180px;
    height:20px;
    background:#ebf5ff;
    font-size:14px;
    color:#39F;
    margin:0 auto;
    border-radius:20px 20px 120px 120px ;
    text-align:center;
    line-height:20px;
    margin:4px 0 0 500px;
    cursor:pointer;
  }
  .fillter_btn:hover{
    background:#39F;
    color:#fff;
  }
  .condition{
    width:1200px;
    height:27px;
    line-height:27px;
    span{
      font-size:25px;
      color:#F55;
    }
  }
  .hlist_box{
    width:1200px;
    display:flex;
    justify-content:space-between;
     .hlist_main{
       width:830px;
       .h_sort{
         width:830px;
         height:41px;
         border-top:2px solid #b5cbe6;
         background:#eff4fa; 
         display:flex;
         justify-content: space-between;
         .sort_list{
           list-style:none;
           li{
             float:left;
             width:70px;
             height:40px;
            text-align:center;
            line-height:40px;
             cursor:pointer;
             font-size:15px;
             i{
               display:block;
               width:7px;
               height:9px;
               background:url(../../assets/icon2015-1.png) -224px -123px no-repeat;
               float:right;
               margin:15px 8px 0 -13px;
             }
           }
           li:nth-of-type(1){
             background:#39F;
             color:#fff;
           }
           li:nth-of-type(3){
             color:#ccc;
             i{
               background:url(../../assets/icon2015-1.png) -257px -123px no-repeat;
             }
           }
           li:nth-of-type(2):hover{
             background:#d5ebff;
           }
           li:nth-of-type(4):hover{
             background:#d5ebff;
           }
         }
         .sort_filter{
           width:371px;
           height:38px;
           .sort_back_tit{
             width:102px;
             height:20px;
             list-style:none;
             margin:11px 0 0 260px;
             li{
               float:left;
               font-size:8px;
               text-align:center;
               cursor:pointer;
             }
             li:nth-of-type(1){
               width:50px;
               border-radius:120px 20px 20px 120px;
               background:#59F;
               color:#fff;
             }
             li:nth-of-type(2){
               width:50px;
               height:14px;
               border-radius:20px 120px 120px 20px;
               background:#fff;
              border:1px solid #CDE;
              list-height:14px;
            }
             li:nth-of-type(2):hover{
               border:1px solid #59F;
             }
           }
         }
       }
     }
    .hlist_sider{
      width:355px;
      background:#ccc;
      .r_where{
        height:40px;
        line-height:40px;
        color:#37D;
        .i1{
          display:block;
          width:180px;
          height:38px;
          background:url(../../assets/hot_r.gif) 75px 0 no-repeat;
          float:right;
          margin:0 15px 0 0;
        }
        .i2{
          display:block;
          width:14px;
          height:26px;
          background:url(../../assets/icon2015-1.png) -496px -198px no-repeat;
          float:right;
          margin:9px 10px 0 0;
        }
      }
    }
    .h_list{
      width:830px;
      margin:10px 0 0 0;
      .h_item{
        width:830px;
        height:140px;
        border-bottom:1px solid gray;
        padding:10px 0 0 0;
        .h_info{
          width:830px;
          height:130px;
          display:flex;
          justify-content: space-between;
          position:relative;
          .h_info_pic{
            width:180px;
            height:130px;
            .img1{
              width:180px;
              height:130px;
            }
            .img2{
              position:absolute;
              top:-10px;
              left:190px;
              z-index:5;
              display:none;
            }
          }
          .h_info_pic:hover{
            .img2{
              display:block;
            }
          }
          .h_info_text{
            width:630px;
            height:130px;
            display:flex;
            justify-content: space-between;
            .h_info_base{
              width:345px;
              height:108px;
             
              .h_info_b1{
                height:25px;
                a{
                  color:#59F;
                  text-decoration:none;
                  span{
                    display:block;
                    width:20px;
                    height:25px;
                    background:url(../../assets/icon2015-1.png) -665px -70px no-repeat;
                    text-align:center;
                    line-height:25px;
                    color:#fff;
                    font-size:13px;
                    float:left;
                  }
                }
                a:hover{
                  color:red;
                }
                i{
                  display:block;
                  width:16px;
                  height:16px;
                  background:url(../../assets/icon2015-1.png) -716px -147px no-repeat;
                  float:right;
                  margin:2px 10px 0 0;
                }
                b{
                  display:block;
                  width:60px;
                  height:10px;
                  background:url(../../assets/icon2015-1.png) -398px -120px no-repeat;
                  float:right;
                  margin:7px 40px 0 0 ;
                }
              }
              .h_info_b2{
                height:20px;
                font-size:10px;
                margin:6px 0 0 0;
                a{
                  text-decoration:none;
                  color:#59F;
                }
                a:hover{
                  color:red;
                }
              }
              .h_info_b3{
                height:20px;
                margin:6px 0 0 0;
                span{
                  display:block;
                  width:16px;
                  height:17px;
                  background:url(../../assets/icon2015-1.png) 0 -4px no-repeat;
                  float:left;
                }
                span:last-of-type{
                  background:url(../../assets/icon2015-1.png) -20px -4px no-repeat;
                }
              }
              .h_info_b4{
                height:20px;
                margin:6px 0 0 0;
                cursor:pointer;
                span{
                  width:55px;
                  height:20px;
                  float:left;
                  font-size:8px;
                  text-align:center;
                  line-height:20px;
                  color:#333;
                  border-radius:120px 20px 20px 120px;
                  border:1px solid #cde;
                  i{
                    display:block;
                    width:9px;
                    height:12px;
                    background:url(../../assets/icon2015-1.png) -249px -6px no-repeat;
                    float:left;
                    margin:3px 0 0 10px;
                  }
                }
                span:nth-of-type(1):hover{
                  border:1px solid #59F;
                  color:#59F;
                }
                span:last-of-type{
                  color:#ccc;
                  border-radius:20px 120px 120px 20px;
                  border:1px solid #cde;
                  i{
                    width:10px;
                    height:12px;
                    background:url(../../assets/icon2015-1.png) -743px -6px no-repeat;
                  }
                }
              }
            }
            .h_info_comt{
              width:132px;
              height:100px;
              font-size:11px;
              text-align:center;
              border-left:1px solid #eee;
              border-right:1px solid #eee;
              a{
                text-decoration:none;
                .comt1{
                  span:nth-of-type(1){
                    color:#59F;
                    font-size:18px;
                  }
                  span:nth-of-type(1):hover{
                    color:red;
                  }
                }
                .comt2{
                  margin:10px 0 0 0;
                  span{
                    color:#59F;
                  }
                  span:hover{
                    color:red;
                  }
                }
              }
              p{
                margin:18px 0 0 0 ;
                color:green;
              }
            }
            .h_info_pri{
              width:155px;
              height:130px;
              text-align:center;
              p{
                a{
                  text-decoration:none;
                  .c666{
                    font-size:6px;
                    vertical-align: 11px;
                  }
                  .num{
                    font-size:30px;
                    color:#f55;
                  }
                  .num:hover{
                    color:#d63737;
                  }
                  .cf55{
                    font-size:15px;
                    color:#f55;
                  }
                }
              }
              .to_detai{
                width:122px;
                height:30px;
                text-align:center;
                line-height:30px;
                margin:0 auto;
                border:1px solid #e3f0ff;
                color:#59F;
                margin:10px 0 0 20px;
                cursor:pointer;
              }
              .h_add_cc{
                width:122px;
                height:21px;
                border-radius:20px;
                background:#e3f0ff;
                margin:20px 0 0 20px;
                font-size:12px;
                text-align:center;
                line-height:21px;
                cursor:pointer;
                display:none;
                i{
                  display:block;
                  width:23px;
                  height:20px;
                  background:url(../../assets/icon2015-1.png) -678px -305px no-repeat;
                  float:left;
                  margin:3px 0 0 20px;
                }
                span{
                  margin:0 0 0 -20px;
                  color:#f55;
                }
              }
              .h_add_cc:hover{
                i{
                  background:url(../../assets/icon2015-1.png) -678px -327px no-repeat;
                }
              }
            }
          }
        }
      }
      .h_item:hover{
        background:rgba(245,250,255,1);
        .h_info{
          .h_info_text{ 
            .h_info_pri{
              .to_detai{
                color:#fff;
                background:#49f;
              }
              .h_add_cc{
                display:block;
              }
            }
          }
        }
      }
    }
    .listSEO{
      width:1200px;
      height:50px;
      /*background:aqua;*/
      overflow:hidden;
      margin:30px 0 0 0;
      .seo{
        width:130px;
        margin:15px 0 0 0;
        padding:0 0 0 10px;
        i{
          display:block;
          width:11px;
          height:11px;
          background:url(../../assets/icon2015-1.png) -301px -121px no-repeat;
          float:right;
          margin:7px 0 0 3px;
        }
      }
    }
  }
  
}
.huangshan_foot{
  margin: 0 auto;
    position: absolute;
    bottom: 0;
  }
</style>
