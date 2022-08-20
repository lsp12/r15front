import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet'

import { IconLocation } from '../iconLocation'

interface IProps {
  apiFake: any[]
  location: [number, number]
}

function LocationMarker(props: any) {
  const { location } = props

  const map = useMap()

  useEffect(() => {
    if (location[0] !== 0 && location[1] !== 0) {
      map.setView(location, 16)
    }
  }, [location])

  useEffect(() => {
    map.getCenter()
  }, [])

  return null
}

export const MapView = ({ apiFake, location }: IProps) => {
  const [geolocation, setGeolocation] = useState<any>({
    lat: 0,
    lng: 0,
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
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
  return (
    <MapContainer
      center={location[0] == 0 ? [-1.8000869194439506, -79.53050447397867] : location}
      zoom={location[0] == 0 ? 13 : 15}
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
      <LocationMarker location={location} />
    </MapContainer>
  )
}
