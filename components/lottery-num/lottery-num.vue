<template>
	<view class="lotteryNumContainer">
		<image :src="circleSrc" style="width: 24px; height: 24px;"></image>
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
		padding-right: 5px;
		padding-bottom: 2.5px;
	}

	.lotteryNumber {
		position: absolute;
		color: white;
		font-size: 14px;
		font-weight: bold;
	}
</style>