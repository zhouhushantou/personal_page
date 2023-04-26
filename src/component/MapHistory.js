import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

//////////////////////////////////////////////////////
//The following codes are from stackoverflow
//used to solve a the react-leaflet bug
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
//////////////////////////////////////////////////////

L.Marker.prototype.options.icon = DefaultIcon;

const MapHistory = () => {
    const position = [20, 0]
    return (
        <MapContainer height={100} center={position} zoom={2} scrollWheelZoom={false} style={{ height: '50vh', width: '100wh' }} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
            />
            <Marker position={[30.19, 118.77]}>Jixi</Marker>
            <Marker position={[38.87, 115.46]}>Baoding</Marker>
            <Marker position={[31.23, 121.47]}>Shanghai</Marker>
            <Marker position={[39.90, 116.40]}>Beijing</Marker>
            <Marker position={[30.27, 120.15]}>Hangzhou</Marker>
            <Marker position={[43.82, 87.61]}>Urumuqi</Marker>
            <Marker position={[30.59, 114.30]}>Wuhan</Marker>
            <Marker position={[22.31, 114.16]}>Hongkong</Marker>
            <Marker position={[37.77, -122.41]}>San Francisco</Marker>
            <Marker position={[34.05, -118.24]}>Los Angeles</Marker>
            <Marker position={[35.7796, -78.6382]}>Raleigh</Marker>
            <Marker position={[33.74, -84.38]}>Altlanta</Marker>
            <Marker position={[30.57, 104.06]}>Chengdu</Marker>
            <Marker position={[13.75, 100.50]}>Bankok</Marker>
            <Marker position={[7.98, 98.33]}>Puket</Marker>
            <Marker position={[33.49, 126.53]}>Jejo</Marker>
            <Marker position={[-33.86, 151.20]}>Sydney</Marker>
            <Marker position={[26.07, 119.29]}>Fuzhou</Marker>
            <Marker position={[23.12, 113.26]}>Guangzhou</Marker>
        </MapContainer >
    )
}

export default MapHistory