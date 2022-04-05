import { useReducer } from 'react';
import Context from './Context';

const Provider = ( {children})=>{
    const [state,dispatch] = childrenuseReducer(reducer,initialState);
    <Context.Provider value={}>
        {children}
    </Context.Provider>
}
export default Provider;