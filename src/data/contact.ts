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
const QR_OFFICIAL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23fff'/%3E%3Crect x='20' y='20' width='50' height='50' fill='%238B0000'/%3E%3Crect x='28' y='28' width='34' height='34' fill='%23fff'/%3E%3Crect x='36' y='36' width='18' height='18' fill='%238B0000'/%3E%3Crect x='130' y='20' width='50' height='50' fill='%238B0000'/%3E%3Crect x='138' y='28' width='34' height='34' fill='%23fff'/%3E%3Crect x='146' y='36' width='18' height='18' fill='%238B0000'/%3E%3Crect x='20' y='130' width='50' height='50' fill='%238B0000'/%3E%3Crect x='28' y='138' width='34' height='34' fill='%23fff'/%3E%3Crect x='36' y='146' width='18' height='18' fill='%238B0000'/%3E%3Crect x='80' y='20' width='10' height='10' fill='%238B0000'/%3E%3Crect x='100' y='30' width='10' height='10' fill='%238B0000'/%3E%3Crect x='90' y='50' width='10' height='10' fill='%238B0000'/%3E%3Crect x='20' y='80' width='10' height='10' fill='%238B0000'/%3E%3Crect x='40' y='90' width='10' height='10' fill='%238B0000'/%3E%3Crect x='60' y='80' width='10' height='10' fill='%238B0000'/%3E%3Crect x='80' y='100' width='40' height='40' fill='%23D4AF37'/%3E%3Crect x='90' y='110' width='20' height='20' fill='%23fff'/%3E%3Crect x='96' y='116' width='8' height='8' fill='%23D4AF37'/%3E%3Crect x='130' y='80' width='10' height='10' fill='%238B0000'/%3E%3Crect x='150' y='90' width='10' height='10' fill='%238B0000'/%3E%3Crect x='170' y='80' width='10' height='10' fill='%238B0000'/%3E%3Crect x='140' y='130' width='10' height='10' fill='%238B0000'/%3E%3Crect x='160' y='140' width='10' height='10' fill='%238B0000'/%3E%3Crect x='150' y='160' width='10' height='10' fill='%238B0000'/%3E%3Crect x='170' y='150' width='10' height='10' fill='%238B0000'/%3E%3Crect x='80' y='150' width='10' height='10' fill='%238B0000'/%3E%3Crect x='60' y='160' width='10' height='10' fill='%238B0000'/%3E%3Crect x='100' y='170' width='10' height='10' fill='%238B0000'/%3E%3C/svg%3E"

const QR_PERSONAL = '/QRPersonal.png'

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
