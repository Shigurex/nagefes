export interface Program {
  name: string
  icon: string
  detail: string
  target: string
  isFree: boolean
  path: string
  status: Status
}

export type Status = 'before' | 'during' | 'after'

export const programItems: Program[] = [
  {
    name: 'なげるゲームス\n（やり投の部）',
    icon: '/program/javelin.jpg',
    detail: 'やり投 予選3投 決勝2投',
    target: '高校生以上',
    isFree: false,
    path: 'https://forms.gle/UbwMcVXtSFk58Fbt6',
    status: 'before',
  },
  {
    name: 'なげるゲームス\n（小学生・中学生の部）',
    icon: '/program/jave_child.jpg',
    detail: 'ジャベボール投 予選3投 決勝2投',
    target: '小学生 / 中学生',
    isFree: false,
    path: 'https://forms.gle/UbwMcVXtSFk58Fbt6',
    status: 'before',
  },
  {
    name: 'なげるゲームス\n（大人の部）',
    icon: '/program/jave_adult.jpg',
    detail: 'ジャベボール投 予選3投 決勝2投',
    target: '高校生以上',
    isFree: false,
    path: 'https://forms.gle/UbwMcVXtSFk58Fbt6',
    status: 'before',
  },
  {
    name: '投能力タレント\n発掘プログラム',
    icon: '/program/talent.jpg',
    detail:
      '講習会＋投能力向上プログラム\n①10 時〜11時 ②11時〜12時 ③12時〜13時',
    target: '小学生',
    isFree: false,
    path: 'https://forms.gle/UbwMcVXtSFk58Fbt6',
    status: 'before',
  },
  {
    name: 'スピードガンコンテスト',
    icon: '/program/speed.jpg',
    detail: 'ストラックアウト',
    target: '全年齢',
    isFree: true,
    path: 'https://forms.gle/WxHeqhiBMKMrZhyC6',
    status: 'before',
  },
  {
    name: 'ギネスチャレンジ',
    icon: '/program/guinness.jpg',
    detail: 'ブーブーチキン投げ',
    target: '小学生',
    isFree: true,
    path: 'https://forms.gle/WxHeqhiBMKMrZhyC6',
    status: 'before',
  },
  {
    name: '仕事を投げよう',
    icon: '/program/work.jpg',
    detail: 'スマホ投げ',
    target: '高校生以上',
    isFree: true,
    path: 'https://forms.gle/WxHeqhiBMKMrZhyC6',
    status: 'before',
  },
  {
    name: 'パラ体験',
    icon: '/program/pala.jpg',
    detail: '目隠しスロー&キャッチ',
    target: '全年齢、ご家族連れ',
    isFree: true,
    path: 'https://forms.gle/WxHeqhiBMKMrZhyC6',
    status: 'before',
  },
  {
    name: 'ターボジャブ体験会',
    icon: '/program/turbo.jpg',
    detail: 'ターボジャブの体験',
    target: '9歳以上',
    isFree: true,
    path: 'https://forms.gle/WxHeqhiBMKMrZhyC6',
    status: 'before',
  },
  {
    name: 'ストラックアウト',
    icon: '/program/turbo.jpg',
    detail: 'ターボジャブの体験',
    target: '9歳以上',
    isFree: true,
    path: 'https://forms.gle/WxHeqhiBMKMrZhyC6',
    status: 'before',
  },
]
