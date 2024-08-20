import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseEffectLearning from "./useEffect";
import { WindowWidthChecker } from "./windowWidth";
import { LearningProps } from "./props";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UseEffectLearning /> */}
    {/* <WindowWidthChecker /> */}
    < LearningProps name="panda" />
  </StrictMode>
);
