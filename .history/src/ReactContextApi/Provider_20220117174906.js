import { useReducer } from "react";
import Context from "./Context";
import reducer, { initialState } from "./Reducer";

function Context ({children}){
  return (
    <Context.Provider value={[state, dispatch]}></Context.Provider>
  )
}
export default Provider;
