import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

export const ProgramCard = () => {
	return (
		<Card>
			<CardContent>
				<div className="bg-white text-blue-500 rounded-lg p-4 flex items-center space-x-4">
					<div className="bg-blue-500 rounded-full p-2">
						<Image src="/placeholder.svg" alt="Program icon" width={40} height={40} className="rounded-full" />
					</div>
					<div>
						<h4 className="font-bold">プログラム名</h4>
						<p className="text-sm">説明テキスト</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}