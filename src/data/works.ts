// EXPORTS: IWork, MOCK_WORKS_TOP, MOCK_WORKS_BOTTOM

export interface IWork {
  id: string
  title: string
  tags: string[]
  description: string
  imageUrl: string
}

const POSTER_1 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxddln6ds_ve_miaoda'
const POSTER_2 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxdkepwau_ve_miaoda'
const POSTER_3 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjw4fvzmps_ve_miaoda'
const POSTER_4 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxdax3eds_ve_miaoda'
const POSTER_5 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxbvsscfu_ve_miaoda'
const POSTER_6 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxcynoqgs_ve_miaoda'
const POSTER_7 = '/spark/app/app_179qegwsz7p/runtime/api/v1/storage/object/bucket_aadkjxl4rz2du_static/static%2Faadkjxeavuypu_ve_miaoda'

export const MOCK_WORKS_TOP: IWork[] = [
  {
    id: 'top-1',
    title: '黑色曼陀罗',
    tags: ['悬疑', '都市', '男频'],
    description: '正义也许会迟到，但从来不会缺席。',
    imageUrl: POSTER_1,
  },
  {
    id: 'top-2',
    title: '千金烬燃',
    tags: ['古风', '逆袭', '女频'],
    description: '围绕女性视角挖掘情感内核，打造有温度、有共鸣的精品故事。',
    imageUrl: POSTER_2,
  },
  {
    id: 'top-3',
    title: '重生只为爱可否重来',
    tags: ['言情', '热血', '男频'],
    description: '立足男性视角激发热血内核，兼顾快感与思想深度。',
    imageUrl: POSTER_3,
  },
  {
    id: 'top-4',
    title: '江湖夜雨',
    tags: ['武侠', '权谋', '男频'],
    description: '一剑霜寒十四州，江湖夜雨十年灯。',
    imageUrl: POSTER_4,
  },
  {
    id: 'top-5',
    title: '凤唳九天',
    tags: ['宫斗', '逆袭', '女频'],
    description: '深宫之中，且看她如何一步步凤唳九天。',
    imageUrl: POSTER_5,
  },
  {
    id: 'top-6',
    title: '都市最强医仙',
    tags: ['都市', '爽文', '男频'],
    description: '医仙传人下山，纵横都市，妙手回春。',
    imageUrl: POSTER_6,
  },
  {
    id: 'top-7',
    title: '锦绣农门',
    tags: ['种田', '经商', '女频'],
    description: '穿越农家女，靠双手打造锦绣人生。',
    imageUrl: POSTER_7,
  },
]

export const MOCK_WORKS_BOTTOM: IWork[] = [
  {
    id: 'bot-1',
    title: '末日觉醒',
    tags: ['科幻', '末世', '男频'],
    description: '末日降临，异能觉醒，谁能主宰沉浮。',
    imageUrl: POSTER_4,
  },
  {
    id: 'bot-2',
    title: '嫡女谋',
    tags: ['宅斗', '权谋', '女频'],
    description: '侯府嫡女，步步为营，谋得一世安稳。',
    imageUrl: POSTER_5,
  },
  {
    id: 'bot-3',
    title: '神级系统',
    tags: ['系统', '升级', '男频'],
    description: '意外获得神级系统，从此人生开挂。',
    imageUrl: POSTER_6,
  },
  {
    id: 'bot-4',
    title: '清欢渡',
    tags: ['古言', '甜宠', '女频'],
    description: '人间有味是清欢，与君共度岁月长。',
    imageUrl: POSTER_7,
  },
  {
    id: 'bot-5',
    title: '战神归来',
    tags: ['战神', '都市', '男频'],
    description: '一代战神隐退都市，却因她重出江湖。',
    imageUrl: POSTER_1,
  },
  {
    id: 'bot-6',
    title: '胭脂醉',
    tags: ['古风', '虐恋', '女频'],
    description: '胭脂醉，相思泪，情到深处人憔悴。',
    imageUrl: POSTER_2,
  },
  {
    id: 'bot-7',
    title: '万界天尊',
    tags: ['玄幻', '修仙', '男频'],
    description: '逆天改命，踏破万界，成就一代天尊。',
    imageUrl: POSTER_3,
  },
]
