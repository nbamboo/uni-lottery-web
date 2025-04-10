<template>
	<view class="lotteryNumContainer">
		<image :src="circleSrc" style="width: 48rpx; height: 48rpx;"></image>
		<view class="lotteryNumber">{{lotteryNumData.number}}</view>
	</view>
</template>

<script>
	export default {
		name: "lottery-num",
		props: ['lotteryNumData'],
		computed: {
			circleSrc() {
				return this.selectCircleSrc(this.lotteryNumData.color);
			}
		},
		data() {
			return {				
			};
		},
		methods: {
			selectCircleSrc(color) {
				// 根据颜色返回不同的图片路径
				if (color === 'red') {
					return '/static/redCircle.png';
				} else if (color === 'blue') {
					return '/static/blueCircle.png';
				} else {
					return '/static/defaultCircle.png';
				}
			}
		}
	}
</script>

<style lang="scss">
	.lotteryNumContainer {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 10rpx;
		padding-bottom: 5rpx;
	}

	.lotteryNumber {
		position: absolute;
		color: white;
		font-size: 28rpx;
		font-weight: bold;
	}
</style>