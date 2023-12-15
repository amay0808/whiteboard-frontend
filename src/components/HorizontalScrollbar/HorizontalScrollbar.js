import React from "react";
import { Box } from "@mui/material";
import BodyPart from "../BodyPart/BodyPart"; // Corrected import

export const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
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
          <BodyPart
            item={item}
            selectedBodyPart={BodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      ))}
    </div>
  );
};
