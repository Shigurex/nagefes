import { MenuTitle } from '../common/menuTitle'

export const Support = () => {
  return (
    <div
      className='container mx-auto flex flex-col px-3 py-10 gap-5'
      id='support'
    >
      {/* <MenuTitle>Support</MenuTitle> */}
      <div className='flex justify-center'>
        <div className='justify-center w-96 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
          <span className='text-sm md:text-base'>
            なげるフェスティバル協賛協力のお願い
          </span>
        </div>
      </div>
      <div className='h-[400px] w-full bg-slate-100 rounded-lg flex justify-center items-center text-4xl font-bold'>
        Coming Soon ...
      </div>
    </div>
  )
}
