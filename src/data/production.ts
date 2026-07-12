// EXPORTS: IProductionStep, MOCK_PRODUCTION_STEPS, MOCK_PRODUCTION_INTRO
export interface IProductionStep {
  id: string
  step: number
  title: string
  description: string
  icon: string
}

export const MOCK_PRODUCTION_INTRO: string =
  '将优质剧本视觉化，以专业分镜、美术与制作团队，把纸上的故事转化为可看、可传播的漫剧内容，衔接剧本开发与终端播出，让好故事真正走向银幕。'

export const MOCK_PRODUCTION_STEPS: IProductionStep[] = [
  {
    id: '1',
    step: 1,
    title: '剧本开发',
    description: '剧本文本转化为影视叙事结构',
    icon: '📝',
  },
  {
    id: '2',
    step: 2,
    title: '美术创作',
    description: '角色形象与场景美术制作',
    icon: '🎨',
  },
  {
    id: '3',
    step: 3,
    title: '分镜设计',
    description: '镜头语言与节奏规划',
    icon: '🎬',
  },
  {
    id: '4',
    step: 4,
    title: '动效合成',
    description: '动态分镜与音效合成',
    icon: '✨',
  },
  {
    id: '5',
    step: 5,
    title: '后期精修',
    description: '成片校对与质量把关',
    icon: '🔧',
  },
  {
    id: '6',
    step: 6,
    title: '成片交付',
    description: '多渠道分发与上线',
    icon: '🚀',
  },
]