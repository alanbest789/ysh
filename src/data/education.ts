// EXPORTS: IEducation, MOCK_EDUCATION
export interface IEducation {
  id: string
  title: string
  description: string
  highlights: {
    title: string
    description: string
  }[]
  stats: {
    label: string
    value: number
    unit: string
  }[]
}

export const MOCK_EDUCATION: IEducation[] = [
  {
    id: '1',
    title: '教育培训',
    description: '依托全职核心编剧团队的实战经验，搭建编剧人才孵化与培训体系，通过导师制与项目实训，帮助新锐创作者掌握短剧、漫剧的创作规律，完成从新人到职业编剧的成长。',
    highlights: [
      {
        title: '编剧基础与爆款创作工作坊',
        description: '系统传授剧本创作方法论与爆款打造技巧'
      },
      {
        title: '行业导师一对一指导与项目实训',
        description: '资深编剧亲授，真实项目边学边练'
      },
      {
        title: '面向新锐编剧的成长培养通道',
        description: '从新人到职业编剧的完整成长路径'
      }
    ],
    stats: [
      {
        label: '合作院校',
        value: 20,
        unit: '+家'
      },
      {
        label: '学员人数',
        value: 1200,
        unit: '+人'
      },
      {
        label: '孵化作品',
        value: 500,
        unit: '+部'
      },
      {
        label: '交付率',
        value: 90,
        unit: '%'
      }
    ]
  }
]