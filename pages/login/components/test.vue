<template>
	<view>
		<up-popup :show="show" mode="center" @close="close" @open="open">
			<view class="box_test">
				<view class="ts_imageselect_instructions">
					<view class="ts_imageselect_instructions_title">
						请选择包含
					</view>
					<view class="ts_imageselect_instructions_main">
						红绿灯
					</view>
					<view class="ts_imageselect_instructions_title">
						请选择包含
					</view>
				</view>
			</view>
			<view class="img_box">
				<up-image :show-loading="true" src="https://www.p2pah.com/static/p2pah/images/flags/ca.svg" width="100px" height="100px" @click="click"></up-image>
			</view>
		</up-popup>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				show: false,
			}
		},
		methods: {
			open() {
				// 打开逻辑，比如设置 show 为 true  
				this.show = true;
				// console.log('open');  
			},

			close() {
				// 关闭逻辑，设置 show 为 false  
				this.show = false;
				// console.log('close');  
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box_test{
		width: 300px;
		padding: 10px;
		background-color: white;
		.ts_imageselect_instructions{
			background-color: #1a73e8;
			width: 100%;
			// height: 144px;
			padding: 30px;
			box-sizing: border-box;
			color: white;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.ts_imageselect_instructions_title{
				font-size: 12px;
			}
			.ts_imageselect_instructions_main{
				margin: 5px 0 5px;
				font-size: 18px
			}
		}
	}
</style>