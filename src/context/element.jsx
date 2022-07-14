import { createContext, useContext, useMemo } from 'react';
import { useImmer } from 'use-immer';

const ElementContext = createContext({});
export const defaultElementConfig = {
  parentStyle: {},
  style: {
    height: 35,
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    borderCollapse: 'separate',
    boxShadow: '-2px 3px 10px -1px rgba(0,0,0,0.75)'
  },
  children: 'New element',
  icon: {
    color: 'black',
    jsx: null
  },
  name: '',
  scrollOffset: '0px'
};

export const ElementContextProvider = ({ children }) => {
  // state
  const [elementConfig, setElementConfig] = useImmer(defaultElementConfig);

  // utils
  const toggleElementBoxShadow = () => {
    if (elementConfig.style.boxShadow)
      return setElementConfig((draft) => {
        delete draft.style.boxShadow;
      });
    setElementConfig((draft) => {
      draft.style.boxShadow = defaultElementConfig.style.boxShadow;
    });
  };
  const changeChildrenAttribute = (e) => {
    setElementConfig((draft) => {
      draft.children = e.target.value;
    });
  };
  const changeStyleAttribute = (key, e, type = 'style') => {
    setElementConfig((draft) => {
      draft[type][key] = e.target.value;
    });
  };
  const changeAlignment = (alignment) => {
    switch (alignment) {
      case 'left':
        return setElementConfig((draft) => {
          draft.parentStyle.justifyContent = 'start';
        });
      case 'right':
        return setElementConfig((draft) => {
          draft.parentStyle.justifyContent = 'end';
        });
      default:
        throw '`alignment` must be one of `left` or `right`';
    }
  };
  const changePosition = (position, value) => {
    switch (position) {
      case 'top':
        return setElementConfig((draft) => {
          draft.parentStyle.top = value ?? draft.scrollOffset;
          draft.parentStyle.bottom = undefined;
        });
      case 'bottom':
        return setElementConfig((draft) => {
          draft.parentStyle.bottom = value ?? draft.scrollOffset;
          draft.parentStyle.top = undefined;
        });
      default:
        throw '`position` must be one of `top` or `bottom`';
    }
  };
  const changeScrollOffset = (e) => {
    let { value } = e.target;
    value = value + 'px';

    setElementConfig((draft) => {
      draft.scrollOffset = value;

      const position =
        draft.parentStyle.top !== undefined
          ? 'top'
          : draft.parentStyle.bottom !== undefined
          ? 'bottom'
          : undefined;
      if (position !== undefined) draft.parentStyle[position] = value;
    });
  };

  const memoisedContext = useMemo(
    () => ({
      elementConfig,
      setElementConfig,
      toggleElementBoxShadow,
      changeChildrenAttribute,
      changeStyleAttribute,
      changeAlignment,
      changePosition,
      changeScrollOffset
    }),
    [
      elementConfig,
      setElementConfig,
      toggleElementBoxShadow,
      changeChildrenAttribute,
      changeStyleAttribute,
      changeAlignment,
      changePosition,
      changeScrollOffset
    ]
  );

  return <ElementContext.Provider value={memoisedContext}>{children}</ElementContext.Provider>;
};

export const useElement = () => {
  const context = useContext(ElementContext);
  if (!context) throw '`useElement` cannot be used outside `ElementContextProvider`';

  return context;
};
