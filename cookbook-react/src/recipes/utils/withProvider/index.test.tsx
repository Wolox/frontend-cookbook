import React, { createContext, useContext, Dispatch } from 'react';
import { render, fireEvent } from '@testing-library/react';

import withProvider from '.';

interface State {
  foo: number;
}

interface Action {
  type: string;
  payload: number;
}

interface Store {
  state: State;
  dispatch: Dispatch<Action>;
}

const initialState = { foo: 0 };

const Context = createContext<Store>({
  state: { ...initialState },
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
  dispatch: () => {}
});

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FOO': {
      return { ...state, foo: action.payload };
    }
    default: {
      return state;
    }
  }
};

function InnerComponent() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <span>{state.foo}</span>
      <button type="button" onClick={() => dispatch({ type: 'SET_FOO', payload: state.foo + 1 })}>
        Update
      </button>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const WrappedComponent = withProvider({ Context, reducer, initialState })(InnerComponent);

describe('#ProviderWrapper', () => {
  test('by default it shows the initial value', () => {
    const { queryByText } = render(<WrappedComponent />);
    expect(queryByText('0')).not.toBeNull();
  });

  test('it shows the correct value when it changes', () => {
    const { queryByText } = render(<WrappedComponent />);

    fireEvent.click(queryByText('Update')!);

    expect(queryByText('1')).not.toBeNull();
  });
});
