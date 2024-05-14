import MainWrapper from '@/components/MainWrapper'
import { headingCards } from '@/dataObjects'
import background from '@/assets/img/Background.jpg'
import TransparentCard from '@/components/UI/Cards/TransparentCard'

const subheader =
	'Ակցեռն հոլդինգի գործունեության ոլորտում են անշարժ գույքի հետ կապված ցանկացած տեսակի գործարքներ՝ առք, վաճառք,  \nվարձակալություն, բնակելի (բնակարաններ, տներ, առանձնատներ, հողամասեր, ամառանոցներ) և առևտրային  \nնշանակության (արտադրական օբյեկտներ), ինչպես նաև անշարժ գույքի գնահատում։'

export default function HeadingBlock() {
	return (
		<div
			style={{
				background: `url(${background.src}) center center / cover no-repeat`,
				minHeight: '100dvh',
				width: '100%',
			}}
		>
			<MainWrapper
				header='ԱԿՑԵՌՆ ՀՈԼԴԻՆԳ'
				subheader={subheader}
				variant='headingBlock'
			>
				{headingCards.map(card => (
					<TransparentCard
						key={card.id}
						card={card}
						variant='card__transparent'
					/>
				))}
			</MainWrapper>
		</div>
	)
}
