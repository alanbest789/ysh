// EXPORTS: IAboutOffice, MOCK_ABOUT_INTRO, MOCK_ABOUT_OFFICES

export interface IAboutOffice {
  id: string
  name: string
  imageUrl: string
}

export const MOCK_ABOUT_INTRO: string =
  '迎胜汇在重庆、香港、马来西亚、美国多地布局，构建全球化的创作与制作网络。'

const OFFICE_1 = new URL('../assets/images/重庆云领国际.jpg', import.meta.url).href
const OFFICE_2 = new URL('../assets/images/香港ICC.jpeg', import.meta.url).href
const OFFICE_3 = new URL('../assets/images/马来西亚新山.jpeg', import.meta.url).href
const OFFICE_4 = new URL('../assets/images/美国.jpg', import.meta.url).href


export const MOCK_ABOUT_OFFICES: IAboutOffice[] = [
  {
    id: '1',
    name: '重庆总部',
    imageUrl: OFFICE_1,
  },
  {
    id: '2',
    name: '香港分部',
    imageUrl: OFFICE_2,
  },
  {
    id: '3',
    name: '马来西亚分部',
    imageUrl: OFFICE_3,
  },
  {
    id: '4',
    name: '美国分部',
    imageUrl: OFFICE_4,
  },
]
