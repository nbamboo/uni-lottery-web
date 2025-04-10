<template>
	<view class="container1">
		<view class="container1-1">
			<view>
				<image style="width: 80rpx; height: 80rpx;" :src="lotteryItemData.picSrc"></image>
			</view>
		</view>
		<view class="container1-2">
			<view class="container1-2-1">
				<view class="lotteryDes">{{lotteryItemData.lotteryDes}}</view>
				<view class="lotteryDate">{{lotteryItemData.lotteryDate}}</view>
				<view class="lotteryFrequnency">{{lotteryItemData.lotteryFrequnency}}</view>
			</view>
			<view class="container1-2-2">
				<lotteryNum class="lotteryNum"  v-for="(item, index) in lotteryItemData.lotteryNumDataArr" :key="index"
					:lotteryNumData="item"></lotteryNum>
			</view>
			<view class="container1-2-3">
				<view class="u-page__button-item action-button">
					<u-button text="中奖详情" size="mini" plain shape="circle" type="error" @click="detailClick"></u-button>
				</view>
				<view class="u-page__button-item action-button">
					<u-button text="往期开奖" size="mini" plain shape="circle" type="error"></u-button>
				</view>
				<view class="u-page__button-item action-button">
					<u-button text="开奖通知" size="mini" plain shape="circle" type="error"></u-button>
				</view>
				<view class="u-page__button-item action-button">
					<u-button text="守号订阅" size="mini" plain shape="circle" type="error"></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import lotteryNum from '@/components/lottery-num/lottery-num.vue'
	export default {
		components: {
			lotteryNum
		},
		name: "lottery-item",
		props: {
		  lotteryItemData: {
		    type: Object,
		    default: () => ({ picSrc: '' })
		  }
		},
		data() {
			return {};
		},
		methods: {
			detailClick() {
				uni.navigateTo({
					url: "/pages/detail/detail"
				})
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
		padding: 20rpx;
		margin-bottom: 20rpx;
		box-shadow: 4rpx 4rpx 20rpx rgba(0, 0, 0, 0.1);

	}

	//图片容器
	.container1-1 {
		width: 15vw;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

    //lottery信息容器
	.container1-2 {
		width: 85vw;
	}

	// 文字容器
	.container1-2-1 {
		display: flex;
		justify-content: space-between;
		padding-bottom: 20rpx;
	}

	// 球容器
	.container1-2-2 {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding-bottom: 20rpx;
	}

	//按钮容器
	.container1-2-3 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.lotteryNum {
		width: 10%;
	}

	.lotteryDes {
		font-size: 26rpx;
		font-weight: bold;
	}

	.lotteryDate {
		font-size: 26rpx;
	}

	.lotteryFrequnency {
		font-size: 26rpx;
		padding-right: 20rpx;
	}

	.action-button {
		margin-right: 10rpx;
	}
</style>