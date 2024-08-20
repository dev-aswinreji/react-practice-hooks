import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UseEffectLearning from "./useEffect";
import { WindowWidthChecker } from "./windowWidth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseEffectLearning />
  </StrictMode>
);
