import React, { useState, useEffect } from "react"; // Added useEffect import
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData"; // Corrected variable name
import { HorizontalScrollbar } from "../HorizontalScrollbar/HorizontalScrollbar";
import BodyPart from "../BodyPart/BodyPart"; // Corrected import

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      // Corrected function name
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions // Corrected variable name
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExerciseData(); // Corrected function name
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions // Corrected variable name
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises); // Corrected function name
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" }, color: "textPrimary" }}
        mb="50px"
        textAlign="center"
      >
        Awesome exercises you <br />
        should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          variant="outlined"
          sx={{
            height: "76px",
            input: {
              fontWeight: "700",
              borderRadius: "4px",
              paddingLeft: "15px",
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#E8F4FD",
            borderRadius: "40px",
            paddingRight: "100px",
            border: "none",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
          placeholder="Search Exercises"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#00A5E0",
            color: "#fff",
            textTransform: "none",
            position: "absolute",
            top: "50%",
            right: "15px",
            transform: "translateY(-50%)",
            width: { lg: "175px", xs: "80px" },
            borderRadius: "20px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={BodyPart} // Make sure this usage is correct and necessary
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
