<template>
	<div class='box'>
		<div class='header'>
			<div class='header_left'>
				<a href="http://www.elong.com" title='艺龙旅行网'>
					<img src="../assets/1.png" alt="" />
				</a>
			</div>
			
			<div class='header_center'>
				<div class='center_div'>
					<span><a href="">积分商城</a></span>
					<span><a href="">礼品卡</a></span>
					<span><a href="">在线客服</a></span>
					<span class='center_span'>
						<a href="">English</a>
						<i></i>
					<ul class='center_ul'>
						<li></li>
						<li><a href="" title='简体版'>简体版</a></li>
						<li><a href="" title='繁体版'>繁体版</a></li>
					</ul>
					</span>
				</div>	
			</div>
			<div class='header_right'>
				<div class='right_divy'>
					<a href="">
						<img src="../assets/2.png" alt="" />
					</a>
					<div>
						<img src="../assets/4.png" alt="" />
					</div>
				</div>
				<div class='right_dive'>
					<a href="">
						<img src="../assets/com_icon01.gif" alt="" />
						<div>
							<p>手机版</p>
							<p>专享五折起</p>
						</div>
					</a>
					<div class='dive_div'>
						<img src="../assets/5.png" alt="" />
					</div>
				</div>
				<div class='right_divs'>
					<span><img src="../assets/3.png" alt="" /></span>
					<div>
						<p>国内：4009-333-333</p>
						<p>
							香港：852-8131-8883<br />&nbsp;&nbsp;&nbsp;852-8131-8883
						</p>
						<p>海外：86-10-6432-9999</p>
					</div>
				</div>
			</div>
		</div>


		<div class='head_router'>
			<div class='router_div'>
				<ul>
					<li v-for="items in $router.options.routes">
						<router-link :to='{path:items.path}'>{{items.text}}</router-link>
					</li>
				</ul>
				<p></p>
				<div>
					<span v-for='itemrem in $router.options.routes'>
						<router-link :to='{path:itemrem.path}'>{{itemrem.textrem}}</router-link>
					</span>
					
					<!-- <a href="">注册</a> -->
				</div>
			</div>

		</div>
		<!-- <div>
		<router-view></router-view>
	</div> -->
	</div>
</template>
<style lang='scss' scope>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	body::-webkit-scrollbar{
      display:none;
    }
	.box{
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
	.header{
		width: 1349px;
		height: 75px;
		display: flex;
		margin: 0 auto;
		background: #fff;
	}
	.header_left{
		flex:1;
	}
	.header_center{
		flex:2.5;
		position: relative;
		.center_div{
			position: absolute;
			right: 0;
			margin-top: 20px;
			span{
				padding-left: 10px;
			}
			span+span{
				border-left: 1px solid #999;
			}
			a{
				font-size: 12px;
				color: #999;
			}
			.center_span{
				position: relative;
				i{
					width: 0;
    				height:0;
    				border-width:5px;
    				border-style:solid;
    				border-color:#999 transparent transparent transparent;
    				float: right;
    				margin:10px 50px 0 1px;
    				transform-origin:50% 25%;
				}
				.center_ul{
					display: none;
					width: 60px;
					height: 77px;
					position: absolute;
					border:1px solid #ccc;
					right: -15px;
					top: 0;
					li{
						width: 100%;
						height: 25px;
						text-align: center;
						line-height: 25px;
						background: #fff;
					}
					li+li{
						border-top: 1px dashed #999;
					}
				}
				.center_ul>li:nth-child(1){
						opacity: 0;
					}
				.center_ul>li:hover a{
					color: red;
				}
			}
			.center_span:hover .center_ul{
				display: block;
			}	
		}
		.center_div>span>a:hover{
				color: red;
		}
	}
	.header_right{
		flex:3;
	}
	.header_right{
		position: relative;
		div{
			float: left;
		}
		.right_divy{
			img:nth-child(1){
			}
			div{
				position: absolute;
				top: 75px;
				left: 0;
				border-top: 1px solid #ccc;
				display: none;
				z-index: 1;
			}
		}
		.right_divy:hover div{
			display: block;
		}
		.right_dive{
			height: 100%;
			img{
				margin-top: 15px;
			}
			div{
				float:right;
				margin: 15px 20px 0 10px;
				font-size: 13px;
				color: #ff6a6a;
				p{
					padding: 2px 0;
				}
			}
			.dive_div{
				position: absolute;
				top: 45px;
				left: 170px;
				display: none;
				z-index: 1;
			}
		}
		.right_dive:hover .dive_div{
			display: block;
		}
		.right_divs div{
			display: none;
			width: 180px;
			height: 112px;
			background: #fff;
			border: 1px solid #ccc;
			position: absolute;
			right: 80px;
			font-size: 12px;
			color: #999;
			z-index: 1;
			p+p{
				border-top: 1px dashed #ccc;
			}
			p{
				padding: 8px 0 8px 10px;
			}
		}
		.right_divs:hover div{
			display: block;
		}
	}

	.head_router{
		overflow: hidden;
		width: 100%;
		height: 41px;
		background: #2064c8;
		.router_div{
			width: 1200px;
			height: 100%;
			margin: 0 auto;
			display: flex;
			text-align: center;
			line-height: 40px;
			ul{
				flex:4;
				li{
					float: left;
					padding: 0 12px;
					border-right: 1px solid #3774ce;
					a{
						color: #fff;
						font-size: 13px;
					}
				}
				li:hover{
					background: #0053ac;
				}
			}
			p{
				flex:4;
			}
			div{
				flex:1;
				background: #003679;
				a{
					color: #fff;
					font-size: 14px;
				}
				a:hover{
					color: #fff544;
				}
			}
		}
	}
</style>
<script>
export default {
  	name: 'v-head',
  	data () {
    	return {

    	}
  	}
}
</script>