import { MenuTitle } from '../common/menuTitle'

export const Goods = () => {
  return (
    <div
      className='container mx-auto flex flex-col px-3 py-10 gap-5'
      id='goods'
    >
      <MenuTitle>GOODS</MenuTitle>
      <div className='h-[400px] w-full bg-slate-100 rounded-lg flex justify-center items-center text-4xl font-bold text-black'>
        Coming Soon ...
      </div>
    </div>
  )
}
