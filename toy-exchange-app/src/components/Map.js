import "mapbox-gl/dist/mapbox-gl.css";
import { BsSearch } from 'react-icons/bs'
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
function Mapbox() {
  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);

  return (
    <div className="flex flex-col md:flex-row  h-[300px] bg-sky-600 pt-4 md:pt-0">
      <div className="md:m-auto ">
        <p className="h-[100px] rounded-md text-[20px] text-center md:h-[90px] md:w-[500px] border-2 md:rounded-md pt-6 font-bold bg-white lg:w-[800px] lg:p-4">We are dedicated to helping people help people through toys. Find ways to help near you!</p>
        <div className="flex h-10 rounded-lg w-[300px] mx-auto my-2 bg-white lg:w-[400px] lg:mt-6" >
        <BsSearch size={20}  className='m-2 md:mr-7 '/>
            <input type='input' placeholder='Search' className="" ></input>
        </div>
      </div>
      <div className="md:w-[400px] lg:w-[500px]">
      <Map
        mapboxAccessToken={"pk.eyJ1IjoiYWlreW4iLCJhIjoiY2xic253ZG9wMGFsaTNxcW5xbzc0ZjIwciJ9.nXAJ0IhZiZtlY_whvXoJHQ"}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        style={{
            width: "500px",
            padding: "20px",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
    </div>
  );
}

export default Mapbox;