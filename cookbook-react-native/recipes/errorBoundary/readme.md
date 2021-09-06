# Cookbook React Native Bootstrap: Error Boundary Recipe

## Usage

Component that catches JavaScript errors and displays a fallback UI instead of the component tree that crashed.

``` ts
import ErrorBoundary from 'recipes/errorBoundary';
...

function App() {
  ...
  return (
    <ErrorBoundary errorComponent={<ErrorComponent />}>
      <Component />
    </ErrorBoundary>
  );
}

export default App;
```

## Props

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| errorComponent | - | React.FunctionComponent | Component that will be displayed instead of component tree that crashed. |
