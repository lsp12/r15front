import React, { useEffect } from 'react'
import L from 'leaflet'

export const MapDiv = () => {
  useEffect(() => {
    L.map('map', {
      center: [-1.8000869194439506, -79.53050447397867],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    })
  }, [location])
  return <div id='map'></div>
}
