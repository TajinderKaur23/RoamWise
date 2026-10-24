import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Location = ({ lat, lng, city }) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={12}
    
      style={{
        height: "420px",
        width: "100%",
        borderRadius: "0 0 16px 16px"
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lng]}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
};