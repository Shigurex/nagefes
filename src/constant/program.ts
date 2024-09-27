export interface Program {
  name: string
  icon: string
  detail: string
  target: string
  isFree: boolean
  path: string
}

export const programItems: Program[] = [
  {
    name: '投能力タレント発掘プログラム',
    icon: '/test.jpg',
    detail:
      '講習会＋投能力向上プログラム\n①10 時〜11時 ②11時〜12時 ③12時〜13時',
    target: '小学生',
    isFree: false,
    path: 'https://nagerufes.com/',
  },
  {
    name: 'スピードガンコンテスト',
    icon: '/test.jpg',
    detail: 'ストラックアウト',
    target: '全年齢',
    isFree: true,
    path: 'https://nagerufes.com/',
  },
  {
    name: 'ギネスチャレンジ',
    icon: '/test.jpg',
    detail: 'ブーブーチキン投げ',
    target: '小学生',
    isFree: true,
    path: 'https://nagerufes.com/',
  },
  {
    name: '仕事を投げよう',
    icon: '/test.jpg',
    detail: 'スマホ投げ',
    target: '高校生以上',
    isFree: true,
    path: 'https://nagerufes.com/',
  },
  {
    name: 'パラ体験',
    icon: '/test.jpg',
    detail: '目隠しスロー&キャッチ',
    target: '全年齢、ご家族連れ',
    isFree: true,
    path: 'https://nagerufes.com/',
  },
  {
    name: 'ターボジャブ体験会',
    icon: '/test.jpg',
    detail: 'ターボジャベの体験',
    target: '9歳以上',
    isFree: true,
    path: 'https://nagerufes.com/',
  },
]
