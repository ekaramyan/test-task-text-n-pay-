import MainWrapper from '@/components/MainWrapper'
import SalesCard from '@/components/UI/Cards/SalesCard'
import { salesData } from '@/dataObjects'

export default function SalesBlock() {
	return (
		<MainWrapper header='Շաբաթվա առաջարկ' variant='block'>
			{salesData.map(card => (
				<SalesCard key={card.id} card={card} />
			))}
		</MainWrapper>
	)
}
