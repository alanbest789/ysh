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
const OFFICE_4 = new URL('../assets/images/美国.jpeg', import.meta.url).href
const OFFICE_5 = new URL('../assets/images/办公室1.jpg', import.meta.url).href
const OFFICE_6 = new URL('../assets/images/办公室2.jpg', import.meta.url).href
const OFFICE_7 = new URL('../assets/images/办公室3.jpg', import.meta.url).href
const OFFICE_8 = new URL('../assets/images/办公室4.jpg', import.meta.url).href

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
  {
    id: '5',
    name: '前台',
    imageUrl: OFFICE_5,
  },
  {
    id: '6',
    name: '接待区',
    imageUrl: OFFICE_6,
  },
  {
    id: '7',
    name: '会议室',
    imageUrl: OFFICE_7,
  },
    {
    id: '8',
    name: '办公区',
    imageUrl: OFFICE_8,
  },
]
