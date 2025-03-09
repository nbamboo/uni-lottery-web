<template>
  <view>
    <!-- 只有 tabList 加载完成后才渲染 u-tabs -->
    <u-tabs v-if="isTabsReady" :list="tabList" :current="currentTab" @change="changeTab"></u-tabs>

    <swiper class="swiper-box" :current="currentTab" @change="swiperChange">
      <swiper-item v-for="(item, index) in tabList" :key="index">
        <view class="tab-content">{{ item.name }} 内容</view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabList: [],
      currentTab: 0, 
      isTabsReady: false, // 控制 tabs 是否渲染
    };
  },
  onLoad() {
    // 模拟获取数据
    setTimeout(() => {
      this.tabList = [
        { name: "最新" },
        { name: "科技" },
        { name: "体育" },
      ];
      this.$nextTick(() => {
        this.isTabsReady = true; // 确保 tabs 数据加载后才渲染
      });
    }, 500);
  },
  methods: {
    changeTab(index) {
      this.currentTab = Number(index);
    },
    swiperChange(e) {
      this.currentTab = Number(e.detail.current);
    },
  },
};
</script>

<style>
.swiper-box {
  height: 400rpx;
}
.tab-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 36rpx;
}
</style>
