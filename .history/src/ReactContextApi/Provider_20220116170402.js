import Context from './Context';

const Provider = ( {children})=>{
    <Context.Provider value={}>
        {children}
    </Context.Provider>
}
export default class Context extends