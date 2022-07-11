<template>
	<div class='footer_router'>
		<ul class='router_t' v-for='item in $router.options.routes'>
			<li v-for='items in item.children' @click='change(items.index)' :class="{router_li:number==items.index}">
				<router-link :to="{path:item.path+'/'+items.path}">{{items.list}}</router-link>
			</li>
		</ul>
	</div>
</template>
<style lang='scss' scope>
	*{
		list-style: none;
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
	.footer_router{
		margin-top: 20px;
		width: 100%;
		height: 40px;
		background: #7c8fa2;
		.router_t{
			width:1000px;
			height: 40px;
			margin: 0 auto;
			display: flex;
			li{
				flex:1;
				text-align: center;
				line-height: 40px;
				font-size: 12px;
				a{
					color: #fff;
				}
			}
			li:hover{
				background: #8da1b5;
			}
			.router_li{
				background:rgba(192,210,228,1);
				a{
					color: #000;
				}
			}
		}
	}
</style>
<script>
	export default{
		name:'v-footer',
		data(){
			return{
				number:0
				// list:['酒店预订','机票查询','酒店团购','热门城市','合作伙伴','常见酒店']
			}
		},
		methods:{
        	change(index){
        		this.number=index;
        	}
        }
	}
</script>