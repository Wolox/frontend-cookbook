import React, { useReducer } from 'react';

interface ActionType {
  type: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
interface Props<S extends {}, A> {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Context: React.Context<{ state: S; dispatch: React.Dispatch<A> }>;
  reducer: React.Reducer<S, A>;
  initialState: S;
}

// eslint-disable-next-line @typescript-eslint/ban-types
const withProvider = <P extends {}, S, A extends ActionType>({
  Context,
  reducer,
  initialState
}: Props<S, A>) => (WrappedComponent: React.ComponentType<P>) => {
  function ProviderWrapper(props: P) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <Context.Provider value={{ state, dispatch }}>
        <WrappedComponent {...props} />
      </Context.Provider>
    );
  }

  return ProviderWrapper;
};

export default withProvider;
