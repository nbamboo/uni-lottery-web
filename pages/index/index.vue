<template>
	<view>
		<view v-if="loading" class="skeleton-container">
			<u-skeleton rows="3" loading></u-skeleton>
		</view>
		<view v-else>
			<view>
				<u-tabs :current="currentTab" @click="click" @change="changeTab" :list="list" lineWidth="40"
					lineColor="#f56c6c" :activeStyle="{
						color: '#303133',
						fontWeight: 'bold',
						transform: 'scale(1.15)'
					}" :inactiveStyle="{
						color: '#606266',
						transform: 'scale(1.05)'
					}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;">
				</u-tabs>
			</view>
			<view>
				<swiper class="swiper-box" :current="currentTab" @change="swiperChange">
					<swiper-item>
						<lotteryItem :lotteryItemData="ssqData[0]"></lotteryItem>
						<lotteryItem :lotteryItemData="kl8Data[0]"></lotteryItem>
					</swiper-item>
					<swiper-item>
						<lotteryItem :lotteryItemData="ssqData[0]"></lotteryItem>
						<lotteryItem :lotteryItemData="kl8Data[0]"></lotteryItem>
					</swiper-item>
					<swiper-item>
						<lotteryItem :lotteryItemData="ssqData[0]"></lotteryItem>
						<lotteryItem :lotteryItemData="kl8Data[0]"></lotteryItem>
					</swiper-item>
					<swiper-item>
						<lotteryItem :lotteryItemData="ssqData[0]"></lotteryItem>
						<lotteryItem :lotteryItemData="kl8Data[0]"></lotteryItem>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import lotteryItem from '@/components/lottery-item/lottery-item.vue'
	export default {
		components: {
			lotteryItem
		},
		data() {
			return {
				ssqData: [],
				kl8Data: [],
				list: [{
					name: '首页'
				}, {
					name: '\u798f\u5f69'
				}, {
					name: '\u4f53\u5f69',
				}, {
					name: '\u5730\u65b9\u5f69'
				}],
				currentTab: 0,
				loading: true
			}
		},
		onLoad() {
			const app = getApp();
			if (app.globalData.isDataReady) {
				this.loadData();
			} else {
				uni.$on('dataReady', this.loadData);
			}
		},
		onUnload() {
			uni.$off('dataReady', this.loadData);
		},
		methods: {
			loadData() {
				console.log('数据加载中...');
				const app = getApp();
				this.ssqData = app.globalData.preloadData?.ssqData || [];
				this.kl8Data = app.globalData.preloadData?.kl8Data || [];
				this.loading = false;
			},
			click(item) {
				this.currentTab = Number(item.index);
			},
			changeTab(item) {
				this.currentTab = Number(item.index);
			},
			swiperChange(e) {
				this.currentTab = Number(e.detail.current);
			}
		}
	}
</script>

<style lang="scss">
	// 总容器
	.container1 {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 10px;
		margin-bottom: 10px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

	}

	//图片与信息容器
	.container2 {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	// 文字容器
	.container2-1 {
		display: flex;
		justify-content: space-between;
		padding-bottom: 10px;
	}

	// 球容器
	.container2-2 {
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
	}

	//按钮容器
	.container2-3 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}


	.container3 {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.image-type {
		padding: 0 10px 10px 0;
	}


	.lotteryDesType {
		font-size: 12px;
		font-weight: bold;
	}

	.lotteryDesDate {
		font-size: 12px;
	}

	.lotteryDesWeekday {
		font-size: 12px;
		padding-right: 10px;
	}

	.lotteryNumContainer {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 5px;
		padding-bottom: 2.5px;
	}

	.lotteryNumber {
		position: absolute;
		color: white;
		font-size: 14px;
		font-weight: bold;
	}

	.action-button {
		margin-right: 15px;
	}

	.swiper-box {
		height: 600px;
	}
</style>