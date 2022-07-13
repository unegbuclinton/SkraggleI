import { useMemo } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useImmer } from 'use-immer';

const ElementContext = createContext({});
export const defaultElementConfig = {
    style: {
        height: 35,
        width: 100,
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden',
        borderCollapse: 'separate',
        boxShadow: '-2px 3px 10px -1px rgba(0,0,0,0.75)',
    },
    children: 'New element',
    icon: {
        color: 'black',
        jsx: null
    }
}

export const ElementContextProvider = ({ children }) => {

    // state
    const [elementConfig, setElementConfig] = useImmer(defaultElementConfig);

    // utils
    const toggleElementBoxShadow = () => {
        if (elementConfig.style.boxShadow) return setElementConfig(draft => {
            delete draft.style.boxShadow;
        });
        setElementConfig(draft => {
            draft.style.boxShadow = defaultElementConfig.style.boxShadow;
        });
    }

    const memoisedContext = useMemo(() => ({
        elementConfig,
        setElementConfig,
        toggleElementBoxShadow
    }), [elementConfig, setElementConfig, toggleElementBoxShadow]);

    return <ElementContext.Provider value={memoisedContext}>
        {children}
    </ElementContext.Provider>
}

export const useElement = () => {
    const context = useContext(ElementContext);
    if (!context) throw '`useElement` cannot be used outside `ElementContextProvider`';

    return context;
}