<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  PictureType, 
  getPictureManager, 
  getPicturesByType, 
  searchPictures 
} from './index'

// 响应式数据
const selectedType = ref<PictureType>(PictureType.ARTIST_PORTRAIT)
const pictures = ref<any[]>([])
const searchText = ref('')
const searchResults = ref<any[]>([])

// 获取图片管理器实例
const pictureManager = getPictureManager()

// 获取所有图片类型
const allTypes = Object.values(PictureType)

// 根据类型获取图片
const loadPicturesByType = (type: PictureType) => {
  pictures.value = getPicturesByType(type, 6)
}

// 搜索图片
const handleSearch = () => {
  if (searchText.value.trim()) {
    searchResults.value = searchPictures(searchText.value, 6)
  } else {
    searchResults.value = []
  }
}

// 组件挂载时加载默认图片
onMounted(() => {
  loadPicturesByType(selectedType.value)
})
</script>

<template>
  <div class="picture-test-container">
    <!-- 标题 -->
    <div class="test-header">
      <h2 class="text-2xl font-bold text-black mb-4">静态图片管理模块测试</h2>
    </div>

    <!-- 类型选择 -->
    <div class="type-selector mb-6">
      <h3 class="text-lg font-semibold text-black mb-3">选择图片类型：</h3>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="type in allTypes"
          :key="type"
          @click="selectedType = type; loadPicturesByType(type)"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            selectedType === type
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-100 text-black hover:bg-gray-200'
          ]"
        >
          {{ type.replace('ARTIST_', '').toLowerCase() }}
        </button>
      </div>
    </div>

    <!-- 图片展示 -->
    <div class="pictures-grid mb-8">
      <h3 class="text-lg font-semibold text-black mb-3">
        {{ selectedType.replace('ARTIST_', '').toLowerCase() }} 类型图片：
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="picture in pictures"
          :key="picture.id"
          class="picture-card bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="picture.imageUrl"
            :alt="picture.description"
            class="w-full h-32 object-cover"
          />
          <div class="p-3">
            <p class="text-sm text-black font-medium truncate">{{ picture.description }}</p>
            <div class="flex flex-wrap gap-1 mt-2">
              <span
                v-for="tag in picture.tags"
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-xs text-black rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 搜索功能 -->
    <div class="search-section mb-8">
      <h3 class="text-lg font-semibold text-black mb-3">搜索图片：</h3>
      <div class="flex gap-2 mb-4">
        <input
          v-model="searchText"
          @input="handleSearch"
          type="text"
          placeholder="输入关键词搜索图片..."
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="handleSearch"
          class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          搜索
        </button>
      </div>

      <!-- 搜索结果 -->
      <div v-if="searchResults.length > 0" class="search-results">
        <h4 class="text-md font-semibold text-black mb-3">搜索结果：</h4>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="picture in searchResults"
            :key="picture.id"
            class="picture-card bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              :src="picture.imageUrl"
              :alt="picture.description"
              class="w-full h-32 object-cover"
            />
            <div class="p-3">
              <p class="text-sm text-black font-medium truncate">{{ picture.description }}</p>
              <p class="text-xs text-gray-600 mt-1">{{ picture.picType }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="stats-section">
      <h3 class="text-lg font-semibold text-black mb-3">模块统计：</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="stat-card bg-white rounded-lg shadow-md p-4">
          <p class="text-2xl font-bold text-blue-500">{{ pictureManager.getGallery().totalCount }}</p>
          <p class="text-sm text-black">总图片数</p>
        </div>
        <div class="stat-card bg-white rounded-lg shadow-md p-4">
          <p class="text-2xl font-bold text-green-500">{{ pictureManager.getAllPictureTypes().length }}</p>
          <p class="text-sm text-black">图片类型</p>
        </div>
        <div class="stat-card bg-white rounded-lg shadow-md p-4">
          <p class="text-2xl font-bold text-purple-500">{{ pictureManager.getAllTags().length }}</p>
          <p class="text-sm text-black">标签数量</p>
        </div>
        <div class="stat-card bg-white rounded-lg shadow-md p-4">
          <p class="text-2xl font-bold text-orange-500">{{ pictures.length }}</p>
          <p class="text-sm text-black">当前显示</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.picture-test-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.test-header {
  text-align: center;
  margin-bottom: 30px;
}

.type-selector button {
  border: none;
  cursor: pointer;
}

.picture-card {
  transition: transform 0.2s ease-in-out;
}

.picture-card:hover {
  transform: translateY(-2px);
}

.stat-card {
  text-align: center;
}

.search-results {
  margin-top: 20px;
}
</style> 