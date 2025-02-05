<template>
	<view class="choose" v-if="open">
		<up-search class="choose_search" :show-action="false" shape='square' bgColor="#fff" :animation="false"></up-search>
		<view class="choose_country">
			<view class="choose_country_massage" v-for="item,i in list" @click="SubmitEvent(item)">
				<up-image :show-loading="true" :src="item.img" width="30px" height="30px" radius='100px' @click="click"></up-image>
				<p class="choose_country_massage_num">{{item.num}}</p>
				<p class="choose_country_massage_name">{{item.name}}</p>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => [{
					img: 'https://b0.bdstatic.com/228734cb1c969825e54480a7cdb0b563.jpg@h_1280',
					num: '+1',
					name: 'China'
				}, {
					img: 'https://b0.bdstatic.com/228734cb1c969825e54480a7cdb0b563.jpg@h_1280',
					num: '+1',
					name: 'China'
				}, {
					img: 'https://b0.bdstatic.com/228734cb1c969825e54480a7cdb0b563.jpg@h_1280',
					num: '+1',
					name: 'China'
				}, {
					img: 'https://b0.bdstatic.com/228734cb1c969825e54480a7cdb0b563.jpg@h_1280',
					num: '+1',
					name: 'China'
				}, {
					img: 'https://b0.bdstatic.com/228734cb1c969825e54480a7cdb0b563.jpg@h_1280',
					num: '+1',
					name: 'China'
				}, {
					img: 'https://b0.bdstatic.com/228734cb1c969825e54480a7cdb0b563.jpg@h_1280',
					num: '+1',
					name: 'China'
				}],
			},
			open:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				keyword: '遥看瀑布挂前川'
			}
		},
		methods:{
			SubmitEvent(data){
				this.$emit('submitData',data)
			}
		}
	}
</script>

<style scoped lang="scss">
	.choose {
		width: 280px;
		height: 300px;
		// background-color: pink;
		border: 1px solid #ebebeb;
		 box-shadow: inset 2px 2px 5px #dfdfdf;
		 overflow-y: scroll;
		 .choose_search{
			 position: sticky;
			 top: 0;
			 z-index: 666;
		 }
		.choose_country{
			
			.choose_country_massage{
				// width: 100%;
				height: 50px;
				line-height: 50px;
				font-size: 13px;
				display: flex;
				align-items: center;
				font-weight: 700;
				padding: 0 20px 0 20px;
				
				.choose_country_massage_name{
					margin-left: 50px;
				}
				.choose_country_massage_num{
					margin-left: 5px;
				}
			}
			.choose_country_massage:hover{
				background-color: yellow;
			}
			
		}
	}
</style>