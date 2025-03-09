<template>
	<view>
		<view class="u-demo-block">
			<view class="u-demo-block__content">
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
						<lotteryItem :lotteryItemData="ssqData"></lotteryItem>
						<lotteryItem :lotteryItemData="kl8Data"></lotteryItem>	
					</swiper-item>
					<swiper-item>
						<lotteryItem :lotteryItemData="ssqData"></lotteryItem>
						<lotteryItem :lotteryItemData="kl8Data"></lotteryItem>						
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
				ssqData: {
					picSrc: '/static/ssq.png',
					lotteryDes: "\u53cc\u8272\u7403   \u7b2c2025021\u671f",
					lotteryDate: "2025-02-27(四)",
					lotteryFrequnency: "周二/四/日",
					lotteryNumDataArr: [
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "blue",
							number: "8"
						}
					]
				},
				kl8Data: {
					picSrc: '/static/kl8.png',
					lotteryDes: "\u5feb\u4e508   \u7b2c2025049\u671f",
					lotteryDate: "2025-02-27(四)",
					lotteryFrequnency: "每日开奖",
					lotteryNumDataArr: [
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "8"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "8"
						},
						{
							color: "red",
							number: "7"
						},
						{
							color: "red",
							number: "8"
						},
						{
							color: "red",
							number: "8"
						},
						{
							color: "red",
							number: "8"
						},
						{
							color: "red",
							number: "8"
						},
						{
							color: "red",
							number: "8"
						}
					]
				},
				list: [{
					name: '首页'
				}, {
					name: '\u798f\u5f69'
				}, {
					name: '\u4f53\u5f69',
				}, {
					name: '\u5730\u65b9\u5f69'
				}],
				currentTab: 0
			}
		},
		methods: {
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