/*
import React from "react";
import GoogleMapReact from "google-map-react";
import {
  Paper,
  Typography,
  dividerClasses,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";

const MapContainer = styled("div")(() => ({
  height: "85vh",
  width: "100%",
}));
const MarkerContainer = styled("div")(() => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
}));
const MarkerPaper = styled(Paper)(() => ({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
}));
const MarkerImage = styled("img")(() => ({
  cursor: "pointer",
}));

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:200px)");
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // Replace with your actual API key
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          // console.log("latitude value: ", lat);
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length &&
          places.map((place, i) => (
            <MarkerContainer
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!matches ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <MarkerPaper elevation={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <MarkerImage
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </MarkerPaper>
              )}
            </MarkerContainer>
          ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
*/
/*  
import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";

const MapContainer = {
  height: "85vh",
  width: "100%",
};

const MarkerContainer = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
};

const MarkerPaper = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
};

const MarkerTypography = {
  fontWeight: "bold",
  textAlign: "center",
};

const MarkerImage = {
  cursor: "pointer",
  width: "100%",
  height: "auto",
  marginBottom: "10px",
};

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:600px)");

  // Log to check if places and matches are being set correctly
  console.log("places: ", places);
  console.log("matches: ", matches);

  return (
    <div style={MapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // Replace with your actual API key
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            style={MarkerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              <Paper style={MarkerPaper} elevation={3}>
                <Typography
                  style={MarkerTypography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  style={MarkerImage}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            }
          </div>
        ))}
        {weatherData?.list &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
                alt="weather icon"
              />
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
*/
// import React, { useEffect, useState } from "react";
// import GoogleMapReact from "google-map-react";
// import { Paper, Typography, useMediaQuery } from "@mui/material";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import Rating from "@mui/material/Rating";

// const MapContainer = {
//   height: "85vh",
//   width: "100%",
// };

// const MarkerContainer = {
//   position: "absolute",
//   transform: "translate(-50%, -50%)",
//   zIndex: 1,
// };

// const MarkerPaper = {
//   padding: "10px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "100px",
// };

// const MarkerTypography = {
//   fontWeight: "bold",
//   textAlign: "center",
// };

// const MarkerImage = {
//   cursor: "pointer",
//   width: "100%",
//   height: "auto",
//   marginBottom: "10px",
// };

// const Map = ({
//   coords,
//   places,
//   setCoords,
//   setBounds,
//   setChildClicked,
//   weatherData,
// }) => {
//   const matches = useMediaQuery("(min-width:600px)");

//   // Local state for debugging
//   const [renderTrigger, setRenderTrigger] = useState(0);

//   useEffect(() => {
//     console.log("Places updated:", places);
//     // Trigger a render when places update
//     setRenderTrigger((prev) => prev + 1);
//   }, [places]);

//   return (
//     <div style={MapContainer}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // Replace with your actual API key
//         defaultCenter={coords}
//         center={coords}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         options={{
//           disableDefaultUI: true,
//           zoomControl: true,
//         }}
//         onChange={(e) => {
//           setCoords({ lat: e.center.lat, lng: e.center.lng });
//           setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//         onChildClick={(child) => setChildClicked(child)}
//         key={renderTrigger} // Force re-render when renderTrigger updates
//       >
//         {places?.map((place, i) => (
//           <div
//             style={MarkerContainer}
//             lat={Number(place.latitude)}
//             lng={Number(place.longitude)}
//             key={i}
//           >
//             {!matches ? (
//               <LocationOnOutlinedIcon color="primary" fontSize="large" />
//             ) : (
//               <Paper style={MarkerPaper} elevation={3}>
//                 <Typography
//                   style={MarkerTypography}
//                   variant="subtitle2"
//                   gutterBottom
//                 >
//                   {place.name}
//                 </Typography>
//                 <img
//                   style={MarkerImage}
//                   src={
//                     place.photo
//                       ? place.photo.images.large.url
//                       : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
//                   }
//                   alt={place.name}
//                 />
//                 <Rating
//                   name="read-only"
//                   size="small"
//                   value={Number(place.rating)}
//                   readOnly
//                 />
//               </Paper>
//             )}
//           </div>
//         ))}
//         {weatherData?.list &&
//           weatherData.list.map((data, i) => (
//             <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
//               <img
//                 src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
//                 height="70px"
//                 alt="weather icon"
//               />
//             </div>
//           ))}
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Map;
/*
import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { styled } from "@mui/material/styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails"; // Adjust the import path as necessary

const MapContainer = styled("div")(() => ({
  height: "85vh",
  width: "100%",
}));

const MarkerContainer = styled("div")(() => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
}));

const Map = ({ coords, places, setCoords, setBounds, setChildClicked }) => {
  const matches = useMediaQuery("(min-width:600px)");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
    setChildClicked(place);
  };

  return (
    <MapContainer ref={mapRef}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => handleMarkerClick(places[child])}
      >
        {places.length &&
          places.map((place, i) => (
            <MarkerContainer
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
              onClick={() => handleMarkerClick(place)}
            >
              {!matches ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper
                  elevation={3}
                  style={{ padding: "10px", width: "100px" }}
                >
                  <Typography variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                    style={{ width: "100px", height: "auto" }}
                  />
                </Paper>
              )}
            </MarkerContainer>
          ))}
      </GoogleMapReact>

      {selectedPlace && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            width: matches ? "400px" : "90%",
          }}
        >
          <PlaceDetails
            place={selectedPlace}
            selected={true}
            refProp={mapRef}
          />
        </div>
      )}
    </MapContainer>
  );
};

export default Map;
*/
/*
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import mapStyles from "../../mapStyles";

const MapContainer = {
  height: "85vh",
  width: "100%",
};

const MarkerContainer = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
};

const MarkerPaper = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
};

const MarkerTypography = {
  fontWeight: "bold",
  textAlign: "center",
};

const MarkerImage = {
  cursor: "pointer",
  width: "100%",
  height: "auto",
  marginBottom: "10px",
};

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // Replace with your actual API key
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length &&
          places.map((place, i) => (
            <div
              style={MarkerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!matches ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper style={MarkerPaper} elevation={3}>
                  <Typography
                    style={MarkerTypography}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    style={MarkerImage}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
        {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
                alt="weather icon"
              />
            </div>
          ))}
      </GoogleMapReact>
    </MapContainer>
  );
};
export default Map;
*/
/*
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import { width } from "@mui/system";

const MapContainer = {
  height: "85vh",
  width: "100%",
};

const MarkerContainer = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
};

const MarkerPaper = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "120px", // Adjusted width for better layout
};

const MarkerTypography = {
  fontWeight: "bold",
  textAlign: "center",
};

const MarkerImage = {
  cursor: "pointer",
  width: "100px",
};

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div style={MapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            style={MarkerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {true ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} style={MarkerPaper}>
                <Typography
                  style={MarkerTypography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  style={MarkerImage}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
*/
/*
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";

const MapContainer = {
  height: "85vh",
  width: "100%",
};

const MarkerContainer = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": {
    zIndex: 2,
  },
};

const MarkerPaper = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
};

const MarkerTypography = {
  fontWeight: "bold",
  textAlign: "center",
};

const MarkerImage = {
  cursor: "pointer",
  width: "100%",
  height: "auto",
  marginBottom: "10px",
};

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div style={MapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            style={MarkerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {isDesktop ? (
              <Paper elevation={3} style={MarkerPaper}>
                <Typography
                  style={MarkerTypography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  style={MarkerImage}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            ) : (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            )}
          </div>
        ))}
        {weatherData?.list &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
                alt="weather icon"
              />
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
*/
/*
/// finall
import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import mapStyles from "../../mapStyles";

const mapContainerStyle = {
  height: "85vh",
  width: "100%",
};

const markerContainerStyle = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
};

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    // console.log("Map updated with coords:", coords);
  }, [coords, places]);

  return (
    <div style={mapContainerStyle}>
      <GoogleMapReact
        key={`${coords.lat}-${coords.lng}`}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            style={markerContainerStyle}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <LocationOnOutlinedIcon color="primary" fontSize="large" />
          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              height="70px"
              alt="weather icon"
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
*/
/*
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import mapStyles from "../../mapStyles";

const mapContainerStyle = {
  height: "85vh",
  width: "100%",
};

const markerContainerStyle = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
};

const markerPaperStyle = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
};

const markerTypographyStyle = {
  fontWeight: "bold",
  textAlign: "center",
};

const markerImageStyle = {
  cursor: "pointer",
  width: "100%",
  height: "auto",
  marginBottom: "10px",
};

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div style={mapContainerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // Replace with your actual API key
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length &&
          places.map((place, i) => (
            <div
              style={markerContainerStyle}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!matches ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper style={markerPaperStyle} elevation={3}>
                  <Typography
                    style={markerTypographyStyle}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    style={markerImageStyle}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
        {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
                alt="weather icon"
              />
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
*/

/*
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import mapStyles from "../../mapStyles";
import Rating from "@mui/material/Rating";

const class_paper = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
};
const class_mapContainer = {
  height: "85vh",
  width: "100%",
};
const class_markerContainer = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
};
const class_pointer = {
  cursor: "pointer",
};

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    console.log("places: ", places);
  }, [coords, places]);

  return (
    <div style={class_mapContainer}>
      <GoogleMapReact
        key={`${coords.lat}-${coords.lng}`}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            style={class_markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} style={class_paper}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  style={class_pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
*/

import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import mapStyles from "../../mapStyles";
import Rating from "@mui/material/Rating";

const class_paper = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
};
const class_mapContainer = {
  height: "85vh",
  width: "100%",
};
const class_markerContainer = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
};
const class_pointer = {
  cursor: "pointer",
};

const Map = ({
  coords,
  places,
  selectedPlace,
  setCoords,
  setBounds,
  setChildClicked,
}) => {
  const matches = useMediaQuery("(min-width:600px)");

  // useEffect(() => {
  //   // console.log("Map updated with coords:", coords);
  // }, [coords, places]);

  return (
    <div style={class_mapContainer}>
      <GoogleMapReact
        // key={`${coords.lat}-${coords.lng}`}
        key={places}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            style={class_markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {matches ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} style={class_paper}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  style={class_pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            )}
          </div>
        ))}
        {selectedPlace && (
          <div
            style={class_markerContainer}
            lat={Number(selectedPlace.latitude)}
            lng={Number(selectedPlace.longitude)}
            key="selectedPlace"
          >
            <Paper elevation={3} style={class_paper}>
              <Typography variant="subtitle2" gutterBottom>
                {selectedPlace.name}
              </Typography>
              <img
                style={class_pointer}
                src={
                  selectedPlace.photo
                    ? selectedPlace.photo
                    : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                }
                alt={selectedPlace.name}
              />
              <Rating
                name="read-only"
                size="small"
                value={Number(selectedPlace.rating)}
                readOnly
              />
            </Paper>
          </div>
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
