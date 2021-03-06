import React, { useState } from "react";

const ReactContextAPI = React.createContext();

export const AppContext = ({ children }) => {
  const [name, setName] = useState("");
  return (
    <ReactContextAPI.Provider value={{ name, setName }}>
      {children}
    </ReactContextAPI.Provider>
  );
};

export default ReactContextAPI;
