import Image from 'next/image'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

export const ProgramCard = () => {
  return (
    <Card className='w-full overflow-hidden'>
      <CardHeader className='p-0 h-[260px] overflow-hidden relative'>
        <Image
          src='/test.jpg'
          alt='Background Image'
          width={384}
          height={260}
          className='w-full h-full object-cover'
        />
        {/* <div className='absolute top-0 left-0 bg-slate-300 rounded-full h-12 w-12 text-white text-center'>有料</div> */}
      </CardHeader>
      <CardContent className='p-4 text-center'>
        <CardTitle className='text-2xl font-bold mb-2'>プログラム名</CardTitle>
        <p className='text-sm text-muted-foreground'>内容</p>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>お申し込みはこちら</Button>
      </CardFooter>
    </Card>
  )
}
