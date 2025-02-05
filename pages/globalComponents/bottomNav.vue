<template>
	<view class="">
		<view class="line">
			
		</view>
		<view class="nav_box">
			
			<view class="nav_box_title">
				<view class="nav_box_title_left">
					<a href="https://www.p2pah.com/">
						<img style="width: 170px;height: 70px;" src="https://www.p2pah.com/static/p2pah/images/logo.svg"
							with="170" heighr="70" alt="SVG Image" />
					</a>
				</view>
				<view class="nav_box_title_right">
					<view class="nav_box_title_right_logo" v-for="item,i in 5">
					</view>
				</view>
			</view>
			<view class="nav_box_content">
				<view class="nav_box_content_minbox">
					<view class="nav_box_content_minbox_title">
						<a href="">服务支持</a>
					</view>
					<view class="nav_box_content_minbox_con">
						<a href=""><p>如何售卖</p></a>
						<a href=""><p>如何购买</p></a>
						<a href=""><p>帮助中心</p></a>
						<a href=""><p>提现费率</p></a>
						<a href=""><p>出售服务费</p></a>
					</view>
				</view>
				<view class="nav_box_content_minbox">
					<view class="nav_box_content_minbox_title">
						<a href="">法律相关</a>
					</view>
					<view class="nav_box_content_minbox_con">
						<a href=""><p>服务条款</p></a>
						<a href=""><p>隐私政策</p></a>
						<a href=""><p>联盟协议</p></a>
					</view>
				</view>
				<view class="nav_box_content_minbox">
					<view class="nav_box_content_minbox_title">
						<a href="">信息中心</a>
					</view>
					<view class="nav_box_content_minbox_con">
						<a href=""><p>关于我们</p></a>
						<a href=""><p>所有游戏</p></a>
						<a href=""><p>联盟计划</p></a>
						<a href=""><p>新闻博客</p></a>
						<a href=""><p>网站地图</p></a>
					</view>
				</view>
				<view class="nav_box_content_minbox">
					<view class="nav_box_content_minbox_title">
						<a href="">联系我们</a>
					</view>
					<view class="nav_box_content_minbox_con">
						<a href=""><p>联系卖家</p></a>
						<a href=""><p>SUPPORT@P2PAH.COM</p></a>
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
			}
		}
	}
</script>

<style scoped>
	.line{
		height: 1px;
		width: 100%;
		background-color: #dfdfdf;
		margin-top: 10px;
	}
	.nav_box{
		width: 1200px;
		/* background-color: pink; */
		margin: 20px auto;
	}
	.nav_box_title{
		padding: 20px 0 20px 0;
		display: flex;
		justify-content: space-between;
	}
	.nav_box_title_right{
		display: flex;
		justify-content: end;
		.nav_box_title_right_logo{
			width: 30px;
			height: 30px;
			background-color: #f5f5f5;
			margin-left: 5px;
		}
	}
	.nav_box_content{
		display: flex;
		justify-content: space-between;
		.nav_box_content_minbox{
			
			.nav_box_content_minbox_title{
			a{
				display: inline-block;
				font-size: 14px;
				color:#9292a2
			}
			}
			.nav_box_content_minbox_con{
				margin-top: 15px;
				a{
					font-size: 14px;
					color: #3a3a3a;
					line-height: 28px;
				}
			}
		}
	}
	
</style>