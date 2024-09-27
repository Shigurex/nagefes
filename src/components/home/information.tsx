import { informationItems } from '@/constant/information'
import { MenuTitle } from '../common/menuTitle'

export const Information = () => {
  return (
    <div className='flex flex-col px-3 py-10 gap-5' id='information'>
      <MenuTitle>Information</MenuTitle>
      <div className='flex flex-col gap-3'>
        {informationItems.map(information => (
          <div
            className='flex items-center text-sm md:text-base'
            key={information.label}
          >
            <div className='w-32 md:w-36 bg-white border-2 border-black rounded-lg p-3 font-semibold text-black flex items-center space-x-2 shadow-md'>
              {information.icon}
              <span>{information.label}</span>
            </div>
            <div className='flex-1 ml-4 text-gray-800 font-semibold'>
              {information.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
