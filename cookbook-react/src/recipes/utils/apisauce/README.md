## Api Configuration

Apisauce configuration including a monitor, request/repsonse transforms and status codes constants.

**Exports**

| Variable | Type | Description |
|:---|:---|:---:|:---|
| api (default) | ApisauceInstance | Default export. Returns the Apisauce object with which you may perform requests. **Note:** make sure you have the `REACT_API_BASE_URL` set. Includes a request transform that transforms all body parameters into snake_case and a response transform that transforms the response body to camelCase |
| setupRequestMonitor | Function | Adds a monitor that executes the passed  callback when an enpoint returns a response |
| STATUS_CODES | object | An object including all status codes used by the app |

**Usage**

```jsx
// src/config/api is where we usually store this config
import api, { setupRequestMonitor, STATUS_CODES } from 'config/api';

function MyComponent() {
  useEffect(() => {
    setupRequestMonitor((response) => {
      if (response.status === STATUS_CODES.unauthorized) {
        // Do something, maybe show an error page
      }
    });
  }, []);

  const handleSomeRequest = () => {
    // We recommend to have `services` folders for each resource where the requests
    // are performed. But as an example:
    const response = await api.get('/endpoint');
    console.log(response.data);
  }

  return (
    ...
  )
}
```
