import { useState } from "react";
import FrontComp2 from "./FrontComp2";
import BackComp2 from "./BackComp2";

function App() {
  const [mode, setMode] = useState("both");

  const handieSetMode = (mode) => {
    setMode(mode);
  };

  let contents = "";

  if (mode === "front") {
    contents = (
      <>
        <FrontComp2 onSetMode={(mode) => setMode(mode)} />
      </>
    );
  } else if (mode === "back") {
    contents = (
      <>
        <BackComp2 setMode={setMode} />
      </>
    );
  } else {
    contents = (
      <>
        <FrontComp2 onSetMode={(mode) => setMode(mode)} />
        <BackComp2 setMode={setMode} />
      </>
    );
  }

  return <>{contents}</>;
}

export default App;