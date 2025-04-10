<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe type="" emptyText="暂无更多数据">
				<uni-tr>
					<uni-th align="center" class="uni-table-th">奖项</uni-th>
					<uni-th align="center" class="uni-table-th">中奖规则</uni-th>
					<uni-th align="center" class="uni-table-th">中奖注数</uni-th>
					<uni-th align="center" class="uni-table-th">中奖金额(元)</uni-th>
				</uni-tr>
				<uni-tr>
					<uni-td align="center" class="uni-table-td">
						<view>一等奖</view>
					</uni-td>
					<uni-td align="center">
						<image class="image-style" :src="imageUrl"></image>
					</uni-td>
					<uni-td align="center" class="uni-table-td">
						<view>117,920,054</view>
					</uni-td align="center">
					<uni-td align="center" class="uni-table-td">
						<view>16,616,319</view>
					</uni-td>
				</uni-tr>
			</uni-table>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                imageUrl: "/static/jjdzbSsq01.png"
			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.uni-table-th {
		font-size: 12px !important;
		background-color: #f56c6c;
		color: #ffffff;
		line-height: 4px;
	}
	
	.uni-table-td {
		font-size: 12px;
	}
	
	.image-style {
		width: 100px;
		height: 12px;
	}
</style>