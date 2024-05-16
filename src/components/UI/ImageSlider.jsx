import { Box, Button, MobileStepper } from '@mui/material'
import {
	ArrowBackIosNewOutlined,
	ArrowForwardIosOutlined,
} from '@mui/icons-material'
import { useState } from 'react'
import Image from 'next/image'

export default function ImageSlider({ images }) {
	const [activeStep, setActiveStep] = useState(0)
	const maxSteps = images.length

	const handleNext = () => {
		setActiveStep(prevActiveStep => (prevActiveStep + 1) % maxSteps)
	}

	const handleBack = () => {
		setActiveStep(prevActiveStep => (prevActiveStep - 1 + maxSteps) % maxSteps)
	}

	return (
		<Box sx={{ maxWidth: 400, flexGrow: 1 }}>
			{images.map((image, index) => (
				<Box
					key={index}
					style={{ display: activeStep === index ? 'block' : 'none' }}
				>
					<Box
						sx={{
							height: 255,
							display: 'block',
							maxWidth: 400,
							overflow: 'hidden',
							width: '100%',
							borderRadius: 4,
						}}
					>
						<Image
							src={image}
							alt={`image-${index}`}
							width={400}
							height={300}
						/>
					</Box>
				</Box>
			))}
			<MobileStepper
				steps={maxSteps}
				position='static'
				activeStep={activeStep}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
						variant='card__sales_button'
					>
						<ArrowForwardIosOutlined fontSize='small' />
					</Button>
				}
				backButton={
					<Button
						size='small'
						onClick={handleBack}
						disabled={activeStep === 0}
						variant='card__sales_button'
					>
						<ArrowBackIosNewOutlined fontSize='small' />
					</Button>
				}
				sx={{ background: 'none' }}
			/>
		</Box>
	)
}
