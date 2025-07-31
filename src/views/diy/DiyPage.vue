<template>
  <div class="diy-page-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100">
    <div class="w-[375px] h-[812px] border border-gray-200 rounded-3xl shadow-xl overflow-hidden flex flex-col relative">
      <!-- 艺人专属浅色背景 -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" :style="{ backgroundImage: `url(${artistBackground})` }"></div>
      
      <div class="flex-1 flex flex-col justify-center items-center p-6 relative z-10">
        <!-- 艺人专属标题 -->
        <div class="flex items-center gap-3 mb-6">
          <h1 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-wide drop-shadow-lg">
            黄子弘凡专属星芒卡
          </h1>
          <button @click="shareCurrent" class="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-200">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
            </svg>
          </button>
        </div>
        
        <div class="w-full flex flex-col gap-6">
          <!-- 艺人图片主预览区 -->
          <div class="bg-white/90 rounded-2xl shadow-lg p-4 flex flex-col items-center gap-2 relative backdrop-blur-sm">
            <div class="relative w-64 h-64 flex items-center justify-center">
              <button @click="prevImage" class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow hover:bg-purple-100 transition disabled:opacity-30" :disabled="currentIndex === 0">
                <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <img :src="currentImage.imageUrl" :alt="currentImage.description" class="w-64 h-64 object-cover rounded-2xl shadow-lg" />
              <button @click="nextImage" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow hover:bg-purple-100 transition disabled:opacity-30" :disabled="currentIndex === images.length - 1">
                <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
            <div class="mt-2 text-center text-purple-700 text-sm font-medium">{{ currentImage.description }}</div>
          </div>
          
          <!-- 底部横向小预览列表 -->
          <div class="flex gap-2 overflow-x-auto pb-2 justify-center">
            <div v-for="(img, idx) in images" :key="img.id" @click="selectImage(idx)"
              :class="['w-14 h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition', currentIndex === idx ? 'border-purple-400 shadow-lg' : 'border-transparent']">
              <img :src="img.imageUrl" :alt="img.description" class="w-full h-full object-cover" />
            </div>
          </div>
          
          <!-- 心情输入框 -->
          <div class="bg-white/90 rounded-2xl shadow-lg p-4 flex flex-col gap-2 backdrop-blur-sm">
            <label class="text-sm text-purple-700 font-semibold mb-2">说说你当下的心情/有什么想说的话？</label>
            <textarea 
              v-model="nickname" 
              maxlength="100" 
              placeholder="分享你的心情，让AI为你定制专属卡片..." 
              class="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white/80 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
              rows="3"
              style="font-size: 16px; line-height: 1.5;"
            ></textarea>
          </div>
        </div>
        
        <router-link to="/preview" class="block mt-8 mb-6 w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform text-center">
          预览
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getPicturesByType, PictureType } from '../../components/picture'

// 只用艺人肖像图片作为示例
const images = getPicturesByType(PictureType.ARTIST_PORTRAIT, 8)
const currentIndex = ref(0)
const currentImage = computed(() => images[currentIndex.value])

// 艺人专属浅色背景图
const artistBackground = ref('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1200&fit=crop')

function prevImage() {
  if (currentIndex.value > 0) currentIndex.value--
}
function nextImage() {
  if (currentIndex.value < images.length - 1) currentIndex.value++
}
function selectImage(idx: number) {
  currentIndex.value = idx
}
function shareCurrent() {
  // TODO: 实现转发功能
  console.log('转发当前DIY内容')
}

const nickname = ref('')
</script>

<style scoped>
.diy-page-container {
  /* 沉浸式体验，艺人专属背景 */
}
</style> 