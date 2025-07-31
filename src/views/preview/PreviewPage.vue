<template>
  <div class="preview-page-container min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100">
    <div class="w-[375px] h-[812px] border border-gray-200 rounded-3xl shadow-xl overflow-hidden flex flex-col relative">
      <!-- 艺人专属浅色背景 -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" :style="{ backgroundImage: `url(${artistBackground})` }"></div>
      
      <div class="flex-1 flex flex-col justify-center items-center p-6 relative z-10">
        <!-- 返回按钮 -->
        <button @click="goBack" class="absolute top-6 left-6 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-200 z-20">
          <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
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
          <!-- 风格选择组件 -->
          <div class="bg-white/90 rounded-2xl shadow-lg p-4 backdrop-blur-sm">
            <div class="grid grid-cols-3 gap-3 mb-4">
              <div v-for="(style, _) in currentPageStyles" :key="style.id" 
                @click="selectStyle(style.id)"
                :class="['flex flex-col items-center gap-2 cursor-pointer transition-all duration-200', 
                  selectedStyle === style.id ? 'scale-105' : 'hover:scale-102']">
                <!-- 风格示例图 -->
                <div class="w-16 h-16 rounded-lg overflow-hidden border-2" 
                  :class="selectedStyle === style.id ? 'border-purple-400 shadow-lg' : 'border-gray-200'">
                  <img :src="style.imageUrl" :alt="style.name" class="w-full h-full object-cover" />
                </div>
                <!-- 风格名称 -->
                <div class="text-xs text-center px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                  {{ style.name }}
                </div>
              </div>
            </div>
            
            <!-- 分页指示器 -->
            <div class="flex justify-between items-center">
              <button @click="prevPage" :disabled="currentPage === 0" 
                class="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition disabled:opacity-30">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <div class="flex gap-1">
                <div v-for="page in totalPages" :key="page" 
                  :class="['w-2 h-2 rounded-full', currentPage === page - 1 ? 'bg-purple-500' : 'bg-gray-300']"></div>
              </div>
              <button @click="nextPage" :disabled="currentPage === totalPages - 1"
                class="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition disabled:opacity-30">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- 字体大小调整组件 -->
          <div class="bg-white/90 rounded-2xl shadow-lg p-4 backdrop-blur-sm">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm text-purple-700 font-semibold">字体大小</span>
              <span class="text-xs text-gray-500">{{ fontSize }}px</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-xs text-gray-500">小</span>
              <div class="flex-1 relative">
                <div class="h-1 bg-gray-200 rounded-full">
                  <div class="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" 
                    :style="{ width: `${(fontSize - 12) / 8 * 100}%` }"></div>
                </div>
                <input 
                  v-model="fontSize" 
                  type="range" 
                  min="12" 
                  max="20" 
                  step="1"
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <span class="text-xs text-gray-500">大</span>
            </div>
          </div>
        </div>
        
        <router-link to="/result" class="block mt-8 mb-6 w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform text-center">
          生成卡片
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 艺人专属浅色背景图
const artistBackground = ref('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1200&fit=crop')

// 风格数据
const styles = ref([
  { id: 1, name: '动漫风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=anime' },
  { id: 2, name: '电影风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=movie' },
  { id: 3, name: '剪影风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=silhouette' },
  { id: 4, name: '复古风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=vintage' },
  { id: 5, name: '现代风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=modern' },
  { id: 6, name: '艺术风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=artistic' },
  { id: 7, name: '简约风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=minimal' },
  { id: 8, name: '梦幻风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=dreamy' },
  { id: 9, name: '科技风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=tech' },
  { id: 10, name: '自然风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=nature' },
  { id: 11, name: '时尚风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=fashion' },
  { id: 12, name: '经典风', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&ai=classic' },
])

const currentPage = ref(0)
const selectedStyle = ref(1)
const fontSize = ref(16)

const stylesPerPage = 6
const totalPages = Math.ceil(styles.value.length / stylesPerPage)

const currentPageStyles = computed(() => {
  const start = currentPage.value * stylesPerPage
  const end = start + stylesPerPage
  return styles.value.slice(start, end)
})

function selectStyle(styleId: number) {
  selectedStyle.value = styleId
}

function prevPage() {
  if (currentPage.value > 0) currentPage.value--
}

function nextPage() {
  if (currentPage.value < totalPages - 1) currentPage.value++
}

function goBack() {
  router.back()
}

function shareCurrent() {
  // TODO: 实现转发功能
  console.log('转发当前选择内容')
}
</script>

<style scoped>
.preview-page-container {
  /* 沉浸式体验，艺人专属背景 */
}
</style> 