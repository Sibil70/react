import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import mapboxToken from '../../tokens/tokens'
import './mapbox.scss';

const Map = () => {
  let mapContainer;

  useEffect(() => {
    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [30.2656504, 59.8029126],
      zoom: 12
    });

    return () => {
      map.remove();
    }

  }, [mapContainer]);

  const style = {
    position: 'absolute',
    top: 80,
    bottom: 0,
    left: 15,
    right: 15,
  };

  return <div className="map" style={style} ref={el => mapContainer = el} />;
}

export default Map;