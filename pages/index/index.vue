<template>
	<view>
		<view v-if="loading" class="skeleton-container">
			<u-skeleton rows="20" loading></u-skeleton>
		</view>
		<view v-else>
			<view>
				<u-tabs :current="currentTab" @click="click" @change="changeTab" :list="list" lineWidth="40"
					lineColor="#f56c6c" :activeStyle="{
						color: '#303133',
						fontWeight: 'bold',
						transform: 'scale(1.35)'
					}" :inactiveStyle="{
						color: '#606266',
						transform: 'scale(1.25)'
					}" itemStyle="padding-left: 40rpx; padding-right: 40rpx; height: 80rpx;">
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
			uni.$on('dataReady', this.loadData);
		},
		onUnload() {
			uni.$off('dataReady', this.loadData);
		},
		methods: {
			loadData() {
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
	.swiper-box {
		height: 1200rpx;
	}
</style>