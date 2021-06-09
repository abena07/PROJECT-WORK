import React,{useState} from 'react'
// import img from "../image/ug.jpg"
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



function Home() {
const [viewport, setViewport] = useState
({
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
              
    });
    
    
       return (
        <div>
            
           
            <ReactMapGL
             mapboxApiAccesToken ={"pk.eyJ1IjoibGVzcm9uaWUiLCJhIjoiY2twcHQxanczMHFteTJwbW5mNTJrNGx4dSJ9.PasoedOsW4f0elCegkS_8w"}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
          
        </div>
    )
}


export default Home
