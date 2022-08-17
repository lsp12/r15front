import { Container, Grid } from '@mui/material'
import React from 'react'
import { FormQuests } from '../components/formQuests/FormQuests'

export const Quests = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={7}>
          <FormQuests />
        </Grid>
        <Grid item xs={12} md={5}>
          <h1>Administrador de preguntas</h1>
        </Grid>
      </Grid>
    </Container>
  )
}
