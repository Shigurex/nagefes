export interface News {
  date: Date
  context: string
}

export const newsItems: News[] = [
  {
    date: new Date('2024/10/19'),
    context: '協賛企業を掲載しました！',
  },
  {
    date: new Date('2024/10/16'),
    context: 'グッズの販売を開始しました！',
  },
  {
    date: new Date('2024/10/3'),
    context: '大会要項と注意事項を更新しました！',
  },
  {
    date: new Date('2024/10/3'),
    context: 'イベントの申し込みを開始しました！',
  },
  {
    date: new Date('2024/10/1'),
    context:
      'イベントプログラムをリリースしました！申し込み開始は10/3となります！',
  },
  {
    date: new Date('2024/10/1'),
    context: 'イベント公式サイトをリリースしました！',
  },
  // {
  //   date: new Date('2024/10/1'),
  //   context: 'なげるフェスティバル2024を11/3(日)に開催することが決定しました。',
  // },
]
