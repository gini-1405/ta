// import React, { useState, useEffect } from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import { getPlacesData, getWeatherData } from "./api/travelAdvisorAPI";
// import Header from "./components/Header/Header";
// import List from "./components/List/List";
// import Map from "./components/Map/Map";

// const App = () => {
//   const [type, setType] = useState("restaurants");
//   const [rating, setRating] = useState("");

//   const [coords, setCoords] = useState({});
//   const [bounds, setBounds] = useState(null);

//   const [weatherData, setWeatherData] = useState([]);
//   const [filteredPlaces, setFilteredPlaces] = useState([]);
//   const [places, setPlaces] = useState([]);

//   const [autocomplete, setAutocomplete] = useState(null);
//   const [childClicked, setChildClicked] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       ({ coords: { latitude, longitude } }) => {
//         setCoords({ lat: latitude, lng: longitude });
//       }
//     );
//   }, []);

//   useEffect(() => {
//     const filtered = places.filter((place) => Number(place.rating) > rating);

//     setFilteredPlaces(filtered);
//   }, [rating]);

//   useEffect(() => {
//     if (bounds) {
//       setIsLoading(true);

//       getWeatherData(coords.lat, coords.lng).then((data) =>
//         setWeatherData(data)
//       );

//       getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
//         setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
//         setFilteredPlaces([]);
//         setRating("");
//         setIsLoading(false);
//       });
//     }
//   }, [bounds, type]);

//   const onLoad = (autoC) => setAutocomplete(autoC);

//   const onPlaceChanged = () => {
//     const lat = autocomplete.getPlace().geometry.location.lat();
//     const lng = autocomplete.getPlace().geometry.location.lng();

//     setCoords({ lat, lng });
//   };

//   return (
//     <>
//       <CssBaseline />
//       <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
//       <Grid container spacing={3} style={{ width: "100%" }}>
//         <Grid item xs={12} md={4}>
//           <List
//             isLoading={isLoading}
//             childClicked={childClicked}
//             places={filteredPlaces.length ? filteredPlaces : places}
//             type={type}
//             setType={setType}
//             rating={rating}
//             setRating={setRating}
//           />
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           md={8}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Map
//             setChildClicked={setChildClicked}
//             setBounds={setBounds}
//             setCoords={setCoords}
//             coords={coords}
//             places={filteredPlaces.length ? filteredPlaces : places}
//             weatherData={weatherData}
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// };
// export default App;
/*
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { getPlacesData, getWeatherData } from "./api/travelAdvisorAPI";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          const filtered = data.filter(
            (place) => place.name && place.num_reviews > 0
          );
          setPlaces(filtered);
          setFilteredPlaces([]);
          setRating("");
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching places:", error);
          setIsLoading(false);
        });
    }
  }, [bounds, type, coords]);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating, places]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoords({ lat, lng });
  };

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
// */
// import React, { useState, useEffect } from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Grid from "@mui/material/Grid";
// import { getPlacesData, getWeatherData } from "./api/travelAdvisorAPI";
// import Header from "./components/Header/Header";
// import List from "./components/List/List";
// import Map from "./components/Map/Map";

// const App = () => {
//   const [type, setType] = useState("restaurants");
//   const [rating, setRating] = useState("");
//   const [coords, setCoords] = useState({});
//   const [bounds, setBounds] = useState(null);
//   const [weatherData, setWeatherData] = useState([]);
//   const [places, setPlaces] = useState([]);
//   const [filteredPlaces, setFilteredPlaces] = useState([]);
//   const [autocomplete, setAutocomplete] = useState(null);
//   const [childClicked, setChildClicked] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       ({ coords: { latitude, longitude } }) => {
//         setCoords({ lat: latitude, lng: longitude });
//       },
//       (error) => {
//         console.error("Error getting location", error);
//       }
//     );
//   }, []);

//   useEffect(() => {
//     if (bounds) {
//       setIsLoading(true);
//       getWeatherData(coords.lat, coords.lng)
//         .then((data) => setWeatherData(data))
//         .catch((error) => {
//           console.error("Error fetching weather data:", error);
//         });

//       getPlacesData(type, bounds.sw, bounds.ne)
//         .then((data) => {
//           const filtered = data.filter(
//             (place) => place.name && place.num_reviews > 0
//           );
//           setPlaces(filtered);
//           setFilteredPlaces([]);
//           setRating("");
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching places:", error);
//           setIsLoading(false);
//         });
//     }
//   }, [bounds, type, coords]);

//   useEffect(() => {
//     const filtered = places.filter((place) => Number(place.rating) > rating);
//     setFilteredPlaces(filtered);
//   }, [rating, places]);

//   const onLoad = (autoC) => setAutocomplete(autoC);

//   const onPlaceChanged = () => {
//     const place = autocomplete.getPlace();
//     const lat = place.geometry.location.lat();
//     const lng = place.geometry.location.lng();
//     setCoords({ lat, lng });
//   };

//   return (
//     <>
//       <CssBaseline />
//       <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
//       <Grid container spacing={3} style={{ width: "100%" }}>
//         <Grid item xs={12} md={4}>
//           <List
//             isLoading={isLoading}
//             childClicked={childClicked}
//             places={filteredPlaces.length ? filteredPlaces : places}
//             type={type}
//             setType={setType}
//             rating={rating}
//             setRating={setRating}
//           />
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           md={8}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Map
//             setChildClicked={setChildClicked}
//             setBounds={setBounds}
//             setCoords={setCoords}
//             coords={coords}
//             //  places={filteredPlaces.length ? filteredPlaces : places}
//             // places={places}
//             weatherData={weatherData}
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default App;
/*
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { getPlacesData, getWeatherData } from "./api/travelAdvisorAPI";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        if (data) {
          setPlaces(
            data.filter((place) => place.name && place.num_reviews > 0)
          );
          setFilteredPlaces([]);
          setRating("");
        }
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  useEffect(() => {
    if (places && places.length > 0) {
      const filtered = places.filter((place) => Number(place.rating) > rating);
      setFilteredPlaces(filtered);
    }
  }, [rating, places]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoords({ lat, lng });
  };

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
*/
/*
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { getPlacesData, getWeatherData } from "./api/travelAdvisorAPI";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        if (data) {
          setPlaces(
            data.filter((place) => place.name && place.num_reviews > 0)
          );
          setFilteredPlaces([]);
          setRating("");
        }
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  useEffect(() => {
    if (places && places.length > 0) {
      const filtered = places.filter((place) => Number(place.rating) > rating);
      setFilteredPlaces(filtered);
    }
  }, [rating, places]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    setCoords({ lat, lng });
    setSelectedPlace({
      name: place.name,
      latitude: lat,
      longitude: lng,
      photo: place.photos ? place.photos[0].getUrl() : null,
      rating: place.rating || null,
    });
  };

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
            selectedPlace={selectedPlace}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
*/

import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { getPlacesData, getWeatherData } from "./api/travelAdvisorAPI";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        if (data) {
          setPlaces(
            data.filter((place) => place.name && place.num_reviews > 0)
          );
          setFilteredPlaces([]);
          setRating("");
        }
        setIsLoading(false);
      });
    }
  }, [bounds, type, coords.lat, coords.lng]);

  useEffect(() => {
    if (places && places.length > 0) {
      const filtered = places.filter((place) => Number(place.rating) > rating);
      setFilteredPlaces(filtered);
    }
  }, [rating, places]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    setCoords({ lat, lng });
  };

  const handleTypeChange = (newType) => {
    setType(newType);
    setFilteredPlaces([]);
    setChildClicked(null); // Reset selected place when type changes
  };

  return (
    <>
      <CssBaseline />
      <Header
        onPlaceChanged={onPlaceChanged}
        onLoad={onLoad}
        setType={handleTypeChange}
      />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
