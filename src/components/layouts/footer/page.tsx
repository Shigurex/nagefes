import { InstagramPost } from '@/components/common/instagramPost'
import { menuItems } from '@/constant/menu'
import { Link, icons } from 'lucide-react'
import { SideMenu } from '../menu/page'

export const Footer = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 px-3 py-10'>
      <div className='grid grid-auto grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='h-[400px] w-full bg-slate-200 rounded-lg' />
        <div className='h-[400px] w-full bg-slate-200 rounded-lg' />
        <div className='h-[400px] w-full bg-slate-200 rounded-lg' />
        <div className='h-[400px] w-full bg-slate-200 rounded-lg' />
        {/* <InstagramPost />  */}
      </div>
      <div className='flex'>
        <SideMenu />
        {/* <div className='flex-auto'>a</div> */}
      </div>
    </div>
  )
}
