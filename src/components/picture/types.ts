/**
 * 图片结构体
 */
export interface Picture {
  id: string
  description: string
  imageUrl: string
  picType: PictureType
  tags?: string[]
  width?: number
  height?: number
}

/**
 * 图片类型常量
 */
export const PictureType = {
  ARTIST_PORTRAIT: 'artist_portrait',    // 艺人肖像
  ARTIST_STAGE: 'artist_stage',         // 舞台表演
  ARTIST_CASUAL: 'artist_casual',       // 日常照片
  ARTIST_FASHION: 'artist_fashion',     // 时尚写真
  ARTIST_CONCERT: 'artist_concert',     // 演唱会
  ARTIST_STUDIO: 'artist_studio',       // 录音室
  ARTIST_TRAVEL: 'artist_travel',       // 旅行照片
  ARTIST_WORKOUT: 'artist_workout',     // 运动健身
  ARTIST_FOOD: 'artist_food',           // 美食相关
  ARTIST_PET: 'artist_pet',             // 宠物相关
  ARTIST_NATURE: 'artist_nature',       // 自然风景
  ARTIST_URBAN: 'artist_urban',         // 城市街拍
  ARTIST_VINTAGE: 'artist_vintage',     // 复古风格
  ARTIST_MODERN: 'artist_modern',       // 现代风格
  ARTIST_ABSTRACT: 'artist_abstract'    // 抽象艺术
} as const

export type PictureType = typeof PictureType[keyof typeof PictureType]

/**
 * 图库结构体
 */
export interface PictureGallery {
  id: string
  name: string
  description: string
  pictures: Picture[]
  totalCount: number
  createdAt: Date
  updatedAt: Date
}

/**
 * 图片查询参数
 */
export interface PictureQueryParams {
  picType?: PictureType
  tags?: string[]
  limit?: number
  offset?: number
  searchText?: string
}

/**
 * 图片查询结果
 */
export interface PictureQueryResult {
  pictures: Picture[]
  totalCount: number
  hasMore: boolean
} 