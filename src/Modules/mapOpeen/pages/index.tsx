import React from 'react'
import { Grid } from '@mui/material'
import './styles.css'
import { MapView } from '../components/map'
import { UserLocation } from '../components/listUser'
import { MapDiv } from '../components/map/MapDiv'

export const MapOpen = () => {
  document.title = 'Mapa de ubicación de los encuestadores'

  const [location, setLocation] = React.useState<any>([0, 0])

  const apiFake: any[] = [
    {
      name: 'Persona encuestadora 1',
      geometry: [-1.8002865891031747, -79.54005289686886],
    },
    {
      name: 'Persona encuestadora 2',
      geometry: [-1.7953538440871954, -79.52071835369009],
    },
    {
      name: 'Persona encuestadora 3',
      geometry: [-1.814063920007651, -79.51450308338326],
    },
    {
      name: 'Persona encuestadora 4',
      geometry: [-1.8016596691433442, -79.51191812510561],
    },
  ]

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <UserLocation apiFake={apiFake} setLocation={setLocation} />
      </Grid>
      <Grid item xs={12} md={8}>
        {/*  <MapDiv /> */}
        <MapView location={location} apiFake={apiFake} />
      </Grid>
    </Grid>
  )
}
