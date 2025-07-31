<template>
  <div class="result-page-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100">
    <div class="w-[375px] h-[812px] border border-gray-200 rounded-3xl shadow-xl overflow-hidden flex flex-col relative bg-white">
      <div class="flex-1 flex flex-col justify-center items-center p-6">
        <h1 class="text-2xl font-bold text-black mb-4 tracking-wide">成品展示</h1>
        <p class="text-base text-black mb-8 opacity-70">你的专属艺粉卡片已生成完成，可以保存或分享给朋友。</p>
        <div class="w-full flex flex-col items-center gap-6">
          <!-- 成品卡片展示区 -->
          <div class="relative w-72 h-72 flex items-center justify-center">
            <div :style="{ backgroundColor: backgroundColor }" class="absolute inset-0 rounded-3xl transition-colors duration-300"></div>
            <div class="relative z-10 w-64 h-64 bg-white rounded-2xl shadow-lg overflow-hidden">
              <img :src="cardImage" :alt="cardStyle" class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- 玻璃样式操作按钮 -->
          <div class="flex gap-4 w-full mt-8">
            <button @click="shareCard" class="flex-1 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-black font-bold text-lg shadow-lg hover:scale-105 transition-transform text-center">
              转发
            </button>
            <button @click="saveCard" class="flex-1 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-black font-bold text-lg shadow-lg hover:scale-105 transition-transform text-center">
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// TODO: 实际应从全局状态或路由参数获取
const cardImage = ref('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&ai=anime')
const cardStyle = ref('动漫风')

// 根据图片颜色调整背景色（简化实现）
const backgroundColor = computed(() => {
  // 这里可以根据图片主色调动态计算，暂时使用固定渐变
  return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
})

function shareCard() {
  // TODO: 实现分享功能
  console.log('分享卡片')
}
function saveCard() {
  // TODO: 实现保存功能
  console.log('保存卡片')
}
</script>

<style scoped>
.result-page-container {
  /* 沉浸式体验，渐变背景 */
}
</style> 