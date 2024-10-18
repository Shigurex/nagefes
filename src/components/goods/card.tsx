import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card'
import { Good } from '@/constant/goods'

type Props = {
	good: Good
}

export const GoodCard = ({ good }: Props) => {
	return (
		<Card className='w-full overflow-hidden flex flex-col'>
			<CardHeader className='p-0 overflow-hidden relative aspect-[16/9]'>
				<Image
					src={good.icon}
					alt='Background Image'
					width={1920}
					height={1080}
					className='w-full h-full object-contain'
				/>
			</CardHeader>
			<CardContent className='p-4 text-center flex-grow'>
				<CardTitle className='text-2xl font-bold mb-2 whitespace-pre-wrap'>
					{good.name}
				</CardTitle>
				<p className='text-md text-black font-semibold text-muted-foreground whitespace-pre-wrap'>
					{good.price}
				</p>
			</CardContent>
			<CardFooter>
				<div className='w-full'>
					{good.status === 'during' ? (
						<Link href={good.path} target='_blank'>
							<Button className='w-full bg-[#00BEFE] hover:bg-[#00a9fe]'>
								<span>グッズお申し込みはこちら</span>
							</Button>
						</Link>
					) : (
						<div className='w-full cursor-not-allowed'>
							<Button className='w-full' disabled>
								{good.status === 'before' && (
									<span>10/15申し込み開始予定</span>
								)}
								{good.status === 'after' && <span>完売御礼</span>}
							</Button>
						</div>
					)}
				</div>
			</CardFooter>
		</Card>
	)
}
