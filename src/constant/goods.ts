import type { Status } from './program'

export interface Good {
  name: string
  icon: string
  price: string
  path: string
  status: Status
}

export const goodItems: Good[] = [
  {
    name: 'スポーツTシャツ半袖',
    icon: '/goods/short_shirt.jpg',
    price: '2500円（学生 2000円）',
    path: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdZTfXLMgr8vxxL1Boo_jCe-rUR69phhQg9VGFlvPXJxVQJWQ/viewform',
    status: 'during',
  },
  {
    name: 'トレーナー長袖',
    icon: '/goods/long_shirt.jpg',
    price: '4000円（学生 3500円）',
    path: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdZTfXLMgr8vxxL1Boo_jCe-rUR69phhQg9VGFlvPXJxVQJWQ/viewform',
    status: 'during',
  },
  {
    name: 'なげフェス限定タオル',
    icon: '/goods/towel.jpg',
    price: '1500円',
    path: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdZTfXLMgr8vxxL1Boo_jCe-rUR69phhQg9VGFlvPXJxVQJWQ/viewform',
    status: 'during',
  },
]
