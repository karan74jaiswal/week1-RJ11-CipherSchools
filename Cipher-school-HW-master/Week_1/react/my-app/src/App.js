import React from "react";
import AlluserList from "./AlluserList.js";
import Test from "./Test.js";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Test key={1} />
      <AlluserList />
    </div>
  );
};

export default App;
