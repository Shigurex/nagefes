import { menuItems } from '@/constant/menu'
import Link from 'next/link'

export const SideMenu = () => {
  return (
    <div className='flex flex-col px-3 py-5 gap-5 sticky top-0' id='program'>
      <div className='flex'>
        <div className='border-l-2 pl-4 border-black space-y-2 flex-auto'>
          {menuItems.map(item => (
            <Link
              key={item.name}
              href={item.path}
              className='block text-black text-md hover:text-slate-600 hover:text-primary transition-colors duration-200 ease-in-out font-medium'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
