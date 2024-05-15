import MainWrapper from '@/components/MainWrapper'
import ServicesCard from '@/components/UI/Cards/ServicesCard'
import { servicesData } from '@/dataObjects'

const subheader =
	'Ակցեռն Հոլդինգ ընկերությունը վերջին տարիների ընթացքում մեծ հաջողություններ ունի շինարարության,  \n ճարտարապետության և ձևավորման (դիզայնի) ոլորտում'

export default function ServicesBlock() {
	return (
		<MainWrapper header='Ծառայություններ' variant='block' subheader={subheader}>
			{servicesData.map(card => (
				<ServicesCard key={card.id} card={card} />
			))}
		</MainWrapper>
	)
}
