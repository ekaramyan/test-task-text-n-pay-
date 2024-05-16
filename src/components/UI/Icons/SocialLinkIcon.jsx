import Link from 'next/link'
import Image from 'next/image'

export default function SocialLinkIcon({ social }) {
	return (
		<Link
			href={social.link}
			target='_blank'
			style={{
				border: '1px solid rgba(0, 19, 54, 0.65)',
				borderRadius: '50%',
				padding: 8,
				maxWidth: 48,
			}}
		>
			<Image src={social.icon} alt={social.link} width={32} height={32} />
		</Link>
	)
}
