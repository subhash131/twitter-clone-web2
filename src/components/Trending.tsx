import React from "react"
import { Card, Text } from "@tremor/react"

const Trending = () => {
	return (
		<Card className='sticky top-0'>
			<Text className='text-xl text-black'>Trending</Text>
			<Text>#AI</Text>
			<Text>#web3</Text>
			<Text>#blockchain</Text>
		</Card>
	)
}

export default Trending
