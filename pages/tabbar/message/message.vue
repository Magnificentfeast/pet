<template>
	<view class="message">
		<view class="search-box">
			<u-search v-model="value" @change="changeinput" @search="searchinput" :shape="shape" :clearabled="clearabled" 
			:show-action="showAction" @clear="clearinput"></u-search>
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

</style>
