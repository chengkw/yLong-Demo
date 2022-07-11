<style lang='scss' scope>
*{
	list-style: none;
	margin: 0;
	padding: 0;
	text-decoration: none;
}
body{
	background: #e8eff6;
}
body::-webkit-scrollbar{
    display:none;
}
.enrollDiv{
	width: 100%;
	height: 100%;
	.enrollHead{
		width: 1000px;
		height: 50px;
		margin: 0 auto;
		padding: 25px 0;
		/*background: red;*/
		div{
			width: 113px;
			height: 48px;
			background: url(../../assets/Dlimg/myelong_login.png) 0 0 no-repeat;
			background-image: url(../../assets/Dlimg/myelong_login.png) 0 0 no-repeat;
		}
	}
	.enrollBody{
		width: 940px;
		/*height: 619px;*/
		padding: 30px;
		margin: 0 auto;
		background: #fff;
		background-color: #fff;
		h1{
			width: 100%;
			height: 38px;
			/*background: aqua;*/
			font-size: 24px;
			line-height: 38px;
			span{
				margin:0 20px 0 40px;
				font-size: 14px;
				color: #555;
				font-weight: normal;
			}
			a{
				font-size: 14px;
				font-weight: normal;
				color: #36c;
			}
			a:hover{
				color: #f60;
			}
		}
		.bankUl{
			display: none;
			width: 100%;
			/*background: aqua;*/
			li{
				padding-top: 15px;
				p{
					display: inline-block;
					width: 135px;
					height: 30px;
					text-align: right;
					font-size: 14px;
					color: #555;
					span{
						color: #f60;
					}
				}
				input{
					width: 250px;
					height: 26px;
				}
				select{
					width: 250px;
					height: 30px;
				}
			}
			li:nth-child(3){
				padding-bottom: 10px;
			}
		}
		.enrollCut_p{
			width: 100%;
			margin-top: 40px;
			/*background: aqua;*/
			font-size: 12px;
			input{
				margin:0 3px 0 130px;
				vertical-align: middle;
			}
		}
		.enrollUl_one{
			width: 940px;
			height: 333px;
			padding-top: 20px;
			border-top: 1px dashed #ccc;
			/*background: #ccc;*/
			li{
				width: 100%;
				/*background: pink;*/
				margin-bottom: 20px;
				p{
					width: 135px;
					height: 30px;
					line-height: 30px;
					text-align: right;
					color: #555;
					font-size: 14px;
					display: inline-block;
					span{
						color: #f60;
					}
				}
				input{
					height: 16px;
					padding: 6px 0;
					border: 1px solid #bbb;
				}
				select{
					height: 30px;
				}
				.ranDom_one{
					margin: 0 10px 0 10px;
				}
				.cut_text{
					color: #36c;
					font-size: 12px;
				}
				.cut_text:hover{
					color: #f60;
				}
				.ranDom_button{
					width: 120px;
					height: 30px;
					background: #37D;
					color: #fff;
					border: 0;
					border-radius: 5px;
					margin-left: 10px;
					font-size: 14px;
				}
				.ranDom_button:hover{
					background: #114387;
				}
				.enrollLi_oneSpan{
					display: none;
				}
			}
			.enrollLi_one{
				.enrollLi_oneSpan{
					font-size: 12px;
					color: #bbb;	
				}
			}
			.enrollLi_three{
				.enrollLi_threeSpan{
					font-size: 12px;
					color: #bbb;
					display: none;
				}
			}
			.enrollLi_four{
				.enrollLi_fourSpan{
					font-size: 12px;
					color: red;
					display: none;
				}
			}
			.enrollLi_five{
				.enrollLi_fiveSpan{
					font-size: 12px;
					color: #bbb;
					display: none;
					margin-left: 10px;
				}
			}
			.enrollLi_six{
				.enrollLi_sixSpan{
					font-size: 12px;
					color: #bbb;
					display: none;
					margin-left: 10px;
				}
			}
			.enrollLi_seven{
				font-size: 12px;
				input{
					vertical-align: middle;
					margin-left: 135px;
				}
			}
		}
		.enrollHabit{
			width: 100%;
			/*background: #ccc;*/
			a{
				display: inline-block;
				height: 29px;
				line-height: 29px;
				padding: 0 10px;
				background: red;
				color: #555;
				font-size: 14px;
				background: #f8f8f8;
				border: 1px solid #d9d9d9;
				border-bottom: 1px solid #f8f8f8;
				margin-left: 135px;
			}
			ul{
				display: none;
				width: 530px;
				padding: 12px;
				background: #f8f8f8;
				margin-left: 135px;
				margin-top: -1px;
				font-size: 12px;
				border: 1px solid #d9d9d9;
				li{
					height: 30px;
					line-height: 30px;
					input{
						vertical-align: middle;
					}
				}
				li:nth-child(1){
					color: #999;
					span:nth-child(1){
						padding-right: 50px;
						color: #000;
					}
				}
				li:nth-child(2){
					span{
						padding-right: 50px;
					}
				}
				li:nth-child(3){
					span{
						padding-right: 15px;
					}
				}
				li:nth-child(4){
					span{
						padding-right: 50px;
					}
				}
				li:nth-child(5){
					span{
						padding-right: 15px;
					}
				}
			}
		}
		.clauseDiv{
			width: 805px;
			padding: 20px 0 10px 0;
			font-size: 12px;
			/*background: #ccc;*/
			margin-left: 135px;
			input{
				vertical-align: middle;
				margin-right: 2px;
			}
			a{
				color: #36c;
				margin: 0 5px 0 5px;
			}
			a:hover{
				color: #f60;
			}
		}
		.clauseDiv_div{
			width: 530px;
    		border: 1px solid #d9d9d9;
    		display: none;
    		padding: 12px;
    		height: 120px;
    		overflow-y: scroll;
    		font-size: 12px;
    		color: #555;
    		margin-left: 135px;
    		p{
    			width: 513px;
    			padding-bottom: 3px;
    		}
		}
		.loginDiv{
			button{
				width: 200px;
				height: 40px;
				background: #ff8800;
				border: 0;
				border-radius: 5px;
				margin:20px 0 0 135px;
				font-size: 18px;
				color: #fff;
			}
			button:hover{
				background: #f60;
			}
		}
	}
}
</style>
<template>
	<div class='enrollDiv'>
		<div class='enrollHead'><div></div></div>
		<div class='enrollBody'>
			<h1>注册新会员<span>已有艺龙账号,</span><a href="">直接登录</a></h1>
			<p class='enrollCut_p'><input type="checkbox" @click='bankUL' />我有艺龙合作卡</p>
			<ul class='bankUl'>
				<li>
					<p><span>*</span>卡类型：</p>
					<select name="" id="">
						<option v-for='itembank in bank_name' value="银行卡类">{{itembank}}</option>
					</select>
				</li>
				<li>
					<p><span>*</span>卡名称：</p>
					<select name="" id=""></select>
				</li>
				<li>
					<p>卡号：</p>
					<input type="text" />
				</li>
			</ul>
			<ul class='enrollUl_one'>
				<li class='enrollLi_one'>
					<p><span>*</span>手机：</p>
					<select name="" id="">
						<option value="中国大陆+86">中国大陆+(86)</option>
						<option value="">中国香港+(852)</option>
						<option value="">中国澳门+(853)</option>
						<option value="">中国台湾+(886)</option>
					</select>
					<input type="text" @focus='focusOne' @blur='blurOne' />
					<span class='enrollLi_oneSpan'>请正确填写您的手机号码，以便及时确定预订信息</span>
				</li>
				<li class='enrollLi_two'>
					<p><span>*</span>输入验证码：</p><input type="text" /><span class='ranDom_one'>1314</span><a href="#" class='cut_text' @click='cut_html(index)'>看不清，换一张</a>
				</li>
				<li class='enrollLi_three'>
					<p><span>*</span>短信验证码：</p><input type="text" @focus='focusThree' @blur='blurThree' /><button class='ranDom_button'>获取短信验证码</button>
					<span class='enrollLi_threeSpan'>请填写接收到的短信验证码</span>
				</li>
				<li class='enrollLi_four'>
					<p><span>*</span>邮箱：</p><input type="text"  @blur='blurFour' /><span class='enrollLi_fourSpan'>邮箱输入错误，请核对后重新输入</span>
				</li>
				<li class='enrollLi_five'>
					<p><span>*</span>密码：</p><input type="text" @focus='focusFive' @blur='blurFive' /><span class='enrollLi_fiveSpan'>6-30个字符或数字组成</span>
				</li>
				<li class='enrollLi_six'>
					<p><span>*</span>再次输入密码：</p><input type="text" @focus='focusSix' @blur='blurSix' /><span class='enrollLi_sixSpan'>请再次输入密码</span>
				</li>
				<li class='enrollLi_seven'><input type="checkbox" /><span>同意接收艺龙发送的促销信息。</span></li>
			</ul>
			<div class='enrollHabit'>
				<a href="##" @click='habitCut'>填写出行习惯</a>
				<ul>
					<li>
						<span>您常住的城市:</span>
						<input type="text" />
						<span>(支持中文/拼音)</span>
					</li>
					<li>
						<span>您的出差频率:</span>
						<input type="radio" name='evection' />基本不出差
						<input type="radio" name='evection' />一月一次
						<input type="radio" name='evection' />一季度一次
						<input type="radio" name='evection' />一年一次
					</li>
					<li>
						<span>出差时入住酒店价位:</span>
						<input type="radio" name='hotel_evec' />150以下
						<input type="radio" name='hotel_evec' />150-300元
						<input type="radio" name='hotel_evec' />300-600元
						<input type="radio" name='hotel_evec' />600以上
					</li>
					<li>
						<span>您的旅游频率:</span>
						<input type="radio" name='travel' />1年1-2次
						<input type="radio" name='travel' />1季度1次
						<input type="radio" name='travel' />1月至少1次
					</li>
					<li>
						<span>旅游时入住酒店价位:</span>
						<input type="radio" name='hotel_tra' />150以下
						<input type="radio" name='hotel_tra' />150-300元
						<input type="radio" name='hotel_tra' />300-600元
						<input type="radio" name='hotel_tra' />600以上
					</li>
				</ul>
			</div>
			<div class='clauseDiv'>
				<input type="checkbox" /><span>同意艺龙旅行网服务条款</span><a href="##" @click='clauseCut'>查看条款</a>请认真阅读相关条款并勾选
			</div>
			<div class='clauseDiv_div'>
				<p v-for='itemP in pList'>{{itemP}}</p>
			</div>
			<div class='loginDiv'><button>同意条款并注册</button></div>
		</div>
	</div>
</template>
<script>
	export default {
  		name: 'enroll',
  		data () {
    		return {
    			bank_name:['银行卡类','酒店合作类','无线通讯类','购物消费类','航空类','其他','所有联名卡[按首字拼音排序]'],
    			pList:[
    			'《艺龙旅行网服务条款》',
    			'1．艺龙旅行网服务条款的确认','艺龙旅行网的所有权与运作权归北京艺龙信息技术有限公司（以下简称"艺龙"）所有。本服务条款具有法律约束力。一旦您点选"注册"并通过注册程序，即表示您自愿接受本协议之所有条款，并已成为艺龙旅行网的注册会员。',
    			'用户在享用艺龙网络会员服务的同时，同意接受艺龙网络会员服务提供的各类信息服务。',
    			'2．服务内容',
    			'2.1艺龙旅行网服务的具体内容由艺龙根据实际情况提供，艺龙对其所提供之服务拥有最终解释权。',
    			'2.2艺龙在艺龙旅行网上向其会员提供相关网络服务，与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均由会员自行负担。',
    			'3．会员帐号及密码',
    			'3.1用户可通过在艺龙旅行网网站系统或移动客户端系统完成注册程序并通过身份认证成为会员。如会员的账号信息（包括但不限于用户名、头像、简介、个性签名等）含有不雅、不当、非法、令人反感的词汇或图像或存在以下情形的，艺龙可不予注册，并保留对已注册会员进行注销的权利：',
    			'3.2冒用党和国家领导人、社会名人、国家机构或其他社会机构的真实姓名、名称、字号、艺名、笔名注册的；',
    			'3.3包含不文明、不健康内容，或包含歧视、侮辱、猥亵类词语的；',
    			'3.4注册易产生歧义、引起他人误解或其他不符合法律规定的账号的',
    			'3.5您注册会员成功后，将得到一个帐号和密码。您应妥善保管该帐号及密码，并对以该帐号进行的所有活动及事件负法律责任。因黑客行为或会员保管疏忽致使帐号、密码被他人非法使用的，艺龙不承担任何责任。如您发现任何非法使用会员帐号或安全漏洞的情况，请立即与艺龙联系。',
    			'4．会员权责',
    			'4.1会员有权按照艺龙规定的程序和要求使用艺龙向会员提供的各项网络服务，如果会员对该服务有异议，可以与艺龙联系以便得到及时解决。',
    			'4.2用户在申请使用艺龙旅行网网络服务时，必须向艺龙旅行网提供准确的个人资料，如个人资料有任何变动，必须及时更新。',
    			'4.3会员须同意接受艺龙旅行网通过电子邮件或其他方式向会员发送促销或其他相关商业信息。',
    			'4.4会员同意如果其参加艺龙旅行网举办的各种促销、返现活动，即自愿遵守活动规则并接受活动相关费用标准。',
    			'4.5会员在艺龙旅行网的网页上发布信息或者利用艺龙旅行网的服务时必须符合国家的法律法规以及国际法的有关规定。',
    			'4.6对于会员通过艺龙旅行网网上消息平台（包括但不限于论坛、BBS、评论）上传到艺龙旅行网网站上可公开获取区域的任何内容，会员同意授予艺龙在全世界范围内享有完全的、免费的、永久性的、不可撤销的、非独家的权利，以及再许可第三方的权利，以使用、复制、修改、改编、出版、翻译、据以创作衍生作品、传播、表演和展示此等内容（整体或部分），和/或将此等内容编入当前已知的或以后开发的其他任何形式的作品、媒体或技术中。',
    			'4.7会员承诺不会在艺龙旅行网的消息平台（包括但不限于论坛、BBS、评论）发布或在其账号注册信息（包括但不限于用户名、头像、简介、个性签名等）包含如下信息：',
    			'1.反对宪法所确定的基本原则或违反宪法或法律法规规定的；',
    			'2.危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；',
    			'3.损害国家荣誉和利益的，损害公共利益的；',
    			'4.煽动民族仇恨、民族歧视，破坏民族团结的；',
    			'5.破坏国家宗教政策，宣扬邪教和封建迷信的；',
    			'6.散布谣言，扰乱社会秩序，破坏社会稳定的；',
    			'7.散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；',
    			'8.侮辱或者诽谤他人，侵害他人合法权益的；',
    			'9.含有法律、行政法规禁止的其他内容的。',
    			'4.8会员单独为其发布在艺龙旅行网上信息承担责任。会员若在艺龙旅行网散布和传播违法信息，网络会员服务的系统记录有可能作为会员违法之证据。',
    			'4.9会员不得利用本站的服务从事以下活动：',
    			'1.未经允许，进入计算机信息网络或者使用计算机信息网络资源；',
    			'2.未经允许，对计算机信息网络功能进行删除、修改或者增加；',
    			'3.未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加；',
    			'4.故意制作、传播计算机病毒等破坏性程序；',
    			'5.其他危害计算机信息网络安全的行为。',
    			'4.10会员不得以任何方式干扰本站的服务。',
    			'4.11会员承诺遵守本站的所有其他规定和程序。',
    			'4.12如果会员违反上述规定，艺龙有权要求其改正或直接采取一切必要措施（包括但不限于更改或删除会员发布的信息、中断或终止会员使用网络的权利等），以减轻会员不当行为所造成的影响。',
    			'4.13会员应承诺遵守法律法规、拥挤社会主义制度、不损害国家利益、公民合法权益和公共秩序、社会道德风尚，并确保其信息的真实性。',
    			'5．服务条款的修改',
    			'艺龙有权在必要时修改本服务条款，如服务条款发生变动，艺龙将会在用户进入下一步使用前或相关服务内容的页面提示修改内容。会员有权接受或拒绝，如您不同意修改，可以主动选择取消会员资格；如您选择继续使用艺龙服务，则视为同意接受所有服务条款的变动修改和限制。',
    			'6．服务内容的修改或中断',
    			'鉴于网络服务的特殊性，艺龙保留随时修改或中断其部分或全部网络服务的权利，并无需通知会员或为此对会员及任何第三方负责。',
    			'7．会员隐私保护',
    			'艺龙尊重会员的隐私权，不会公开、编辑或泄露任何有关会员的个人资料以及会员在使用网络服务时存储在艺龙旅行网的非公开内容，但以下情况除外：',
    			'1.事先获得会员的明确授权；',
    			'2.遵守法律规定或艺龙旅行网合法服务程序；',
    			'3.按照相关政府主管部门的合理要求；',
    			'4.维护社会公众利益；',
    			'5.维护艺龙的合法权益；',
    			'6.符合其他合法要求。',
    			'8．中断或终止服务',
    			'如发生下列任何一种情形，艺龙有权随时中断或终止向会员提供本协议项下的网络服务，而无需对会员或任何第三方承担任何责任。',
    			'1.会员向艺龙提供的个人资料不真实。',
    			'2.会员违反本协议的规则或不履行其所承担的义务。',
    			'除此之外，会员可随时根据需要通知艺龙终止向该会员提供服务，会员服务终止后，会员使用服务的权利同时终止。自会员服务终止之时起，艺龙旅行网不再对该会员承担任何责任。',
    			'9.知识产权及其他权益',
    			'9.1艺龙旅行网专属权利',
    			'9.1.1除明显归属于合作伙伴、第三方所有的信息资料外，艺龙旅行网拥有网络服务内所有内容，包括但不限于文字、图片、图形、表格、动画、程序、软件、音频和视频资料等单独或组合的版权。任何被授权的浏览、复制、打印和传播属于本网站内的内容必须符合以下条件：',
    			'1)所有的资料和图像均以获得信息为目的；',
				'2)所有的资料和图像均不得用于商业目的；',
				'3)所有的资料和图像及其任何部分都必须包括此版权声明。',
				'未经艺龙旅行网许可，任何人不得擅自以非法的方式复制、传播、展示、镜像、上载、下载进行使用；否则，艺龙旅行网将依法追究法律责任。',
				'9.1.2艺龙为提供网络服务而自行开发的软件，包括不限于无线客户端应用等，拥有完整的知识产权。艺龙在此授予您个人非独家、不可转让、可撤销的，并通过在一部拥有所有权或使用权的手机或计算机上使用该软件的权利，且仅限于个人非商业性使用之合法目的，您应当保证合法使用该等软件，任何用户不得对该等软件进行如下违法行为：',
				'1)开展反向工程、反向编译或反汇编，或以其他方式发现其原始编码，以及实施任何涉嫌侵害著作权等其他知识产权的行为；',
				'2)以出租、租赁、销售、转授权、分配或其他任何方式向第三方转让该等软件或利用该等软件为任何第三方提供相似服务；',
				'3)任何复制该等软件的行为；',
				'4)以移除、规避、破坏、损害或其他任何方式干扰该等软件的安全功能；',
				'5)以不正当手段取消该等软件上权利声明或权利通知的；',
				'6)其他违反法律规定的行为。',
				'艺龙有权对该等软件进行定期或不定期的修订、扩展、升级等更新措施，而无需提前通知用户，但您有权选择是否使用更新后的软件。',
				'9.1.3以下文字、图形及艺龙旅行网服务LOGO等，均为艺龙旅行网及其关联公司的注册商标以及受法律保护的商号；未经授权的任何形式使用，均为侵权，将被依法追究其责任：',
				'“eLong.com”，“艺龙”，“艺龙旅行网”，“e龍”，“e龙”等。',
				'9.2知识产权权属',
				'9.2.1您应对通过艺龙旅行网或艺龙移动客户端上传的可公开浏览区域中任何内容的真实性、合法性负责，保证对该等内容拥有完整的、无瑕疵的所有权和知识产权，或拥有完整的授权，并不存在任何侵犯第三方合法权益（包括但不限于著作权、肖像权、商标权、专利权、企业名称权、商号权、商业秘密、个人隐私、合同权利等权利）的情形。因您上传或发布该等内容而给艺龙或任何第三方造成的损害和相关后果，均由您全部承担，艺龙旅行网对此不承担任何责任；且艺龙旅行网有义务配合第三方、司法机关或行政机关完成相关的取证，并根据法律、主管部门或司法部门的要求将用户注册信息给予披露。',
				'9.2.2对于您通过互联网或移动终端等设备访问艺龙旅行网及其关联公司网站时发表的任何形式的文字、图片等信息及内容：',
				'1)您在此同意将您在任何时间段在本站发表的任何形式的信息的著作财产权，包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权、据以创作衍生作品权以及其他除必须由著作权人享有的权利以外的可转让权利，无偿独家转让给艺龙及其关联公司所有。',
				'2)您在此同意并授予艺龙及其关联公司独家的、全球通用的、永久的、免费的许可使用权利(并有权在多个层面对该权利进行再授权)。',
				'3)您在此同意并授予艺龙及其关联公司有权(全部或部份地)使用、复制、修订、改写、发布、翻译、分发、执行和展示您的全部资料数据（包括但不限于注册资料、交易行为数据及全部展示于艺龙旅行平台的各类信息）或制作其派生作品，并以现在已知或日后开发的任何形式、媒体或技术，将上述信息纳入艺龙旅行作品内。',
				'4)您同意并许可艺龙就任何主体侵权而单独提起诉讼，并获得全部赔偿。',
				'5)您保证不将已发表于本站的信息资料，以任何形式发布或授权其它网站（及媒体）使用；同时，您承诺配合艺龙为保证您发表的信息资料的独家性而进行的任何合法的维权行为。',
				'6）本协议已经构成《著作权法》第二十五条所规定的书面协议，其效力及于用户在艺龙旅行网发布的任何受著作权法保护的作品内容，无论该内容形成于本协议签订前还是本协议签订后。',
				'9.2.3艺龙为提供网络服务而使用的任何软件（包括但不限于软件中的任何文字、图形、音频、视频资料及其辅助资料）的一切权利属于该软件的著作权人，未经该著作权人同意，任何人不得对该软件进行反向工程、反向编译或反汇编。。',
				'9.2.4若您浏览、复制、打印和传播艺龙旅行网其他用户上传到艺龙旅行网站的内容，应保证仅用于个人欣赏之目的，不得用于商业目的，不得侵犯权利人的合法权益以及艺龙旅行网的合法权益和商业利益。',
				'9.3若您认为您的知识产权或其他合法权益被侵犯，请向艺龙提供以下资料：',
				'1)对涉嫌侵权内容拥有知识产权或其他合法权益的权属证明；',
				'2)权利人具体的主体资质和联络信息，包括个人的姓名、身份证或护照复印件、单位的营业执照复印件或者其他资质证明复印件、通信地址及电话号码等；',
				'3)涉嫌侵权内容在本网站上的位置；',
				'4)对侵权情况的详细描述；',
				'5)请在权利通知中加入如下关于通知内容真实性的声明：“我保证，本通知中所述信息是充分、真实、准确的，如果本权利通知内容不完全属实，本人将承担由此产生的一切法律责任。”',
				'6)在签字或加盖公章后，请将上述资料发往以下地址：北京市朝阳区酒仙桥路10号星科大厦C座三层艺龙法务部（邮编100015），也可发往以下邮箱：legal@corp.elong.com。',
				'9.4艺龙及其关联公司是艺龙旅行网的制作者，拥有此网站内容及资源的全部著作权；未经艺龙的明确书面许可，任何第三方不得为任何非私人或商业目的获取或使用本网站的任何部分或通过本网站可直接或间接获得的任何内容、服务或资料。任何第三方违反本协议的规定以任何方式，和/或以任何文字对本网站的任何部分进行发表、复制、转载、更改、引用、链接、下载或以其他方式进行使用，或向任何其它第三方提供获取本网站任何内容的渠道，则对本网站的使用权将立即终止，且任何第三方必须按照艺龙的要求，归还或销毁使用本网站任何部分的内容所创建的资料的任何副本。同时，艺龙保留进一步追究其法律责任的权利。',
				'10．免责声明',
				'10.1艺龙对任何因会员不正当或非法使用服务、在网上进行交易、在账户信息中散播非法或不良信息、或会员传送信息变动而产生的直接、间接、偶然、特殊及后续的损害不承担责任。',
				'10.2艺龙对任何他人的威胁性的、诽谤性的、淫秽的、令人反感的或非法的内容或行为或对他人权利的侵犯（包括知识产权）不承担责任；并对任何第三方通过服务发送或在服务中包含的任何内容不承担责任。',
				'10.3会员明确同意承担因其提供个人信息不真实、不准确而对艺龙或艺龙网络服务造成的一切不利后果。会员明确同意其使用艺龙旅行网服务所存在的风险以及使用艺龙网络服务产生的一切后果由其自己承担。',
				'10.4对于因不可抗力或艺龙旅行网不能控制的原因造成的网络服务中断或其它缺陷，艺龙旅行网不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。',
				'10.5艺龙不对所提供之网络服务做任何类型之担保，包括但不限于：',
				'1.网络服务一定能满足会员要求；',
				'2.网络服务不会中断；',
				'3.网络服务的及时性、安全性、准确性。',
				'但是艺龙对不违反规定的特定目的担保不作限制。',
				'11．赔偿',
				'因会员对本服务之使用而导致艺龙遭受任何来自第三方之纠纷、诉讼及索赔要求，会员同意向艺龙及其关联企业、职员赔偿相应损失（包括合理的律师费），并尽力使之免受损害。',
				'12．通告',
				'所有发给会员的通告都可以通过重要页面的公告、电子邮件以及常规信件的形式传送。',
				'13．法律',
				'艺龙服务条款之效力、解释、执行均适用中华人民共和国法律。如发生争议，应提交至北京市朝阳区人民法院管辖。',
				'14．其他规定',
				'本服务条款中的标题仅为方便而设，在解释本服务条款时应被忽略。'
    			]
    		}
  		},
  		methods:{
  			cut_html:function(){
  				let ranDomOne=document.getElementsByClassName('ranDom_one')[0]
  				ranDomOne.innerHTML=Math.floor(Math.random()*10000)
  			},
  			bankUL:function(){
  				let bankUl=document.getElementsByClassName('bankUl')[0]
  				if(bankUl.style.display=='block'){
  					bankUl.style.display='none'
  				}else{
  					bankUl.style.display='block'
  				}
  			},
  			focusOne:function(){
  				let oneSpan=document.getElementsByClassName('enrollLi_oneSpan')[0]
  				oneSpan.style.display='inline-block'
  			},
  			blurOne:function(){
  				let oneSpan=document.getElementsByClassName('enrollLi_oneSpan')[0]
  				let patter=/^1[3578]\d{9}$/;
  				let oneInput=document.getElementsByClassName('enrollLi_one')[0].getElementsByTagName('input')[0]
  				if(oneInput.value==''){
  					oneSpan.style.display='none'
  					oneSpan.innerHTML='请正确填写您的手机号码，以便及时确定预订信息'
  					oneSpan.style.color='#bbb'
  				}else if(patter.test(oneInput.value)==false){
  					oneSpan.innerHTML='请输入正确的手机号'
  					oneSpan.style.color='red'
  				}else if(patter.test(oneInput.value)==true){
  					oneSpan.style.display='none'
  				}else{
  					oneSpan.style.display='inline-block'
  				}
  			},
  			focusThree:function(){
  				let threeSpan=document.getElementsByClassName('enrollLi_threeSpan')[0]
  				threeSpan.style.display='inline-block'
  			},
  			blurThree:function(){
  				let threeSpan=document.getElementsByClassName('enrollLi_threeSpan')[0]
  				threeSpan.style.display='none'
  			},
  			blurFour:function(){
  				let fourSpan=document.getElementsByClassName('enrollLi_fourSpan')[0]
  				let fourInput=document.getElementsByClassName('enrollLi_four')[0].getElementsByTagName('input')[0]
  				let patter_four=/^[1-9][0-9]{5,10}@qq.com/;
  				if(fourInput.value==''){
  					fourSpan.style.display='none'
  				}else if(patter_four.test(fourInput.value)==false){
  					fourSpan.style.display='inline-block'
  				}else{
  					fourSpan.style.display='none'
  				}
  				
  			},
  			focusFive:function(){
  				let fiveSpan=document.getElementsByClassName('enrollLi_fiveSpan')[0]
  				fiveSpan.style.display='inline-block'
  			},
  			blurFive:function(){
  				let fiveSpan=document.getElementsByClassName('enrollLi_fiveSpan')[0]
  				fiveSpan.style.display='none'
  			},
  			focusSix:function(){
  				let sixSpan=document.getElementsByClassName('enrollLi_sixSpan')[0]
  				let sixInput=document.getElementsByClassName('enrollLi_six')[0].getElementsByTagName('input')[0]
  				let fiveInput=document.getElementsByClassName('enrollLi_five')[0].getElementsByTagName('input')[0]
  				if(sixInput.value==fiveInput.value){
  					sixSpan.style.display='none'
  				}else{
  					sixSpan.style.display='inline-block'
  				}
  				
  			},
  			blurSix:function(){
  				let sixSpan=document.getElementsByClassName('enrollLi_sixSpan')[0]
  				let sixInput=document.getElementsByClassName('enrollLi_six')[0].getElementsByTagName('input')[0]
  				let fiveInput=document.getElementsByClassName('enrollLi_five')[0].getElementsByTagName('input')[0]
  				if(sixInput.value=='' || sixInput.value==fiveInput.value){
  					sixSpan.innerHTML='请再次输入密码'
  					sixSpan.style.color='#bbb'
  					sixSpan.style.display='none'
  				}else if(sixInput.value!=fiveInput.value){
  					sixSpan.innerHTML='两次密码输入不一致，请重新输入'
  					sixSpan.style.color='red'
  					sixSpan.style.display='inline-block'
  				}else if(sixInput.value==fiveInput.value){
  					sixSpan.style.display='none'
  				}else{
  					sixSpan.style.display='inline-block'
  				}
  			},
  			habitCut:function(){
  				let habitUl=document.getElementsByClassName('enrollHabit')[0].getElementsByTagName('ul')[0]
  				if(habitUl.style.display=='block'){
  					habitUl.style.display='none'
  				}else{
  					habitUl.style.display='block'
  				}
  			},
  			clauseCut:function(){
  				let clauseDiv_div=document.getElementsByClassName('clauseDiv_div')[0]
  				if(clauseDiv_div.style.display=='block'){
  					clauseDiv_div.style.display='none'
  				}else{
  					clauseDiv_div.style.display='block'
  				}
  			}
  		}
  	}
</script>