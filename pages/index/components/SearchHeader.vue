<template>
	<view class="search_header">
		<view class="searchbox">
			<view class="classify" @mouseover="chooseDataShow" @mouseleave="chooseDataHidden">
				类别
				<up-icon v-if="listDataOpen==false" name="arrow-down" color="#fff" size="16"></up-icon>
				<up-icon v-else name="arrow-up" color="#fff" size="16"></up-icon>
			</view>
			<view class="search jq-web-top">
				<up-input placeholder="请输入内容" border="surround" v-model="value" @change="change"
					style="border-radius: 0 25px 25px 0;height: 48px;border-color: #d2d2d9;box-sizing: border-box;width:400px ;"
					suffixIcon="search">
				</up-input>
			</view>
			<view v-if="listDataOpen==true" class="classify_data">
				<view class="listDataOne" v-if="listDataOpen==true"
					@mouseleave="chooseDataHidden2">
					<view class="data_title_one" v-for="item,i in listItems"  :style="item.style" @mouseover="chooseDataShow2(i)" :key="i">
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
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				listDataOpen: false,
				listDataOpen2:false,
				timer: null,
				timer2: null,
				timer3: null,
				  items: [
				        { text: 'Item 1' },
				        { text: 'Item 2' },
				        { text: 'Item 3' }
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
				 console.log('this.',this.hoverIndex);
			},
			chooseDataHidden2(){
				this.timer2 = setTimeout(() => {
					this.listDataOpen = false
					console.log(333)
				}, 200)
				
			},
			chooseDataShow3(){
				clearTimeout(this.timer2);
			},
			chooseDataHidden3(){
				this.timer3 = setTimeout(() => {
					this.listDataOpen = false
					this.listDataOpen2=false
				}, 200)
				
				
			}
		}
	}
</script>

<style scoped>
	button,
	input,
	select,
	textarea {
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
	}

	.search_header {
		height: 300px;
		width: 600px;
		margin: 0 auto;
		position: relative;
	}

	.searchbox {
		position: absolute;
		margin-top: calc(150px - 48px/2);
		display: flex;
	}

	.classify {
		display: flex;
		justify-content: space-between;
		position: relative;
		z-index: 10;
		float: left;
		min-width: 200px;
		height: 48px;
		padding: 0 20px;
		line-height: 48px;
		color: #fff;
		text-align: left;
		background: #db4733;
		border: 1px solid #d2d2d9;
		border-radius: 25px 0 0 25px;
		font-size: 14px;
		box-sizing: border-box;
	}

	.classify_data {
		/* width: 600px; */
		/* height: 800px; */
		/* background-color: pink; */
		position: absolute;
		left: 0;
		margin-top: 48px;
		display: flex;
.listDataTwo{
	background-color: #fff;
	width: 400px;
	.data_title_two{
		height: 50px;
		line-height: 50px;
		background-color: #fff;
	}
	.data_title_two:hover{
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

			/* .data_title_one:hover {
				.data_title_one_line {
					height: 100%;
					width: 4rpx;
					background-color: #db4733;
					position: absolute;

				}

				background-color: #e7e7e7;
			} */
		}
	}
</style>