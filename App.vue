<script>
	export default {
		globalData: {
			preloadData: {
				ssqData: null,
				kl8Data: null,
				dltData: null
			},
			lotteryDetailData: {
				ssqDetailData: null,
				kl8DetailData: null,
				dltDetailData: null
			}
		},
		onLaunch: function() {		
			// console.log('App Launch')	
			// uniCloud.callFunction({
			// 	name: "myTestCloudFunction"
			// }).then(res => {
			// 	console.log(res)
			// })
			
			// 先加载数据，但不等待所有接口都返回
			uniCloud.callFunction({
				name: "getCurrentSsqLotteryInfo"
			}).then(res => {
				this.globalData.preloadData.ssqData = res.result.data;
				uni.$emit('dataReady');
			})

			uniCloud.callFunction({
				name: "getCurrentKl8LotteryInfo"
			}).then(res => {
				this.globalData.preloadData.kl8Data = res.result.data;
				uni.$emit('dataReady');
			});
			
			// 获取中奖详情
			uniCloud.callFunction({
				name: "getCurrentSsqLotteryDetailData"
			}).then(res => {
				this.globalData.lotteryDetailData.ssqDetailData = res.result.data;
			})
			
			uniCloud.callFunction({
				name: "getCurrentKl8LotteryDetailData"
			}).then(res => {
				this.globalData.lotteryDetailData.kl8DetailData = res.result.data;
			})

			
			
		}
	}
</script>
<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	@import "common/demo.scss";
</style>