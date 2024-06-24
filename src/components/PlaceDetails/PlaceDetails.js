import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const ChipStyled = styled(Chip)(({ theme }) => ({
    margin: "5px 5px 5px 0",
  }));

  const TypographyStyled = styled(Typography)(({ theme }) => ({
    marginBottom: "8px",
  }));

  const ButtonStyled = styled(Button)(({ theme }) => ({
    // Add your styles here
  }));

  const CardStyled = styled(Card)(({ theme }) => ({
    marginTop: "20px",
    position: "relative",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
    },
  }));

  const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
    height: 350,
  }));

  const CardContentStyled = styled(CardContent)(({ theme }) => ({
    "&:last-child": {
      paddingBottom: "16px",
    },
  }));

  const BoxStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  }));

  const ChipContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }));

  const ChipLabelStyled = styled(Typography)(({ theme }) => ({
    marginRight: theme.spacing(1),
  }));

  return (
    <CardStyled elevation={6}>
      <CardMediaStyled
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContentStyled>
        <TypographyStyled gutterBottom variant="h5">
          {place.name}
        </TypographyStyled>
        <BoxStyled>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </Typography>
        </BoxStyled>
        <BoxStyled>
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </BoxStyled>
        <BoxStyled>
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </BoxStyled>
        <ChipContainer>
          {place?.awards?.map((award) => (
            <ChipStyled key={award.display_name} label={award.display_name} />
          ))}
        </ChipContainer>
        <ChipContainer>
          {place?.cuisine?.map(({ name }) => (
            <ChipStyled key={name} label={name} />
          ))}
        </ChipContainer>
        {place.address && (
          <TypographyStyled gutterBottom variant="body2" color="textSecondary">
            <LocationOnIcon /> {place.address}
          </TypographyStyled>
        )}
        {place.phone && (
          <TypographyStyled variant="body2" color="textSecondary">
            <PhoneIcon /> {place.phone}
          </TypographyStyled>
        )}
      </CardContentStyled>
      <CardActions>
        <ButtonStyled
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </ButtonStyled>
        <ButtonStyled
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </ButtonStyled>
      </CardActions>
    </CardStyled>
  );
};

export default PlaceDetails;
