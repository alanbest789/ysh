// EXPORTS: ISample, MOCK_SAMPLES

export interface ISample {
  id: string
  name: string
  category: '文旅商业片' | 'AIGC仿真人剧' | '3D漫剧' | '2D漫剧' | '海外仿真人剧'
  description: string
  thumbnailUrl: string
}

const SAMPLE_1 = new URL('../assets/videos/文旅商业片.png', import.meta.url).href
const SAMPLE_2 = new URL('../assets/videos/AIGC仿真人剧.png', import.meta.url).href
const SAMPLE_3 = new URL('../assets/videos/3D漫剧.png', import.meta.url).href
const SAMPLE_4 = new URL('../assets/videos/2D漫剧.png', import.meta.url).href
const SAMPLE_5 = new URL('../assets/videos/海外仿真人剧.png', import.meta.url).href


export const MOCK_SAMPLES: ISample[] = [
  {
    id: '1',
    name: '文旅商业片',
    category: '文旅商业片',
    description: '融合国风美学与地方文化，打造沉浸式文旅宣传影片',
    thumbnailUrl: SAMPLE_1,
  },
  {
    id: '2',
    name: 'AIGC仿真人剧',
    category: 'AIGC仿真人剧',
    description: 'AI驱动的高仿真人短剧，高效产出精品内容',
    thumbnailUrl: SAMPLE_2,
  },
  {
    id: '3',
    name: '3D漫剧',
    category: '3D漫剧',
    description: '立体视觉呈现，打造沉浸式国风漫剧体验',
    thumbnailUrl: SAMPLE_3,
  },
  {
    id: '4',
    name: '2D漫剧',
    category: '2D漫剧',
    description: '精致二维画风，演绎东方美学故事',
    thumbnailUrl: SAMPLE_4,
  },
  {
    id: '5',
    name: '海外仿真人剧',
    category: '海外仿真人剧',
    description: '面向海外市场的多语种仿真人剧集制作',
    thumbnailUrl: SAMPLE_5,
  },
]
