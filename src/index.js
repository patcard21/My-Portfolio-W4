import * as React from "react";
import Button from "@mui/material/Button";

function App() {
  return <Button variant="contained">Hello World</Button>;
}


var motionQuery = matchMedia("(prefers-reduced-motion)");
function handleReduceMotionChanged() {
  if (motionQuery.matches) {
    /* adjust motion of 'transition' or 'animation' properties */
  } else {
    /* standard motion */
  }
}
motionQuery.addListener(handleReduceMotionChanged);
handleReduceMotionChanged(); // trigger once on load if needed
