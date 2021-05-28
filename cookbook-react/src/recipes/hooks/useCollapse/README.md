## useCollapse

Hook to handle collapsible HTML elements.

**Generic Value**

This hook requires a generic value `Element` which extends from `HTMLElement` in order to create a ref for any kind of element. 

**Parameters**

| Variable | Type | Default | Description |
|:---|:---|:---:|:---|
| defaultIsOpen | boolean | - | Determines if the element starts collapsed or expanded |
| onChange (optional) | - | (isOpen: boolean) => void | Function that executes after the collapse value changes |
| animateOnCollapseEffect (optional) | boolean | true | Determines if the onChange function executes immediatly or after the collapse animation |
| collapseTime | number | 300 | Time to execute the collapse animation in milliseconds |

**Return values**

| Variable | Type | Description |
|:---|:---|:---:|:---|
| handleCollapse | () => void | Function to collapse/expand |
| collapsibleRef | Ref<Element> | Ref to pass to the parent container of the collapsible area |
| collapsed | boolean | Determines if the element is collapsed or expanded |

**Usage**

```tsx
import useCollapse from './hooks/useCollapse';

const { handleCollapse, collapsibleRef, collapsed } = useCollapse<HTMLDivElement>({
  defaultIsOpen: !defaultIsClosed,
  onChange,
  animateOnCollapseEffect: false,
  collapseTime: 250
});
```
