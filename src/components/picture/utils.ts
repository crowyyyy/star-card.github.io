import { type Picture, PictureType, type PictureQueryParams, type PictureQueryResult } from './types'
import { STATIC_PICTURES, STATIC_GALLERY } from './data'

/**
 * 图片管理工具类
 */
export class PictureManager {
  private static instance: PictureManager
  private pictures: Picture[] = STATIC_PICTURES
  private gallery = STATIC_GALLERY

  /**
   * 获取单例实例
   */
  public static getInstance(): PictureManager {
    if (!PictureManager.instance) {
      PictureManager.instance = new PictureManager()
    }
    return PictureManager.instance
  }

  /**
   * 根据图片类型获取图片列表
   * @param picType 图片类型
   * @param limit 限制数量
   * @returns 图片列表
   */
  public getPicturesByType(picType: PictureType, limit?: number): Picture[] {
    const filteredPictures = this.pictures.filter(picture => picture.picType === picType)
    return limit ? filteredPictures.slice(0, limit) : filteredPictures
  }

  /**
   * 根据标签获取图片列表
   * @param tags 标签数组
   * @param limit 限制数量
   * @returns 图片列表
   */
  public getPicturesByTags(tags: string[], limit?: number): Picture[] {
    const filteredPictures = this.pictures.filter(picture => 
      picture.tags && tags.some(tag => picture.tags!.includes(tag))
    )
    return limit ? filteredPictures.slice(0, limit) : filteredPictures
  }

  /**
   * 根据ID获取单张图片
   * @param id 图片ID
   * @returns 图片对象或null
   */
  public getPictureById(id: string): Picture | null {
    return this.pictures.find(picture => picture.id === id) || null
  }

  /**
   * 获取图片链接
   * @param id 图片ID
   * @returns 图片链接或null
   */
  public getPictureUrl(id: string): string | null {
    const picture = this.getPictureById(id)
    return picture ? picture.imageUrl : null
  }

  /**
   * 根据类型获取图片链接
   * @param picType 图片类型
   * @param index 索引（可选，默认返回第一张）
   * @returns 图片链接或null
   */
  public getPictureUrlByType(picType: PictureType, index: number = 0): string | null {
    const pictures = this.getPicturesByType(picType)
    return pictures[index] ? pictures[index].imageUrl : null
  }

  /**
   * 搜索图片
   * @param searchText 搜索文本
   * @param limit 限制数量
   * @returns 图片列表
   */
  public searchPictures(searchText: string, limit?: number): Picture[] {
    const filteredPictures = this.pictures.filter(picture => 
      picture.description.toLowerCase().includes(searchText.toLowerCase()) ||
      (picture.tags && picture.tags.some(tag => 
        tag.toLowerCase().includes(searchText.toLowerCase())
      ))
    )
    return limit ? filteredPictures.slice(0, limit) : filteredPictures
  }

  /**
   * 复杂查询图片
   * @param params 查询参数
   * @returns 查询结果
   */
  public queryPictures(params: PictureQueryParams): PictureQueryResult {
    let filteredPictures = [...this.pictures]

    // 按类型过滤
    if (params.picType) {
      filteredPictures = filteredPictures.filter(picture => picture.picType === params.picType)
    }

    // 按标签过滤
    if (params.tags && params.tags.length > 0) {
      filteredPictures = filteredPictures.filter(picture => 
        picture.tags && params.tags!.some(tag => picture.tags!.includes(tag))
      )
    }

    // 按搜索文本过滤
    if (params.searchText) {
      filteredPictures = filteredPictures.filter(picture => 
        picture.description.toLowerCase().includes(params.searchText!.toLowerCase()) ||
        (picture.tags && picture.tags.some(tag => 
          tag.toLowerCase().includes(params.searchText!.toLowerCase())
        ))
      )
    }

    const totalCount = filteredPictures.length
    const offset = params.offset || 0
    const limit = params.limit || totalCount

    // 分页
    const paginatedPictures = filteredPictures.slice(offset, offset + limit)
    const hasMore = offset + limit < totalCount

    return {
      pictures: paginatedPictures,
      totalCount,
      hasMore
    }
  }

  /**
   * 获取所有图片类型
   * @returns 图片类型数组
   */
  public getAllPictureTypes(): PictureType[] {
    return Object.values(PictureType)
  }

  /**
   * 获取所有标签
   * @returns 标签数组
   */
  public getAllTags(): string[] {
    const allTags = new Set<string>()
    this.pictures.forEach(picture => {
      if (picture.tags) {
        picture.tags.forEach(tag => allTags.add(tag))
      }
    })
    return Array.from(allTags)
  }

  /**
   * 获取图库信息
   * @returns 图库对象
   */
  public getGallery() {
    return this.gallery
  }

  /**
   * 获取随机图片
   * @param count 数量
   * @returns 随机图片数组
   */
  public getRandomPictures(count: number = 1): Picture[] {
    const shuffled = [...this.pictures].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  /**
   * 获取推荐图片（基于类型）
   * @param picType 图片类型
   * @param count 数量
   * @returns 推荐图片数组
   */
  public getRecommendedPictures(picType: PictureType, count: number = 3): Picture[] {
    const sameTypePictures = this.getPicturesByType(picType)
    const otherTypePictures = this.pictures.filter(picture => picture.picType !== picType)
    
    // 混合同类型和其他类型的图片
    const mixedPictures = [
      ...sameTypePictures.slice(0, Math.ceil(count / 2)),
      ...otherTypePictures.slice(0, Math.floor(count / 2))
    ]
    
    return mixedPictures.slice(0, count)
  }
}

/**
 * 便捷函数：获取图片管理器实例
 */
export const getPictureManager = (): PictureManager => {
  return PictureManager.getInstance()
}

/**
 * 便捷函数：根据ID获取图片链接
 */
export const getPictureUrl = (id: string): string | null => {
  return getPictureManager().getPictureUrl(id)
}

/**
 * 便捷函数：根据类型获取图片链接
 */
export const getPictureUrlByType = (picType: PictureType, index: number = 0): string | null => {
  return getPictureManager().getPictureUrlByType(picType, index)
}

/**
 * 便捷函数：根据类型获取图片列表
 */
export const getPicturesByType = (picType: PictureType, limit?: number): Picture[] => {
  return getPictureManager().getPicturesByType(picType, limit)
}

/**
 * 便捷函数：搜索图片
 */
export const searchPictures = (searchText: string, limit?: number): Picture[] => {
  return getPictureManager().searchPictures(searchText, limit)
} 