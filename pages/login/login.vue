<template>
	<view class="login_massage">
		<view class="box_all_bg">
			<view class="box_bg">
			</view>
		</view>
		<view class="register_box">
			<view class="register_box_title">
				登录
			</view>
			<view class="choose_country">
				<view class="choose_country_left">
						<up-image :show-loading="true" src="https://www.p2pah.com/static/p2pah/images/flags/ca.svg" width="20px" height="20px" radius='100px' @click="click"></up-image>
					<view class="num">
						+1
					</view>
					<up-icon name="arrow-down" size="18"></up-icon>
				</view>
				<view class="choose_country_right">
					 <up-input
					 style="width:280px"
					    placeholder="电子邮件或手机号码"
					    border="surround"
					    v-model="value"
					    @change="change"
					  ></up-input>
					   
				</view>
				
				
			</view>
			<view>
				<up-input
				   placeholder="请输入密码"
				   border="surround"
				   v-model="value"
				   @change="change"
				 ></up-input>
			</view>
			<view class="user_agreement">
				<up-checkbox
				     :customStyle="{marginBottom: '8px'}"
				     label="同意用户协议与隐私条款"
										labelSize="12px"
				     name="agree"
				     usedAlone
				     v-model:checked="aloneChecked"
				 >
				 </up-checkbox>
				 <text @click="goRetrieve">
					 忘记密码？
				 </text>
			</view>
			<view class="btn_box">
				  
				<up-button class="btn" text="稍后"></up-button>
				<up-button type="error" class="btn" text="登录"></up-button>
			</view>
			
			<view class="choose_login_box">
				<view class="choose_login">
					<!-- <view class="line"></view> -->
					<text>——————————— 或 ———————————</text>
					<!-- <view class="line"></view> -->
				</view>
				<text>
					用你的社交账号登录
				</text>
				<view class="logo_box">
					<up-image v-for="item,i in 6" class="logo_box_img" :show-loading="true" src="https://www.p2pah.com/static/p2pah/images/flags/ca.svg" width="30px" height="30px" radius='100px'></up-image>
				</view>
				<text style="font-size: 14px;">我们不会在没有事先询问的情况下向你们的任何账户发布消息</text>
			</view>
			<view class="line">
				
			</view>
			<view class="login_account">
				需要一个账户吗？ <text @click='goRegister'>注册</text>
			</view>
		</view>
		<view class="choose_country_vue">
			<chooseCountryVue></chooseCountryVue>
		</view>
		
		<testVue ref="test_vue"></testVue>
		<view class="bottom_nav_vue">
			<bottomNavVue></bottomNavVue>
		</view>
		
	</view>
</template>

<script>
	import chooseCountryVue from '../globalComponents/chooseCountry.vue';
	import testVue from './components/test.vue'; 
	import bottomNavVue from '../globalComponents/bottomNav.vue';
	export default{
		components:{
			chooseCountryVue,
			testVue,
			bottomNavVue
		},
		data(){
			return{
				value:'',
				aloneChecked:false,
			}
		},
		methods:{
		 change(e){
		  console.log('change', e);
		},
		openTest(){
			this.$nextTick(() => {
			                this.$refs['test_vue']?.open()
			            })
		},
		goRegister(){
			uni.navigateTo({
				url: '/pages/login/register'
			});
		},
		goRetrieve(){
			uni.navigateTo({
				url: '/pages/login/retrieve'
			});
		}
		
		}
	}
</script>

<style scoped lang="scss">
	.login_massage{
		background-color: #f5f5f5;
	}
	.box_all_bg{
		width: 100%;
		height: 300px;
		overflow: hidden;
		position: relative;
	}
	.box_bg{
		position: absolute;	
		width: 110%;
		height: 500px;
		border-radius:40%;
		background-color: rgb(29,93,221);
		bottom: 10%;
		left:-5%;
	}
	.register_box{
		background-color: white;
			position: relative;
			width: 500px;
			top: -160px;
			left: calc(50% - 500px/2);
			border-radius: 5px;
			padding: 40px;
			box-sizing: border-box;
			text-align: center;
			color: #000000;
			box-shadow: 2px 2px 5px 0 rgba(245, 245, 240, 0.5);
			.register_box_title{
				font-size: 22px;
				font-weight: 500;
				margin: 20px 0;
			}
	}
	.choose_country{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 30px 0;
		.choose_country_left{
			width: 100px;
			height: 40px;
			border: 1px solid #e2e2e2;
			border-radius: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #000000;
			font-weight: 400;
			padding: 5px 10px 5px 10px;
			box-sizing: border-box;
			.num{
				font-size: 14px
			}
		}
	}
	.user_agreement{
		display: flex;
		justify-content: space-between;
		margin: 10px 0 20px;
		align-items: center;
	}
	.btn_box{
		width: 100%;
		display: flex;
		justify-content: space-between;
		.btn{
			width: 200px;
		}
	}
	.line{
		height: 1px;
		width: 100%;
		background-color: #dfdfdf;
		margin-top: 10px;
	}
	.login_account{
		margin: 20px auto 0;
		font-size: 14px;
		text{
			color: #ff0000;
		}
	}
	.choose_login_box{
		.choose_login{
			display: flex;
			align-items: center;
			margin: 10px auto;
			color: #999999;
			.line{
				width: 40%;
			}
		}
		.logo_box{
			width: 100%;
			display: flex;
			justify-content: center;
			margin: 20px auto;
			.logo_box_img{
				margin: 0 5px;
			}
		}
		
	}
	.bottom_nav_vue{
		// margin-top: 500px;
	}
	// .bot_line{
	// 	margin: 40px auto;
	// }
</style>