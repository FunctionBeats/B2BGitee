<template>
	<view class="container">
		<view class="top_box">
			<view class="container_top">
				<view class="container_top_left_logo">
					<a href="https://www.p2pah.com/">
						<img style="width: 170px;height: 70px;" src="https://www.p2pah.com/static/p2pah/images/logo.svg"
							with="170" heighr="70" alt="SVG Image" />
					</a>
				</view>
				<view class="mobile-platform-area">
					<view class="landing_box">
						<view class="landing_min_data">
							<a class="dy-sell" href="https://www.p2pah.com/sellbutton.html">
								<view class="landing_min_title">
									立即售卖
								</view>
							</a>
						</view>
						<view class="landing_min_data" @click="goRegister">
							注册
						</view>
						<view class="login_btn landing_min_data" @click="login">
										登录
							
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="search_box">
			<view class="header_fklx_top_box">
				<SearchHeader></SearchHeader>
			</view>
		</view>
		<view class="home_quick_entrance">
			<view class="col_log" v-for="item,i in 6">
				<view class="col_log_left">

				</view>
				<view class="col_log_right">
					游戏币
				</view>
			</view>
		</view>
		<view class="goods_title">
			热门游戏服务
		</view>
		<view class="hotlist">
			<view class="hotlist_box" v-for="item,i in 4">
				<view class="hotlist_box_left">
					12
					<img src="https://www.p2pah.com/static/p2pah/images/useful/hot1.webp" alt="" />
				</view>
				<view class="hotlist_box_right">
					<view class="hotlist_box_right_box" v-for="item,i in 5">
						<view class="hotlist_box_titlt">
							123

						</view>
						<view class="hotlist_box_price" @click="goGoodsPage">
							13.0报价
						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="goods_title">
			The Guides You Are Probably Looking For
		</view>
		<view class="guide_box">
			<view class="guide_box_list" v-for="item,i in 4">
				<view class="guide_list_left">
				</view>
				<view class="guide_list_right">
					<view class="guide_list_right_title">
						How To Buy
					</view>
					<view class="guide_list_right_text">
						The simple process tells you how to purchase goods or service easily at P2PAh.
					</view>
				</view>
			</view>
		</view>
		<view class="">
			<bottomNav></bottomNav>
		</view>
		<view class="wrap">
			<text>滑动页面，返回顶部按钮将出现在右下角</text>
			<up-back-top :scrollTop="scrollTop" icon="arrow-up" :mode="mode" :iconStyle="iconStyle">
			</up-back-top>
		</view>
	</view>
</template>

<script scoped>
	import SearchHeader from './components/SearchHeader.vue'
	import bottomNav from '../globalComponents/bottomNav.vue';
	export default {
		components: {
			SearchHeader,
			bottomNav
		},
		data() {
			return {
				title: 'Hello',
				scrollTop: 0,
				mode: 'square',
				iconStyle: {
					fontSize: '32rpx',
					// color: '#2979ff',
					with: '80px',
					height: '80px'
				}

			}
		},
		onLoad() {

		},
		methods: {
			// 跳转注册
			goRegister() {
				uni.navigateTo({
					url: '/pages/login/register'
				});
			},
			// 跳转登录
			login(){
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			// 跳转商品
			goGoodsPage(){
				uni.navigateTo({
					url: '/pages/shop/goods'
				});
			}
			
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss" scoped>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.top_box {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 1000;
		background-color: #fff;

		.container_top {
			width: 1200px;
			height: 76px;
			// background-color: pink;s
			margin: 0 auto;
			display: flex;
			justify-content: space-between;

			.landing_box {
				width: 200px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				line-height: 76px;
				color: #ed3726;
			}

			.landing_box:hover {
				cursor: pointer;
			}

			.login_btn {
				display: inline-block;
				height: 36px;
				padding: 0 15px;
				line-height: 34px;
				color: #ed3726;
				border: 1px solid;
				border-radius: 4px;
			}

			.login_btn:hover {
				background-color: #ed3726;
				color: white;
			}
		}

	}

	.search_box {
		width: 100%;
		height: 300px;
		// background-color: yellow;
		background: url('../../static/fab6dbfec2646e2ac15b2a081b270fff.webp') center top;
	}

	.home_quick_entrance {
		display: flex;
		margin: 10px;
		align-items: center;
		justify-content: center;

		.col_log {
			width: 170px;
			height: 68px;
			background-color: #fdf8eb;
			border-radius: 8px;
			display: flex;
			justify-content: start;
			align-items: center;
			margin-left: 20px;
			padding: 10px;
			box-sizing: border-box;

			.col_log_left {
				background-color: #eebe39;
				width: 50px;
				height: 50px;
				border-radius: 10px;
			}

			.col_log_right {
				margin-left: 13px;
				color: #303030;
				font-size: 14px;
			}

		}
	}

	.goods_title {
		margin: 50px 0 30px;
		font-size: 30px;
		font-weight: 400;
		color: #303030;
		text-align: center;
	}

	.hotlist {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.hotlist_box {
		width: 576px;
		border-radius: 8px;
		display: flex;
		border: 1px solid #ececec;
		margin-left: 30px;
		overflow: hidden;
		margin-bottom: 30px;

		.hotlist_box_left {
			width: 34%;
			height: 300px;
			background-color: #edbe3c;
			position: relative;

			img {
				width: 155px;
				width: 143px;
				position: absolute;
				bottom: 0;
				left: 0;
			}
		}

		.hotlist_box_right {
			width: 66%;
			height: 300px;
			display: flex;
			flex-direction: column;

			.hotlist_box_right_box {
				// line-height: 50px;
				height: 50px;
				padding: 5px 10px;
				border-bottom: 1px solid #ececec;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.hotlist_box_right_box:hover {
				background-color: #ececec;
			}

			.hotlist_box_right_box:last-child {
				border-bottom: none;
			}

			.hotlist_box_titlt {
				font-size: 14px;


			}

			.hotlist_box_price {
				border: 1px solid #ececec;
				font-size: 12px;
				padding: 2px 8px;
				border-radius: 4px;
				color: #333333;
			}
		}
	}

	.guide_box {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		.guide_box_list {
			width: 600px;
			// height: 300px;
			// background-color: pink;
			display: flex;
			align-items: center;
			padding: 20px;
			border: 1px solid #e3e3e3;
			border-radius: 6px;
			margin: 0 0 50px 50px;

			.guide_list_left {
				width: 60px;
				height: 60px;
				border-radius: 100%;
				background-color: #f6f7fe;
			}

			.guide_list_right {
				margin-left: 20px;

				.guide_list_right_title {
					font-size: 20px;
				}

				.guide_list_right_text {
					font-size: 14px;
					margin-top: 20px;
				}
			}
		}
	}

	a {
		color: #ed3726;
	}
</style>