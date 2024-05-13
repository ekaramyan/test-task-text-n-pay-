import MainWrapper from '@/components/MainWrapper'
import background from '@/assets/img/Background.jpg'

export default function HeadingBlock() {
	return (
		<div
			style={{
				background: `url(${background.src}) center center / cover no-repeat`,
				height: '100dvh',
				width: '100%',
			}}
		>
			<MainWrapper></MainWrapper>
		</div>
	)
}
