import React from "react";
import "./hero-banner.css";
import { Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner2.jpg";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-banner__content">
        <Typography variant="h1" className="hero-banner__title">
          WhiteBoard
        </Typography>
        <Typography
          fontWeight={700}
          color="textPrimary"
          sx={{ fontSize: { lg: "44px", xs: "40px" }, mb: "23px", mt: "30px" }}
        >
          Start Fresh. Train Right. <br /> Achieve More.
        </Typography>
        <Typography
          fontSize="22px"
          lineHeight="35px"
          mb={3}
          sx={{ lineHeight: "35px", mb: 3, color: "#0070B2" }}
        >
          Experience clarity in every workout.
        </Typography>
        <Button
          variant="contained"
          href="#exercises"
          sx={{ backgroundColor: "#00A5E0", color: "#ffffff" }} // Bright Blue with White text
        >
          Explore Exercises
        </Button>
        <Typography
          fontWeight={600}
          color="#C2D8EA" // Darkened Light Blue
          sx={{
            opacity: 0.5, // Increased the opacity for better visibility
            display: { lg: "block", xs: "none" },
            fontSize: "200px",
          }}
        >
          Elevate
        </Typography>
      </div>

      <img src={HeroBannerImage} alt="banner" className="hero-banner__img" />
    </div>
  );
};

export default HeroBanner;
