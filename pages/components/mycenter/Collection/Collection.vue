<template>
	<view class="Collection">
		<hospitalList></hospitalList>
	</view>
</template>

<script>
	import hospitalList from "../../../../components/list/hospitalList.vue"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			"hospitalList":hospitalList
		}
	}
</script>

<style lang="less">

</style>
