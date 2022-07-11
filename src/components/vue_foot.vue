<template>
	<div class='footer'>
		<div class='line'></div>
		<div class='form'>
			<dl>
				<dt>加盟合作</dt>
				<dd v-for='item in lista'><a href="">{{item}}</a></dd>
			</dl>
			<dl>
				<dt>关于艺龙</dt>
				<dd v-for='items in listb'><a href="">{{items}}</a></dd>
			</dl>
			<dl>
				<dt>艺龙APP下载</dt>
				<dd><img src="../assets/6.png" alt="" /></dd>
			</dl>
			<dl>
				<dt>艺龙官方微信</dt>
				<dd><img src='../assets/7.png'></img></dd>
			</dl>
			<dl>
				<dt>艺龙官方小程序</dt>
				<dd><img src='../assets/8.png'></img></dd>
			</dl>
		</div>
		<div class='footb'>
			<span>&copy;2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved. </span>
			<a href=""> 京ICP证010011号<i class='anbei'></i>京公网安备11010502026059号</a>&nbsp;
			<a href="">经营执照</a>
		</div>
		<div class='cat'>
			<div class='cathead'>
				<a href="" class='catheada' title='SSL加密认证'></a>
				<a href="" class='catheadb' title='艺龙网通过PCI认证'></a>
				<a href="" class='catheadc' title='信赖商业计划'></a>
				<a href="" class='catheadd' title='可信用网站身份认证'></a>
				<a href="" class='catheade' title='诚信示范企业'></a>
				<a href="" class='catheadf' title='品牌官网认证'></a> 
			</div>
			
		</div>
	</div>
</template>
<style lang='scss' scope>
	*{
		list-style: none;
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
	.footer{
		width: 100%;
	}
	.line{
		width: 100%;
		height: 1px;
		background: #ccc;
	}
	.form{
		width: 1000px;
		margin: 0 auto;
		margin-top: 20px;
		display: flex;
		dl{
			flex:1;
			dt{
				color: #555;
				margin-bottom: 5px;
				font-size: 18px;
				border-left: 3px solid #5D96C7;
				padding-left: 5px;
			}
			dd{
				padding: 5px 0 0 10px;
				a{
					font-size: 12px;
					color: #000;
					transition:all 0.5s;
				}
				a:hover{
					margin-left: 5px;
					color: #f55;
				}
			}
		}
	}
	.footb{
		width: 1000px;
		margin: 0 auto;
		margin-top: 30px;
		text-align: center;
		color: #555;
		font-size: 12px;
		a{
			color: #000;
			.anbei{
				display: inline-block;
				width: 20px;
				height: 20px;
				background-image: url(../assets/anbei.png);
				margin: 0 3px -6px 3px;
			}
		}
	}
	.cat{
		width: 100%;
		text-align: center;
		margin-top: 20px;
		height: 37px;
		a{
			position: absolute;
			top: 0;
			transition:all 0.5s;
		}
		a:hover{
			margin-top: -5px;
		}
		.cathead{
			position: relative;
			width: 1000px;
			margin: 0 auto;
		}
		.catheada{
			display: inline-block;
			width: 80px;
			height: 37px;
			margin-right: -20px;
			background: url(../assets/icon201706.png?t=20170614) -328px -440px no-repeat;
    		background-image: url(../assets/icon201706.png?t=20170614) -328px -440px no-repeat;
    		left: 200px;
		}
		.catheadb{
			display: inline-block;
			width: 80px;
			height: 37px;
			background: url(../assets/icon201706.png?t=20170614) -310px -483px no-repeat;
    		background-image: url(../assets/icon201706.png?t=20170614) -310px -483px no-repeat;
    		left: 280px;
		}
		.catheadc{
			display: inline-block;
			width: 80px;
			height: 37px;
			padding-left: 10px;
			background: url(../assets/icon201706.png?t=20170614) -472px -440px no-repeat;
    		background-image: url(../assets/icon201706.png?t=20170614) -472px -440px no-repeat;
    		left: 370px;
		}
		.catheadd{
			display: inline-block;
			width: 80px;
			height: 37px;
			padding-left: 10px;
			background: url(../assets/icon201706.png?t=20170614) -570px -440px no-repeat;
    		background-image: url(../assets/icon201706.png?t=20170614) -570px -440px no-repeat;
    		left: 480px;
		}
		.catheade{
			display: inline-block;
			width: 80px;
			height: 37px;
			padding-left: 10px;
			background: url(../assets/icon201706.png?t=20170614) -660px -440px no-repeat;
    		background-image: url(../assets/icon201706.png?t=20170614) -660px -440px no-repeat;
    		left: 580px;
		}
		.catheadf{
			display: inline-block;
			width: 80px;
			height: 37px;
			padding-left: 10px;
			background: url(../assets/icon201706.png?t=20170614) -390px -482px no-repeat;
    		background-image: url(../assets/icon201706.png?t=20170614) -390px -482px no-repeat;
    		left: 680px;
		}
		a{
			/*text-align: center;*/
		}
	}
</style>
<script>
	export default {
  		name: 'v-foot',
  		data () {
    		return {
    			lista:['酒店加盟','开放平台','代理合作','广告服务','商家中心'],
    			listb:['酒店大全','国际酒店','校园招聘','联系我们']
    				
    			
    		}
  		}
	}
</script>