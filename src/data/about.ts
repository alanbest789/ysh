// EXPORTS: IAboutOffice, MOCK_ABOUT_INTRO, MOCK_ABOUT_OFFICES

export interface IAboutOffice {
  id: string
  name: string
  imageUrl: string
}

export const MOCK_ABOUT_INTRO: string =
  '迎胜汇在重庆、香港、马来西亚、美国多地布局，构建全球化的创作与制作网络。'

const OFFICE_1 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxdm7rmgs_ve_miaoda'
const OFFICE_2 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxbyzvkpw_ve_miaoda'
const OFFICE_3 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxb6yjabw_ve_miaoda'
const OFFICE_4 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxdax3ges_ve_miaoda'

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
