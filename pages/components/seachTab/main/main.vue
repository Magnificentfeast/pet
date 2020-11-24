<template>
	<view class="main">
		<view class="search-box">
			<u-search placeholder="搜索您需要的内容" v-model="keyword"></u-search>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
page{
	background-color: #FFFFFF;
	.main{
		.search-box{
			margin: 12rpx 30rpx 0;
		}
	}
}
</style>
