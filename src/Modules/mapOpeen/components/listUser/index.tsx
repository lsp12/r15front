import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'

interface IProps {
  apiFake: any[]
  setLocation: (location: any) => void
}

export const UserLocation = ({ apiFake, setLocation }: IProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        Lista de encuestadores en el mapa
      </Grid>

      {apiFake.map((item: any, index) => (
        <Grid item xs={12} md={12} key={index}>
          <Card
            sx={{ boxShadow: 2 }}
            onClick={() => {
              setLocation(item.geometry)
            }}
          >
            <CardContent>{item.name}</CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
