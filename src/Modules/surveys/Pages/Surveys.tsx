import { Container, Grid } from '@mui/material'
import React from 'react'
import { SurveysTransition } from '../Components/SurveysTransition/SurveysTransition'

export const Surveys = () => {
  document.title = 'Encuesta'

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SurveysTransition />
        </Grid>
      </Grid>
    </Container>
  )
}
