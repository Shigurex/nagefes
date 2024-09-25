import {
  Handshake,
  Home,
  Info,
  Mail,
  MapPin,
  Newspaper,
  ScrollText,
} from 'lucide-react'

export interface Menu {
  name: string
  path: string
  icon: JSX.Element
}

export const menuItems: Menu[] = [
  { name: 'TOP', path: '/#top', icon: <Home className='h-5 w-5' /> },
  { name: 'NEWS', path: '/#news', icon: <Newspaper className='h-5 w-5' /> },
  {
    name: 'PROGRAM',
    path: '/#program',
    icon: <ScrollText className='h-5 w-5' />,
  },
  {
    name: 'SUPPORT',
    path: '/#support',
    icon: <Handshake className='h-5 w-5' />,
  },
  { name: 'ACCESS', path: '/#access', icon: <MapPin className='h-5 w-5' /> },
  {
    name: 'INFORMATION',
    path: '/#information',
    icon: <Info className='h-5 w-5' />,
  },
  { name: 'CONTACT', path: '/#contact', icon: <Mail className='h-5 w-5' /> },
]
