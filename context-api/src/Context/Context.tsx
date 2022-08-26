import { createContext, useContext } from 'react';
import { GlobalContent } from './ContextProps';

const Context = createContext<GlobalContent>({
    counter: 0,
    setCounter: () => {}
});

export const useGlobalContext = () => useContext(Context);
export default Context;