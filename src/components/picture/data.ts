import type{ Picture, PictureGallery } from './types'
import { PictureType } from './types'

/**
 * 静态图片数据 - 使用Unsplash图片作为占位符
 */
export const STATIC_PICTURES: Picture[] = [
  // 艺人肖像类
  {
    id: 'portrait-001',
    description: '优雅的艺人肖像照片',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    picType: PictureType.ARTIST_PORTRAIT,
    tags: ['肖像', '优雅', '专业'],
    width: 400,
    height: 600
  },
  {
    id: 'portrait-002',
    description: '充满魅力的艺人特写',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    picType: PictureType.ARTIST_PORTRAIT,
    tags: ['特写', '魅力', '自信'],
    width: 400,
    height: 600
  },
  {
    id: 'portrait-003',
    description: '艺术风格的艺人肖像',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    picType: PictureType.ARTIST_PORTRAIT,
    tags: ['艺术', '风格', '独特'],
    width: 400,
    height: 600
  },

  // 舞台表演类
  {
    id: 'stage-001',
    description: '激情四射的舞台表演',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_STAGE,
    tags: ['舞台', '表演', '激情'],
    width: 600,
    height: 400
  },
  {
    id: 'stage-002',
    description: '聚光灯下的艺人演出',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_STAGE,
    tags: ['聚光灯', '演出', '专业'],
    width: 600,
    height: 400
  },

  // 日常照片类
  {
    id: 'casual-001',
    description: '轻松自然的日常瞬间',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_CASUAL,
    tags: ['日常', '自然', '轻松'],
    width: 500,
    height: 500
  },
  {
    id: 'casual-002',
    description: '温馨的日常生活场景',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_CASUAL,
    tags: ['温馨', '生活', '真实'],
    width: 500,
    height: 500
  },

  // 时尚写真类
  {
    id: 'fashion-001',
    description: '时尚前卫的写真大片',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop',
    picType: PictureType.ARTIST_FASHION,
    tags: ['时尚', '前卫', '大片'],
    width: 600,
    height: 800
  },
  {
    id: 'fashion-002',
    description: '高端时尚杂志风格',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop',
    picType: PictureType.ARTIST_FASHION,
    tags: ['高端', '杂志', '风格'],
    width: 600,
    height: 800
  },

  // 演唱会类
  {
    id: 'concert-001',
    description: '万人演唱会的震撼场面',
    imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop',
    picType: PictureType.ARTIST_CONCERT,
    tags: ['演唱会', '震撼', '万人'],
    width: 800,
    height: 500
  },
  {
    id: 'concert-002',
    description: '音乐节现场的热烈氛围',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=500&fit=crop',
    picType: PictureType.ARTIST_CONCERT,
    tags: ['音乐节', '热烈', '氛围'],
    width: 800,
    height: 500
  },

  // 录音室类
  {
    id: 'studio-001',
    description: '专业录音室的创作环境',
    imageUrl: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_STUDIO,
    tags: ['录音室', '专业', '创作'],
    width: 600,
    height: 400
  },
  {
    id: 'studio-002',
    description: '音乐制作的工作场景',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_STUDIO,
    tags: ['制作', '工作', '专业'],
    width: 600,
    height: 400
  },

  // 旅行照片类
  {
    id: 'travel-001',
    description: '世界各地的旅行足迹',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_TRAVEL,
    tags: ['旅行', '世界', '足迹'],
    width: 600,
    height: 400
  },
  {
    id: 'travel-002',
    description: '异国风情的旅行记忆',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_TRAVEL,
    tags: ['异国', '风情', '记忆'],
    width: 600,
    height: 400
  },

  // 运动健身类
  {
    id: 'workout-001',
    description: '充满活力的运动瞬间',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_WORKOUT,
    tags: ['运动', '活力', '健康'],
    width: 500,
    height: 500
  },
  {
    id: 'workout-002',
    description: '健身房的专注训练',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_WORKOUT,
    tags: ['健身', '专注', '训练'],
    width: 500,
    height: 500
  },

  // 美食相关类
  {
    id: 'food-001',
    description: '精致的美食分享',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_FOOD,
    tags: ['美食', '精致', '分享'],
    width: 500,
    height: 500
  },
  {
    id: 'food-002',
    description: '温馨的用餐时光',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_FOOD,
    tags: ['用餐', '温馨', '时光'],
    width: 500,
    height: 500
  },

  // 宠物相关类
  {
    id: 'pet-001',
    description: '与宠物的温馨互动',
    imageUrl: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_PET,
    tags: ['宠物', '互动', '温馨'],
    width: 500,
    height: 500
  },
  {
    id: 'pet-002',
    description: '可爱的宠物伙伴',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_PET,
    tags: ['伙伴', '可爱', '陪伴'],
    width: 500,
    height: 500
  },

  // 自然风景类
  {
    id: 'nature-001',
    description: '大自然的壮丽景色',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_NATURE,
    tags: ['自然', '壮丽', '景色'],
    width: 600,
    height: 400
  },
  {
    id: 'nature-002',
    description: '宁静的自然风光',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_NATURE,
    tags: ['宁静', '风光', '自然'],
    width: 600,
    height: 400
  },

  // 城市街拍类
  {
    id: 'urban-001',
    description: '现代都市的街拍风格',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_URBAN,
    tags: ['都市', '街拍', '现代'],
    width: 600,
    height: 400
  },
  {
    id: 'urban-002',
    description: '城市生活的精彩瞬间',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
    picType: PictureType.ARTIST_URBAN,
    tags: ['城市', '生活', '精彩'],
    width: 600,
    height: 400
  },

  // 复古风格类
  {
    id: 'vintage-001',
    description: '复古怀旧的经典风格',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_VINTAGE,
    tags: ['复古', '怀旧', '经典'],
    width: 500,
    height: 500
  },
  {
    id: 'vintage-002',
    description: '老照片般的复古质感',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_VINTAGE,
    tags: ['老照片', '质感', '复古'],
    width: 500,
    height: 500
  },

  // 现代风格类
  {
    id: 'modern-001',
    description: '现代简约的设计风格',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_MODERN,
    tags: ['现代', '简约', '设计'],
    width: 500,
    height: 500
  },
  {
    id: 'modern-002',
    description: '时尚现代的视觉风格',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_MODERN,
    tags: ['时尚', '现代', '视觉'],
    width: 500,
    height: 500
  },

  // 抽象艺术类
  {
    id: 'abstract-001',
    description: '抽象艺术的创意表达',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_ABSTRACT,
    tags: ['抽象', '艺术', '创意'],
    width: 500,
    height: 500
  },
  {
    id: 'abstract-002',
    description: '充满想象力的抽象作品',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop',
    picType: PictureType.ARTIST_ABSTRACT,
    tags: ['想象力', '抽象', '作品'],
    width: 500,
    height: 500
  }
]

/**
 * 创建静态图库
 */
export const STATIC_GALLERY: PictureGallery = {
  id: 'static-gallery-001',
  name: '艺人图片库',
  description: '包含各种类型的艺人图片，用于社交艺粉卡片生成',
  pictures: STATIC_PICTURES,
  totalCount: STATIC_PICTURES.length,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date()
} 