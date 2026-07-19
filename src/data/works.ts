// EXPORTS: IWork, MOCK_WORKS_TOP, MOCK_WORKS_BOTTOM

export interface IWork {
  id: string
  title: string
  tags: string[]
  description: string
  imageUrl: string
}

const POSTER_1 = new URL('../assets/images/黑色曼陀罗.jpg', import.meta.url).href
const POSTER_2 = new URL('../assets/images/千金烬燃.jpg', import.meta.url).href
const POSTER_3 = new URL('../assets/images/大山绝地行善被拐的美妇.jpg', import.meta.url).href
const POSTER_4 = new URL('../assets/images/侯门嫡女要反击.jpg', import.meta.url).href
const POSTER_5 = new URL('../assets/images/重生只为你之爱可否重来.jpg', import.meta.url).href
const POSTER_14 = new URL('../assets/images/京婚似锦.jpg', import.meta.url).href
const POSTER_15 = new URL('../assets/images/真千金.jpg', import.meta.url).href


const POSTER_6 = new URL('../assets/images/嘿！黑不拉几先生.jpg', import.meta.url).href
const POSTER_7 = new URL('../assets/images/我单开饭店后.jpg', import.meta.url).href
const POSTER_8 = new URL('../assets/images/林小满的翻盘人生.jpg', import.meta.url).href
const POSTER_9 = new URL('../assets/images/陛下，皇后娘娘是HR.jpg', import.meta.url).href
const POSTER_10 = new URL('../assets/images/公主带民一起飞.jpg', import.meta.url).href
const POSTER_11 = new URL('../assets/images/亿万女霸总的夺妻陷阱.jpg', import.meta.url).href
const POSTER_12 = new URL('../assets/images/饲养嗜血仇敌：亲王殿下.jpg', import.meta.url).href
const POSTER_13 = new URL('../assets/images/泣血烙印：暴君的痛觉替身.jpg', import.meta.url).href

export const MOCK_WORKS_TOP: IWork[] = [
  {
    id: 'top-1',
    title: '京婚似锦',
    tags: ['AI+真人', '甜宠', '逆袭', '女频'],
    description: '村花逆袭，教授宠妻，双向治愈。',
    imageUrl: POSTER_14,
  },
    {
    id: 'top-2',
    title: '真千金',
    tags: ['AI+真人', '重生', '玄学', '女频'],
    description: '玄学大佬重生，手撕假千金，逆袭豪门。',
    imageUrl: POSTER_15,
  },
  {
    id: 'top-3',
    title: '千金烬燃',
    tags: ['古风', '逆袭', '女频'],
    description: '围绕女性视角挖掘情感内核，打造有温度、有共鸣的精品故事。',
    imageUrl: POSTER_2,
  },
  {
    id: 'top-4',
    title: '大山绝地行善被拐的美妇',
    tags: ['现实', '女性', '苦难', '救赎', '社会'],
    description: '一个年轻女性不幸被拐卖至封闭大山，在多次逃脱无果、经历绝望后，她选择留守并成为一名乡村教师。她将自己的苦难转化为照亮山村未来的微光，以德报怨的故事，引发了关于苦难、善与恶的深刻社会讨论。',
    imageUrl: POSTER_3,
  },
  {
    id: 'top-5',
    title: '侯门嫡女要反击',
    tags: ['古风', '宅斗', '逆袭', '女强', '女频'],
    description: '侯门嫡女遭庶妹陷害、夫君背弃，重生归来，她巧设棋局，智斗恶奴，手撕白莲，步步为营夺回掌家之权，让所有负她之人血债血偿。',
    imageUrl: POSTER_4,
  },
  {
    id: 'top-6',
    title: '重生只为你之爱可否重来',
    tags: ['重生', '言情', '治愈', '女频'],
    description: '前世错付真心，今生重生归来，她誓要护住那个曾被自己辜负的少年。用尽一切温暖他、治愈他，在命运的重演中改写结局，只为换一句“爱可否重来”。',
    imageUrl: POSTER_5,
  },
]

export const MOCK_WORKS_BOTTOM: IWork[] = [
  {
    id: 'bot-1',
    title: '亿万女霸总的夺妻陷阱',
    tags: ['英文', '甜宠', '霸总','女频'],
    description: '婚礼当天被未婚夫背叛，千亿女霸总当众抢婚，契约婚姻下步步深宠，七年暗恋终成真。',
    imageUrl: POSTER_11,
  },
  {
    id: 'bot-2',
    title: '饲养嗜血仇敌：亲王殿下',
    tags: ['英文', '暗黑', '养成系', '女频'],
    description: '吸血鬼亲王伪装柔弱少年，反向养成猎人，极致的占有与宿命纠缠。',
    imageUrl: POSTER_12,
  },
  {
    id: 'bot-3',
    title: '泣血烙印：暴君的痛觉替身',
    tags: ['英文', '虐恋', '契约', '女频'],
    description: '痛觉共享，暴君将真命伴侣当血包虐待，真相揭开，追妻火葬场。',
    imageUrl: POSTER_13,
  },
  {
    id: 'bot-4',
    title: '嘿！黑不拉几先生',
    tags: ['甜宠', '女频'],
    description: '火灾揭十年秘，少女携失控少年破旧友阴谋。',
    imageUrl: POSTER_6,
  },
  {
    id: 'bot-5',
    title: '我单开饭店后',
    tags: ['都市', '兄弟情仇', '逆袭', '美食', '男频'],
    description: '二十载兄弟跪求合伙，他倾尽所有却遭背叛吞利。母亲病重、妻子临盆，忍无可忍终携秘制老卤离去，用真手艺让负心兄弟家业崩塌，自己逆风翻盘。',
    imageUrl: POSTER_7,
  },
  {
    id: 'bot-6',
    title: '林小满的翻盘人生',
    tags: ['都市', '职场', '逆袭', '商战', '女频'],
    description: '职场遭算计，父为军师，五招破局再战高层。',
    imageUrl: POSTER_8,
  },
  {
    id: 'bot-7',
    title: '陛下，皇后娘娘是HR',
    tags: ['古风', '后宫', '穿越', '职场', '女强'],
    description: 'HR皇后穿古朝，不争宠，专给天下选人才。',
    imageUrl: POSTER_9,
  },
  {
    id: 'bot-8',
    title: '公主带民一起飞',
    tags: ['仙侠', '国运', '系统', '女强', '逆袭'],
    description: '国破绑系统，治国修仙，炼王朝飞升三界。',
    imageUrl: POSTER_10,
  },
]
