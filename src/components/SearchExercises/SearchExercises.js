import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" }, color: "textPrimary" }} // Applying the blue color to the title
        mb="50px"
        textAlign="center"
      >
        Awesome exercises you <br />
        should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          variant="outlined" // This is important
          sx={{
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
              // Target the outlined root
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
            transform: "translateY(-50%)", // Center the button vertically
            width: { lg: "175px", xs: "80px" },
            borderRadius: "20px",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
