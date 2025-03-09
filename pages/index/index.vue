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
						<view class="container1">
							<view class="container2">
								<view class="u-page__image-item image-type">
									<u--image :src="srcSsq" width="40px" height="40px"></u--image>
								</view>
								<view>
									<view class="container2-1">
										<view class="lotteryDesType">{{ssqString}}</view>
										<view class="lotteryDesDate">2025-02-27(四)</view>
										<view class="lotteryDesWeekday">周二/四/日</view>
									</view>
									<view class="container2-2">
										<view class="container3">
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">7</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">8</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">16</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">18</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">25</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">32</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="blueCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">14</view>
											</view>
										</view>
									</view>
									<view class="container2-3">
										<view class="u-page__button-item action-button">
											<u-button text="中奖详情" size="mini" plain shape="circle"
												type="error"></u-button>
										</view>
										<view class="u-page__button-item action-button">
											<u-button text="往期开奖" size="mini" plain shape="circle"
												type="error"></u-button>
										</view>
										<view class="u-page__button-item action-button">
											<u-button text="开奖通知" size="mini" plain shape="circle"
												type="error"></u-button>
										</view>
										<view class="u-page__button-item action-button">
											<u-button text="守号订阅" size="mini" plain shape="circle"
												type="error"></u-button>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="container1">
							<view class="container2">
								<view class="u-page__image-item image-type">
									<u--image :src="srcKl8" width="40px" height="40px"></u--image>
								</view>
								<view>
									<view class="container2-1">
										<view class="lotteryDesType">{{kl8String}}</view>
										<view class="lotteryDesDate">2025-03-01(日)</view>
										<view class="lotteryDesWeekday">每日开奖</view>
									</view>
									<view class="container2-2">
										<view class="container3">
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">7</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">8</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">16</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">18</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">25</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">32</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="blueCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">14</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="blueCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">14</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="blueCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">14</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="blueCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">14</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">7</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">8</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">16</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">18</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">25</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="redCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">32</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="blueCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">14</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="blueCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">14</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="blueCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">14</view>
											</view>
											<view class="lotteryNumContainer">
												<u--image :src="blueCircleSrc" width="24px" height="24px"></u--image>
												<view class="lotteryNumber">14</view>
											</view>
										</view>
									</view>
									<view class="container2-3">
										<view class="u-page__button-item action-button">
											<u-button text="中奖详情" size="mini" plain shape="circle"
												type="error"></u-button>
										</view>
										<view class="u-page__button-item action-button">
											<u-button text="往期开奖" size="mini" plain shape="circle"
												type="error"></u-button>
										</view>
										<view class="u-page__button-item action-button">
											<u-button text="开奖通知" size="mini" plain shape="circle"
												type="error"></u-button>
										</view>
										<view class="u-page__button-item action-button">
											<u-button text="守号订阅" size="mini" plain shape="circle"
												type="error"></u-button>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				srcSsq: '/static/ssq.png',
				srcKl8: '/static/kl8.png',
				redCircleSrc: '/static/redCircle.png',
				blueCircleSrc: '/static/blueCircle.png',
				ssqString: "\u53cc\u8272\u7403   \u7b2c2025021\u671f",
				kl8String: "\u5feb\u4e508   \u7b2c2025049\u671f",
				list: [{
					name: '首页'
				}, {
					name: '福彩'
				}, {
					name: '体彩',
				}, {
					name: '地方彩'
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

	// .swiper-box {
	// 	height: 600px;
	// }
</style>