import React from 'react';
import '../App.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


mapboxgl.accessToken = "pk.eyJ1IjoibGVzcm9uaWUiLCJhIjoiY2twcHQxanczMHFteTJwbW5mNTJrNGx4dSJ9.PasoedOsW4f0elCegkS_8w"

class Home extends React.Component {
    componentDidMount() {
  
        const map = new mapboxgl.Map({
          container: this.mapWrapper,
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [-0.196224, 5.650562],
          zoom: 12
        });

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving'
        })

        map.addControl(directions, 'top-left');
    }
    render() {
      return (
        <>
        <div 
            ref={el => (this.mapWrapper = el)} 
            className="mapWrapper" 
        />
        </>
      );
      <div className="images">
        <img src="/image/assignment img.jpg" alt="assignment image"></img>
      </div>
    }
}


export default Home;
