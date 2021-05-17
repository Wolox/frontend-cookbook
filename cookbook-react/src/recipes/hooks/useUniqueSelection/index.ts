import { useState } from 'react';

export type OptionId = string | number;

interface Params<Id> {
  onChange: (id: Id) => void;
  active?: Id;
  initialValue?: Id;
}

const useUniqueSelection = <Id extends OptionId>({ onChange, active, initialValue }: Params<Id>) => {
  const [internalActiveTab, setInternalActiveTab] = useState<Id | undefined>(active || initialValue);

  const activeValue = active || internalActiveTab;

  const handleChange = (id: Id) => {
    if (!active) {
      setInternalActiveTab(id);
    }
    onChange(id);
  };

  return { activeValue, handleChange };
};

export default useUniqueSelection;
