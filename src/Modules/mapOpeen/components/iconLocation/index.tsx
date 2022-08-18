import L from 'leaflet'
import locationIcon from '../../../../assets/images/location.svg'

export const IconLocation = L.icon({
  iconUrl: locationIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  className: 'leaflet-venue-icon',
})
