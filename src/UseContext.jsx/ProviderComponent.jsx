import React, { useState } from "react"
import ComponentX from "./componentX";
// Context creation
export const SnameContext = React.createContext();
export const MarksContext = React.createContext();

const ProviderComponent = () => {
  const [sname, setSname] = useState("Aman");
  const [marks, setMarks] = useState(90);

  return (
    <div>
      <h2>This is ProviderComponent</h2>

      <SnameContext.Provider value={sname}>
        <MarksContext.Provider value={marks}>
          <ComponentX />
        </MarksContext.Provider>
      </SnameContext.Provider>
    </div>
  );
};

export default ProviderComponent;
