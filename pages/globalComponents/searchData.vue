<template>
	<view class="top_box">
		<view class="container_top">
			<view class="container_top_left_logo">
				<a href="https://www.p2pah.com/">
					<img style="width: 170px;height: 70px;" src="https://www.p2pah.com/static/p2pah/images/logo.svg"
						with="170" heighr="70" alt="SVG Image" />
				</a>
				<view class="search_header">
					<view class="searchbox">
						<view class="searchbox_classify">
							<view class="classify" @mouseover="chooseDataShow" @mouseleave="chooseDataHidden">
								类别
								<up-icon v-if="listDataOpen==false" name="arrow-down" color="#fff" size="16"></up-icon>
								<up-icon v-else name="arrow-up" color="#fff" size="16"></up-icon>
							</view>
							<view class="search jq-web-top">
								<up-input placeholder="请输入内容" border="surround" v-model="value" @change="change"
									style="border-radius: 0 25px 25px 0;100%;border-color: #d2d2d9;box-sizing: border-box;width:300px ;"
									suffixIcon="search">
								</up-input>
							</view>
						</view>
						<view v-if="listDataOpen==true" class="classify_data">
							<view class="listDataOne" v-if="listDataOpen==true" @mouseleave="chooseDataHidden2">
								<view class="data_title_one" v-for="item,i in listItems" :style="item.style"
									@mouseover="chooseDataShow2(i)" :key="i">
									<view class="data_title_one_line">

									</view>
									<view class="text_data">
										123
									</view>
								</view>
							</view>
							<view class="listDataTwo" v-if="listDataOpen2==true" @mouseover="chooseDataShow3"
								@mouseleave="chooseDataHidden3">
								<view class="data_title_two">
									1111
								</view>

							</view>
						</view>
					</view>
				</view>
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
					<view class="landing_min_data">
						注册
					</view>
					<view class="login_btn landing_min_data">
						登录
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				value: '',
				listDataOpen: false,
				listDataOpen2: false,
				timer: null,
				timer2: null,
				timer3: null,
				items: [{
						text: 'Item 1'
					},
					{
						text: 'Item 2'
					},
					{
						text: 'Item 3'
					}
				],
				hoverIndex: null
			}
		},
		computed: {
			listItems() {
				return this.items.map((item, index) => ({
					...item,
					style: {
						backgroundColor: this.hoverIndex === index ? '#f8f8f8' : '#fff' // 悬浮时的背景色和默认背景色
					}
				}));
			}
		},
		methods: {
			chooseDataShow() {
				this.hoverIndex = null
				clearTimeout(this.timer);
				this.listDataOpen = true
			},
			chooseDataHidden() {
				this.timer = setTimeout(() => {
					this.listDataOpen = false
				}, 200)
			},
			chooseDataShow2(i) {
				clearTimeout(this.timer);
				clearTimeout(this.timer3);
				this.listDataOpen2 = true
				this.hoverIndex = i;
				console.log('this.', this.hoverIndex);
			},
			chooseDataHidden2() {
				this.timer2 = setTimeout(() => {
					this.listDataOpen = false
					console.log(333)
				}, 200)

			},
			chooseDataShow3() {
				clearTimeout(this.timer2);
			},
			chooseDataHidden3() {
				this.timer3 = setTimeout(() => {
					this.listDataOpen = false
					this.listDataOpen2 = false
				}, 200)


			}
		}
	}
</script>

<style scoped lang="scss">
	.top_box {
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 1000;
		background-color: #fff;
		border-bottom: 1px solid #f5f5f5;
		box-shadow: 2px 2px 5px 0 #f5f5f5;

		.container_top {
			width: 1200px;
			height: 76px;
			// background-color: pink;s
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.container_top_left_logo{
				display: flex;
				align-items: center;
				.search_header{
					
				}
			}

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

	a {
		color: #ed3726;
	}

	button,
	input,
	select,
	textarea {
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
	}

	.searchbox {
		display: flex;
		position: relative;
		margin-left: 30px;
		.searchbox_classify{
			display: flex;
		}
	}

	.classify {
		display: flex;
		justify-content: space-between;
		z-index: 10;
		// float: left;
		min-width: 120px;
		height:100%;
		padding: 0 20px;
		// line-height: 40px;
		align-items: center;
		color: #fff;
		text-align: left;
		background: #db4733;
		// border: 1px solid #d2d2d9;
		border-radius: 25px 0 0 25px;
		font-size: 14px;
		box-sizing: border-box;
	}

	.classify_data {
		position: absolute;
		left: 0;
		margin-top: 40px;
		display: flex;

		.listDataTwo {
			background-color: #fff;
			width: 400px;

			.data_title_two {
				height: 50px;
				line-height: 50px;
				background-color: #fff;
			}

			.data_title_two:hover {
				background-color: #f8f8f8;
				/* margin-left: 10px; */
			}
		}

		.listDataOne {
			position: relative;
			box-shadow: 1px;

			.data_title_one {
				background-color: #fff;
				width: 200px;
				height: 50px;
				line-height: 50px;
				display: flex;

				.text_data {
					margin-left: 10px;
				}
			}
		}
	}
</style>