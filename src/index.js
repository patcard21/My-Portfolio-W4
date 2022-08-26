

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
