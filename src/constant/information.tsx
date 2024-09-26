import {
  Briefcase,
  Building,
  CalendarDays,
  HandHelping,
  MapPin,
  Users,
} from 'lucide-react'

export interface Information {
  label: string
  value: string
  icon: JSX.Element
}

export const informationItems: Information[] = [
  {
    label: '日程',
    value: '2024年11月3日(日)',
    icon: <CalendarDays className='w-6 h-6' />,
  },
  {
    label: '場所',
    value: '等々力陸上競技場 補助競技場＋広場',
    icon: <MapPin className='w-6 h-6' />,
  },
  {
    label: '主催企画',
    value: 'なげるフェスティバル実行委員会',
    icon: <Users className='w-6 h-6' />,
  },
  {
    label: '後援',
    value: '川崎等々力パーク',
    icon: <Building className='w-6 h-6' />,
  },
  {
    label: '協賛',
    value: '株式会社NISHIスポーツ',
    icon: <Briefcase className='w-6 h-6' />,
  },
  {
    label: '協力',
    value: '川崎市陸上競技協会',
    icon: <HandHelping className='w-6 h-6' />,
  },
]
