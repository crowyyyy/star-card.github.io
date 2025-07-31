/**
 * 静态图片管理模块
 * 用于管理社交艺粉卡片生成应用中的静态图片资源
 */

// 导出类型定义
export type {
  Picture,
  PictureGallery,
  PictureQueryParams,
  PictureQueryResult
} from './types'

// 导出枚举
export { PictureType } from './types'

// 导出数据
export { STATIC_PICTURES, STATIC_GALLERY } from './data'

// 导出工具类和函数
export {
  PictureManager,
  getPictureManager,
  getPictureUrl,
  getPictureUrlByType,
  getPicturesByType,
  searchPictures
} from './utils'

// 默认导出图片管理器实例
export { getPictureManager as default } from './utils' 