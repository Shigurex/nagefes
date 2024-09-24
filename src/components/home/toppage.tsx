import { Button } from '../ui/button'

export default function TopPage() {
  return (
    <div className="relative bg-[url('/background.png')] bg-cover h-[120%]">
      <div className='w-full flex justify-center'>
        <Button className='text-md p-4'>イベント申し込みはこちら！</Button>
      </div>
      {/* <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </div> */}
    </div>
  )
}
