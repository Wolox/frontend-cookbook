import { Key } from 'react';

export function getInitialSelectedState<K extends Key>(
  selectedOptions?: Array<K>,
  defaultOption?: K
): Record<K, boolean> {
  const selected: Record<K, boolean> = {} as Record<K, boolean>;
  if (selectedOptions) {
    selectedOptions.forEach((option: K) => (selected[option] = true));
  } else if (defaultOption) {
    selected[defaultOption] = true;
  }
  return selected;
}
