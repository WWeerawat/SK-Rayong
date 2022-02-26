import React from "react";
import GoogleMapReact from "google-map-react";
const GoogleMap = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDDfpcBuS_bi7bTLjCFyuBJlEdHc5zJFag" }}
        defaultCenter={{
          lat: 13.756331,
          lng: 100.501762,
        }}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
