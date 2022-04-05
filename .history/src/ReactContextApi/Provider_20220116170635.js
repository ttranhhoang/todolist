import { useReducer } from 'react';
import Context from './Context';

const Provider = ( {children})=>{
    const [state,dispat] = useReducer(reducer,initialState);
    <Context.Provider value={}>
        {children}
    </Context.Provider>
}
export default Provider;