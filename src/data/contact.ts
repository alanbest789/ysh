// EXPORTS: IContactItem, MOCK_CONTACT_ITEMS, MOCK_CONTACT_TITLE, MOCK_CONTACT_SUBTITLE

export interface IContactItem {
  id: string
  type: 'wechat_official' | 'wechat_personal'
  title: string
  subtitle: string
  qrCodeUrl: string
}

export const MOCK_CONTACT_TITLE: string = '携手迎胜汇，共创剧作新章'
export const MOCK_CONTACT_SUBTITLE: string = '联系我们'

// 二维码使用占位 SVG 生成，实际项目中替换为真实二维码图片
const QR_OFFICIAL = `${import.meta.env.BASE_URL}公众号二维码.jpg`
const QR_PERSONAL = `${import.meta.env.BASE_URL}QRPersonal.png`

export const MOCK_CONTACT_ITEMS: IContactItem[] = [
  {
    id: '1',
    type: 'wechat_official',
    title: '关注迎胜汇公众号',
    subtitle: '获取最新行业资讯与作品动态',
    qrCodeUrl: QR_OFFICIAL,
  },
  {
    id: '2',
    type: 'wechat_personal',
    title: '添加商务微信',
    subtitle: '一对一商务合作咨询',
    qrCodeUrl: QR_PERSONAL,
  },
]
