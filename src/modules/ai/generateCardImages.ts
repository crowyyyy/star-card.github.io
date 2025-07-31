// AI生成模块 - mock实现

export type AICardStyle = '动漫风' | '电影风' | '剪影风'

export interface AIGenerateParams {
  message: string // 用户输入内容
  artistImage: string // 艺人图片链接
}

export interface AICardImage {
  style: AICardStyle
  imageUrl: string
}

/**
 * 模拟AI生成多风格卡片图片
 * @param params AIGenerateParams
 * @returns Promise<AICardImage[]>
 */
export async function generateAICardImages(params: AIGenerateParams): Promise<AICardImage[]> {
  // mock数据，实际应调用后端AI服务
  const { artistImage } = params
  return [
    {
      style: '动漫风',
      imageUrl: artistImage + '?ai=anime',
    },
    {
      style: '电影风',
      imageUrl: artistImage + '?ai=movie',
    },
    {
      style: '剪影风',
      imageUrl: artistImage + '?ai=silhouette',
    },
  ]
} 