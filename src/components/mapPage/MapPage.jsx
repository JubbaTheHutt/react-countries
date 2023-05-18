import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import './mapPage.css';

const MapPage = () => {
    const countries = useSelector((state) => state.countries.countries);

    return (
        <MapContainer
            className={'mapContainer'}
            center={[27, 30]}
            zoom={2}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {countries.map((item, idx) => (
                <Marker key={idx} position={item.latLng?.country}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapPage;
