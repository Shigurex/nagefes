export interface Organizer {
  name: string
  nameEnglish: string
  icon: string
  detail: string
}

export const organizerItems: Organizer[] = [
  {
    name: '中島 翔平',
    nameEnglish: 'Nakashima Shohei',
    icon: '/organizer/nakashima.jpg',
    detail:
      '2023年パリ世界パラ陸上日本代表選手コーチ\n慶應義塾大学体育会競走部コーチ\nInstagramフォロワー1万人',
  },
  {
    name: '八木 一憲',
    nameEnglish: 'Yagi Kazunori',
    icon: '/organizer/yagi.jpg',
    detail: '大府高校→日本体育大学→みかん山\nフォロワー7.7万人',
  },
]
