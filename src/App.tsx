import { FunctionComponent } from "react";

import image from "./assets/magic.gif";

const App: FunctionComponent = () => {
  return (
    <div>
      <h1>test</h1>
      <img src={image} alt="React logo" />
    </div>
  );
};

export default App;
