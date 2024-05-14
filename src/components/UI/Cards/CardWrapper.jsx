import { Card } from '@mui/material'
import React from 'react'

export default function CardWrapper({children, ...props}) {
  return (
    <Card>{children}</Card>
  )
}
