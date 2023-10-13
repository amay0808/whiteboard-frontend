import React from "react";
import { Box } from "@mui/material";

export const HorizontalScrollbar = ({ data }) => {
  // Corrected the map function and added a key prop
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemid={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {item}
        </Box>
      ))}
    </div>
  );
};
