import { useReducer } from 'react';
import Context from './Context';

const Provider = ( {children})=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    <Context.Provider value={[sta]}>
        {children}
    </Context.Provider>
}
export default Provider;