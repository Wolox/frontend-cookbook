import React, { useReducer } from 'react';

interface Props {
  Context: any;
  reducer: any;
  state: object;
}
export interface ContextInterface {
  dispatch?: React.Dispatch<any>;
  state?: any;
}
function withProvider({ Context, reducer, state: initialState }: Props) {
  return function Wrapped(WrappedComponent: Function) {
    return function PropsProxy(props: any) {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <Context.Provider value={{ state, dispatch } as ContextInterface}>
          <WrappedComponent {...props} />
        </Context.Provider>
      );
    };
  };
}
export default withProvider;
