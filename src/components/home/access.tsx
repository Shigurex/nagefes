import { MenuTitle } from '../common/menuTitle'

export const Access = () => {
  return (
    <div className='flex flex-col px-3 py-10 gap-5' id='access'>
      <MenuTitle>Access</MenuTitle>
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='h-[400px] w-full bg-slate-200 rounded-lg' />
        <div className='h-[400px] w-full bg-slate-200 rounded-lg' />
      </div>
    </div>
  )
}
