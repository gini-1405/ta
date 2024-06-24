import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import styled from "@mui/material/styles/styled";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const Container = styled("div")({
  padding: "25px",
});

const ListContainer = styled("div")({
  height: "75vh",
  overflow: "auto",
});
const FormContainer = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

const LoadingContainer = styled("div")({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);
  console.log(" clicked rishabh ", { childClicked });
  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <Container>
      <Typography variant="h4">Food & Dining around you</Typography>
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress size="5rem" />
        </LoadingContainer>
      ) : (
        <>
          <FormContainer>
            {/* <InputLabel id="type">Type</InputLabel> */}
            Type
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormContainer>
          <FormContainer>
            Rating
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormContainer>
          <ListContainer>
            <Grid container spacing={3}>
              {places?.map((place, i) => (
                <Grid ref={elRefs[i]} item xs={12} key={i}>
                  <PlaceDetails
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    place={place}
                  />
                </Grid>
              ))}
            </Grid>
          </ListContainer>
        </>
      )}
    </Container>
  );
};

export default List;
