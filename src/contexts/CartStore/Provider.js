import { useReducer } from 'react';
import Context from './Context';
import reducer, { initStore } from './reducer';
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initStore);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
};
export default Provider;
