import React from 'react';
import mapboxgl from 'mapbox-gl';
import './mapbox.scss';

class Map extends React.Component {
    constructor(props){
        super(props);
        mapboxgl.accessToken = 'pk.eyJ1IjoidmFybmFldiIsImEiOiJjazVvYzc1ZXUwNWJpM2txbGhwcng4ZmZ4In0.wU3lZDBw6Dwi4eZ09ZEe3A';
    }
    
    componentDidMount() {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9'
      });
    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
      const style = {
        position: 'absolute',
        top: 80,
        bottom: 0,
        width: '100%'
      };
  
      return <div style={style} ref={el => this.mapContainer = el} />;
    }
  }

export default Map;