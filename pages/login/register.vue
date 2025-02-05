<template>
	<view class="login_massage">
		<view class="box_all_bg">
			<view class="box_bg">
			</view>
		</view>
		<view class="register_box">
			<view class="register_box_title">
				注册 P2PAH
			</view>
			<view class="choose_country">
				<view class="choose_country_left" @click="queryInformation">
					<up-image :show-loading="true" :src="chooseData.img"
						width="20px" height="20px" radius='100px' @click="click"></up-image>
					<view class="num">
						{{chooseData.num}}
					</view>
					<up-icon name="arrow-down" size="18"></up-icon>
				</view>
				<!-- 下拉组件 -->
				<view class="choose_country_vue">
					<chooseCountryVue :open="open" @submitData="getData"></chooseCountryVue>
				</view>
				<view class="choose_country_right">
					<up-input style="width:280px" placeholder="请输入内容" border="surround" v-model="value"
						@change="change"></up-input>
				</view>

			</view>
			<view class="test" @click="openTest">
				<!-- <up-checkbox
				        name="agree"
				        usedAlone
				        v-model:checked="aloneChecked"
						iconSize="50px"
				    >
				    </up-checkbox> -->
				<view class="test_box">

				</view>
				<p class="test_box_title">进行人机身份验证</p>
				<view class="test_right">
					<img src="" alt="" />
					<up-image :show-loading="true" src="https://www.gstatic.cn/recaptcha/api2/logo_48.png" width="50px"
						height="50px" radius='100px' @click="click"></up-image>
					<p class="test_right_text">reCAPTCHA</p>
					<p class="test_right_text">隐私权使用条款</p>
				</view>
			</view>
			<view class="btn_box">
				<up-button class="btn" text="稍后"></up-button>
				<up-button type="error" class="btn" text="继续"></up-button>
			</view>

			<view class="choose_login_box">
				<view class="choose_login">
					<!-- <view class="line"></view> -->
					<text>——————————— 或 ———————————</text>
					<!-- <view class="line"></view> -->
				</view>
				<text>
					用你的社交账号注册
				</text>
				<view class="logo_box">
					<up-image v-for="item,i in 6" class="logo_box_img" :show-loading="true"
						src="https://www.p2pah.com/static/p2pah/images/flags/ca.svg" width="30px" height="30px"
						radius='100px'></up-image>
				</view>
				<text style="font-size: 14px;">我们不会在没有事先询问的情况下向你们的任何账户发布消息</text>
			</view>
			<view class="line">

			</view>
			<view class="login_account">
				已经有一个帐户? <text>登录</text>
			</view>
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
	export default {
		components: {
			chooseCountryVue,
			testVue,
			bottomNavVue
		},
		data() {
			return {
				value: '',
				aloneChecked: false,
				open:false,
				chooseData:{
					num:'+1',
					img:'https://www.p2pah.com/static/p2pah/images/flags/ca.svg'
				}
			}
		},
		methods: {
			change(e) {
				console.log('change', e);
			},
			openTest() {
				this.$nextTick(() => {
					this.$refs['test_vue']?.open()
				})
			},
			queryInformation(){
				this.open=true
			},
			getData(data){
				console.log('data?????',data);
				this.chooseData.img=data.img
				this.chooseData.num=data.num
			}
		}
	}
</script>

<style scoped lang="scss">
	.login_massage {
		background-color: #f5f5f5;
	}

	.box_all_bg {
		width: 100%;
		height: 300px;
		overflow: hidden;
		position: relative;
	}

	.box_bg {
		position: absolute;
		width: 110%;
		height: 500px;
		border-radius: 40%;
		background-color: rgb(214, 72, 55);
		bottom: 10%;
		left: -5%;
	}

	.register_box {
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

		.register_box_title {
			font-size: 22px;
			font-weight: 500;
		}
	}

	.choose_country {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
position: relative;
.choose_country_vue{
	position: absolute;
	top: 40px;
	background-color: #fff;
	z-index: 55;
}
		.choose_country_left {
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

			.num {
				font-size: 14px
			}
		}
	}

	.test {
		height: 80px;
		width: 300px;
		margin: 20px auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f9f9f9;
		border-radius: 3px;
		box-shadow: 0 0 4px 1px rgba(0, 0, 0, .08);
		padding: 5px 10px 5px 10px;
		box-sizing: border-box;

		.test_box {
			width: 30px;
			height: 30px;
			border: 2px solid #999999;

		}

		.test_box_title {
			font-size: 14px;
			font-weight: 400;
			line-height: 17px;
			font-family: Roboto, helvetica, arial, sans-serif;
		}

		.test_right {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.test_right_text {
				display: inline;
				padding-left: 1px;
				padding-right: 1px;
				padding-top: 2px;
				padding-bottom: 2px;
				text-decoration: none;
				color: #555;
				font-size: 8px;
			}
		}
	}

	.btn_box {
		width: 100%;
		display: flex;
		justify-content: space-between;

		.btn {
			width: 200px;
		}
	}

	.line {
		height: 1px;
		width: 100%;
		background-color: #dfdfdf;
		margin-top: 10px;
	}

	.login_account {
		margin: 20px auto 0;
		font-size: 14px;

		text {
			color: #ff0000;
		}
	}

	.choose_login_box {
		.choose_login {
			display: flex;
			align-items: center;
			margin: 10px auto;
			color: #999999;

			.line {
				width: 40%;
			}
		}

		.logo_box {
			width: 100%;
			display: flex;
			justify-content: center;
			margin: 20px auto;

			.logo_box_img {
				margin: 0 5px;
			}
		}

	}

	// .bot_line{
	// 	margin: 40px auto;
	// }
</style>