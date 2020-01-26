import React from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
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

    style = {
      position: 'absolute',
      top: 80,
      bottom: 0,
      width: '100%'
    };

    static propTypes = {
      style: PropTypes.object,
      map: PropTypes.object
    }
    render() {

      return <div style={this.style} ref={el => this.mapContainer = el} />;
    }
  }

export default Map;