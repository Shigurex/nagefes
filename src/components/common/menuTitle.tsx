import { topPageFont } from '@/lib/fonts'
import clsx from 'clsx'

type Props = {
  color?: string
  children: React.ReactNode
}

export const MenuTitle = ({ color, children }: Props) => {
  return (
    <div className='w-full'>
      <span
        className={clsx(
          'font-bold text-4xl py-2 w-[200px] text-center',
          color ?? 'text-[#FF534F]',
          topPageFont.className,
        )}
      >
        {children}
      </span>
    </div>
  )
}
