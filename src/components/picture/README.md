# 静态图片管理模块

## 概述

这个模块为社交艺粉卡片生成应用提供了完整的静态图片管理功能，包括图片数据结构定义、图片查询、分类管理等功能。

## 文件结构

```
picture/
├── types.ts          # TypeScript类型定义
├── data.ts           # 静态图片数据
├── utils.ts          # 工具类和函数
├── index.ts          # 模块入口文件
├── PictureTest.vue   # 测试组件
└── README.md         # 使用说明
```

## 核心功能

### 1. 图片结构体 (Picture)
```typescript
interface Picture {
  id: string           // 图片唯一标识
  description: string  // 图片描述
  imageUrl: string     // 图片链接
  picType: PictureType // 图片类型
  tags?: string[]      // 标签数组
  width?: number       // 图片宽度
  height?: number      // 图片高度
}
```

### 2. 图片类型枚举 (PictureType)
包含15种不同的图片类型：
- `ARTIST_PORTRAIT` - 艺人肖像
- `ARTIST_STAGE` - 舞台表演
- `ARTIST_CASUAL` - 日常照片
- `ARTIST_FASHION` - 时尚写真
- `ARTIST_CONCERT` - 演唱会
- `ARTIST_STUDIO` - 录音室
- `ARTIST_TRAVEL` - 旅行照片
- `ARTIST_WORKOUT` - 运动健身
- `ARTIST_FOOD` - 美食相关
- `ARTIST_PET` - 宠物相关
- `ARTIST_NATURE` - 自然风景
- `ARTIST_URBAN` - 城市街拍
- `ARTIST_VINTAGE` - 复古风格
- `ARTIST_MODERN` - 现代风格
- `ARTIST_ABSTRACT` - 抽象艺术

### 3. 图库结构体 (PictureGallery)
```typescript
interface PictureGallery {
  id: string
  name: string
  description: string
  pictures: Picture[]
  totalCount: number
  createdAt: Date
  updatedAt: Date
}
```

## 使用方法

### 基本导入
```typescript
import { 
  PictureType, 
  getPictureManager, 
  getPicturesByType, 
  getPictureUrlByType,
  searchPictures 
} from '@/components/picture'
```

### 获取图片管理器实例
```typescript
const pictureManager = getPictureManager()
```

### 根据类型获取图片
```typescript
// 获取所有艺人肖像图片
const portraits = getPicturesByType(PictureType.ARTIST_PORTRAIT)

// 限制返回数量
const limitedPortraits = getPicturesByType(PictureType.ARTIST_PORTRAIT, 5)
```

### 根据ID获取图片链接
```typescript
const imageUrl = getPictureUrl('portrait-001')
```

### 根据类型获取图片链接
```typescript
// 获取第一张艺人肖像图片
const firstPortraitUrl = getPictureUrlByType(PictureType.ARTIST_PORTRAIT, 0)

// 获取第二张艺人肖像图片
const secondPortraitUrl = getPictureUrlByType(PictureType.ARTIST_PORTRAIT, 1)
```

### 搜索图片
```typescript
// 搜索包含"优雅"关键词的图片
const elegantPictures = searchPictures('优雅', 10)
```

### 复杂查询
```typescript
const result = pictureManager.queryPictures({
  picType: PictureType.ARTIST_PORTRAIT,
  tags: ['优雅', '专业'],
  searchText: '艺人',
  limit: 10,
  offset: 0
})
```

### 获取随机图片
```typescript
// 获取3张随机图片
const randomPictures = pictureManager.getRandomPictures(3)
```

### 获取推荐图片
```typescript
// 基于艺人肖像类型获取推荐图片
const recommended = pictureManager.getRecommendedPictures(PictureType.ARTIST_PORTRAIT, 5)
```

## 在Vue组件中使用

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PictureType, getPicturesByType } from '@/components/picture'

const pictures = ref([])

onMounted(() => {
  pictures.value = getPicturesByType(PictureType.ARTIST_PORTRAIT, 6)
})
</script>

<template>
  <div class="pictures-grid">
    <div 
      v-for="picture in pictures" 
      :key="picture.id"
      class="picture-card"
    >
      <img :src="picture.imageUrl" :alt="picture.description" />
      <p>{{ picture.description }}</p>
    </div>
  </div>
</template>
```

## 数据来源

所有图片数据使用Unsplash.com的开源图片作为占位符，图片链接格式为：
```
https://images.unsplash.com/photo-[ID]?w=[width]&h=[height]&fit=crop
```

## 扩展功能

### 添加新的图片类型
1. 在`types.ts`中的`PictureType`枚举中添加新类型
2. 在`data.ts`中添加对应的图片数据
3. 更新相关文档

### 添加新的图片数据
在`data.ts`的`STATIC_PICTURES`数组中添加新的图片对象，确保包含所有必需字段。

### 自定义查询逻辑
可以扩展`PictureManager`类，添加新的查询方法或修改现有逻辑。

## 注意事项

1. 所有图片数据都是静态的，存储在内存中
2. 图片链接来自Unsplash，需要网络连接
3. 建议在生产环境中使用本地图片资源
4. 模块使用单例模式，确保全局只有一个实例 