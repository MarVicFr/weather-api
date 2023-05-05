import React from 'react'
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'
import {dataFrance} from "../data"
import 'leaflet/dist/leaflet.css'

const center = [46.881550645746245, 2.397601995893203]

export default function FrenchMap() {
  return (
    <MapContainer
        center={center}
        zoom={6}
        style={{ width: '100vw', height:'100vh' }}    
    >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=l9XpVfMk6lLLzWhEoUmD"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {
          dataFrance.features.map((state) => {
            const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
            return (
              <Polygon
              pathOptions={{
                fillColor: 'green',
                fillOpacity: '0.5',
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: 'white'
              }}
              positions={coordinates} />

            )
          })
        }
    </MapContainer>
  )
}
