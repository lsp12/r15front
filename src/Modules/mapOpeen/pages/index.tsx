import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Grid } from '@mui/material'
import './styles.css'
import { IconLocation } from '../components/iconLocation'
import { LatLngExpression } from 'leaflet'

export const MapOpen = () => {
  document.title = 'Mapa de ubicación de los encuestadores'
  const [geolocation, setGeolocation] = useState<any>({
    lat: 0,
    lng: 0,
  })
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        setGeolocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      },
      (error) => {
        console.log(error)
      },
      {
        enableHighAccuracy: true,
      },
    )
  }, [])

  console.log(geolocation)

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <MapContainer
          center={[-1.8000869194439506, -79.53050447397867]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {apiFake.map((item, index) => (
            <Marker key={index} position={item.geometry} icon={IconLocation}>
              <Popup>
                <span>{item.name}</span>
              </Popup>
            </Marker>
          ))}
          <Marker position={geolocation} icon={IconLocation}>
            <Popup>
              <span>
                <h1>Mi ubicación</h1>
                <p>
                  {geolocation.lat}, {geolocation.lng}
                </p>
              </span>
            </Popup>
          </Marker>
          {/* <Marker position={[-1.8000869194439506, -79.53050447397867]} icon={IconLocation} /> */}
        </MapContainer>
      </Grid>
    </Grid>
  )
}
