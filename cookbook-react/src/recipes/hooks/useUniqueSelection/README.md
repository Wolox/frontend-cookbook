## useUniqueSelection Hook

Hook with the logic to save an item identifier. Specially useful to handle radio buttons or tabs. The active/selected element can be controlled either from the parent or internally from the hook itself.

**Parameters**

| Variable | Type | Description |
|:---|:---|:---:|:---|
| onChange | (id: Id) => void | Function that will be executed when the selected id changes, returning the newly selected id |
| active | Id (optional) | Pass this option if you want to handle the active value from the hook's caller instead of internally |
| initialValue | Id (optional) | Pass this value if you want to have an initial selected value |

**Return values**

| Variable | Type | Description |
|:---|:---|:---:|:---|
| handleChange | (id: Id) => void | Function to pass to the selector each time it changes |
| activeValue | Id | Current selected value |

**Usage**

```jsx
// src/config/api is where we usually store this config
import api, { setupRequestMonitor, STATUS_CODES } from './useUniqueSelection';

const options = [{ id: 1, name: 'option_1' }, { id: 1, title: 'Option 1' }]

// Internally managed
function MyComponent() {
  const onItemChange = (id: number) => console.log('Selected item: ', id);
  const { handleChange, activeValue } = useUniqueSelection({ onChange: onItemChange, initialValue: 1 });
  
  return (
    <div>
      {options.map(option => (
        <input 
          type="radio" 
          name={option.name} 
          onChange={() => handleChange(option.id)} 
          checked={activeValue === option.id} 
          value={option.id} />
      ))}
    </div>
  )
}

// Externanlly managed
function MyComponent() {
  const [active, setActive] = useState(1); 
  const onItemChange = (id: number) => {
    setActive(id);
    console.log('Selected item: ', id)
  };
  const { handleChange, activeValue } = useUniqueSelection({ onChange: onItemChange, active: active });
  
  return (
    <div>
      {options.map(option => (
        <input 
          type="radio" 
          name={option.name} 
          onChange={() => handleChange(option.id)} 
          checked={activeValue === option.id} 
          value={option.id} />
      ))}
    </div>
  )
}
```
