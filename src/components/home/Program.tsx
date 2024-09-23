import { ProgramCard } from '@/components/program/ProgramCard'

export const Program = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
    </div>
  )
}
