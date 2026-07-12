// EXPORTS: IScriptSection, IScriptHighlight, IScriptTalentMatrix, MOCK_SCRIPT_SECTION, MOCK_SCRIPT_HIGHLIGHTS, MOCK_SCRIPT_TALENT_MATRIX
export interface IScriptSection {
  id: string
  title: string
  description: string
  buttonText: string
  buttonUrl: string
}

export interface IScriptHighlight {
  id: string
  icon: string
  title: string
  description: string
}

export interface IScriptTalentMatrix {
  id: string
  dimension: 'fulltime' | 'signed' | 'cooperation'
  title: string
  count: string
  description: string
}

export const MOCK_SCRIPT_SECTION: IScriptSection = {
  id: '1',
  title: '剧本开发',
  description: '汇聚行业资深精英编剧，整合全职、签约、合作三位一体的立体化人才矩阵，提供从策划、大纲到成稿的一站式剧本创作服务，覆盖男频、女频与节日题材，把控内容节奏、质量与题材风险。',
  buttonText: '进入剧本库',
  buttonUrl: 'https://ra3emxq6j5h.feishu.cn/wiki/H4XmwCX1tioJD4kvxDScP4XsnDg?table=tblZJhtLHFAZtwZC&view=vewuuUphrw'
}

export const MOCK_SCRIPT_HIGHLIGHTS: IScriptHighlight[] = [
  {
    id: '1',
    icon: 'script',
    title: '20名全职核心编剧',
    description: '多年一线实战经验'
  },
  {
    id: '2',
    icon: 'star',
    title: '头部编剧领航',
    description: '言传身教孵化新锐力量'
  },
  {
    id: '3',
    icon: 'library',
    title: '规范可售剧本库',
    description: '标签化分类，快速检索'
  }
]

export const MOCK_SCRIPT_TALENT_MATRIX: IScriptTalentMatrix[] = [
  {
    id: '1',
    dimension: 'fulltime',
    title: '全职核心',
    count: '20人',
    description: '深耕行业脉络，公司稳定产出的核心引擎'
  },
  {
    id: '2',
    dimension: 'signed',
    title: '签约矩阵',
    count: '50+',
    description: '新锐编剧与资深创作者，持续注入创作活力'
  },
  {
    id: '3',
    dimension: 'cooperation',
    title: '合作网络',
    count: '全球',
    description: '全球合作资源，跨界地域的多元创作生态'
  }
]