import { useReducer } from 'react';
import Context from './Context';

const Provider = ( {children})=>{
    const [state,] = useReducer(reducer,ini)
    <Context.Provider value={}>
        {children}
    </Context.Provider>
}
export default Provider;