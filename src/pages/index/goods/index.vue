<template>
	<div>
		<mp-title :title="title"></mp-title>
		
		<mp-goods></mp-goods>

		
	</div>
</template>

<script>
	import MpTitle from '@/components/MpTitle';
	import GoodsList from '@/components/GoodsList';

	export default {
		name:'category',
		data() {
			return {
				title: '商品',				

			}
		},

		components: {
			'mp-title': MpTitle,
			'mp-goods': GoodsList
		},

		methods: {
		},

		created() {}
	}
</script>

<style scoped>

</style>