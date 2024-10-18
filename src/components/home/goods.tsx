import { goodItems } from '@/constant/goods'
import { MenuTitle } from '../common/menuTitle'
import { GoodCard } from '../goods/card'

export const Goods = () => {
  return (
    <div
      className='container mx-auto flex flex-col px-3 py-10 gap-5'
      id='goods'
    >
      <MenuTitle>GOODS</MenuTitle>
      <div className='w-full'>
        <p className='text-xs md:text-md lg:text-xl font-bold md:whitespace-pre-wrap text-black'>
          {
            'グッズ販売の売り上げは今年度の大会の運営費として使用させていただきます。\nまた余剰金が発生した場合は、来年度の大会運営費として使用させていただきます。'
          }
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {goodItems.map((good, _) => (
          <GoodCard key={good.name} good={good} />
        ))}
      </div>
    </div>
  )
}
