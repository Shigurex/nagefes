import { ProgramCard } from '@/components/program/card'
import { MenuTitle } from '../common/menuTitle'

export const Program = () => {
  return (
    <div
      className='container mx-auto flex flex-col px-3 py-10 gap-5'
      id='program'
    >
      <MenuTitle>Program</MenuTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </div>
    </div>
  )
}
