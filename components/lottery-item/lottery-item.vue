<template>
	<view class="container1">
		<view class="container1-1">
			<view>
				<image style="width: 40px; height: 40px;" :src="lotteryItemData.picSrc"></image>
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
					<u-button text="中奖详情" size="mini" plain shape="circle" type="error"></u-button>
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
		padding-bottom: 10px;
	}

	// 球容器
	.container1-2-2 {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding-bottom: 10px;
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
		font-size: 12px;
		font-weight: bold;
	}

	.lotteryDate {
		font-size: 12px;
	}

	.lotteryFrequnency {
		font-size: 12px;
		padding-right: 10px;
	}

	.action-button {
		margin-right: 5px;
	}
</style>