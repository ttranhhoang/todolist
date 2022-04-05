import { useReducer } from "react";
import Context from "./Context";
import re
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  <Context.Provider value={[state, dispatch]}>
      {children}
  </Context.Provider>;
};
export default Provider;
