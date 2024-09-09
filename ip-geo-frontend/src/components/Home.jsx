// components/Home.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchGeoInfo } from '../slices/ipSlice';
// import { fetchHistory } from '../slices/ipSlice';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Home = () => {
  const [ip, setIp] = useState('');
  const dispatch = useDispatch();
  const geoInfo = useSelector((state) => state.ip.geoInfo);
  const coordinates = geoInfo ? geoInfo.loc.split(',') : [0, 0]; // Extract lat, lon from loc

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchGeoInfo(ip));
  };
  useEffect(() => {
    dispatch(fetchHistory());
  }, [dispatch]);
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder='Enter IP Address'
        />
        <button type='submit'>Search</button>
      </form>

      {geoInfo && (
        <div>
          <p>IP: {geoInfo.ip}</p>
          <p>
            Location: {geoInfo.city}, {geoInfo.region}, {geoInfo.country}
          </p>
          <p>Coordinates: {geoInfo.loc}</p>
        </div>
      )}
      <div>
        <h2>Search History</h2>
        <ul>
          {history.map((entry) => (
            <li key={entry.id}>
              {entry.ipAddress} - {entry.locationData.city},{' '}
              {entry.locationData.country}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {geoInfo && (
          <MapContainer
            center={coordinates}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={coordinates}>
              <Popup>
                {geoInfo.city}, {geoInfo.country}
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Home;
