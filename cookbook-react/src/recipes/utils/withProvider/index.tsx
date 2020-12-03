import React, { useReducer } from 'react';

interface ActionType {
  type: string;
}

interface Props<S extends {}, A> {
  Context: React.Context<{ state: S; dispatch: React.Dispatch<A> }>;
  reducer: React.Reducer<S, A>;
  initialState: S;
}

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
