import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
    const position = [30.45, 120.1]
    return (
        <MapContainer height={100} center={position} zoom={7} scrollWheelZoom={false} style={{ height: '20vh', width: '100wh' }} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    I live in Hangzhou
                </Popup>
            </Marker>
        </MapContainer >
    )
}

export default Map