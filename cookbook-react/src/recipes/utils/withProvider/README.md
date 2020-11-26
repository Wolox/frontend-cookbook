## withProvider

This HOC wraps the component with a Context containing a state and a dispatch function to modify it. It mimics something like a redux store for a component and its children.

## When to use

This HOC is recommended for wrapping Route components (meaning the highest component in a specific route) as it generates a state for all its children to use. Take into account that this uses `useReducer`, which might be an overkill for some cases where the state is small and/or you don't need to pass it through many levels of children.
For those cases where this is not necessary, you can manually create a context using useState instead of useReducer and passing the setter this hook returns as your way of modifying the state.

### Params

| Name         | Type                                                     | Description                                                                                                |
|--------------|----------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Context      | React.Context<{ state: U, dispatch: React.dispatch<V> }> | A context whose Provider is used to wrap the component. Its value is an object with `state` and `dispatch` |
| reducer      | React.Reducer<U, V>                                      | A reducer which defines the way the state is modified                                                      |
| initialState | U                                                        | An initial state for the `state` value inside the Context                                                  |

## Generic values

- P: The contained component's Prop type.
- S: The `state`'s type.
- A: The Action type. Extends ActionType, which means it must contain a `type`

Note: Usually this values are inferred from the parameters, so most of the times you don't 

## Usage

A basic usage would be the following:

```
import { createContext } from 'react';
const Context = createContext();

const reducer = (state: State, action: Action): State => { ... }
const initialState = { ... }

export default withProvider({ Context, reducer, initialState: INITIAL_STATE })(MyComponent);
```

This enables `MyComponent` to access `useContext` and get both the context's state as well as the `dispatch` function to trigger changes using actions.
