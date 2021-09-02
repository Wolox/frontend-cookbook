import { useEffect, useState } from 'react';
import { Nullable } from '@interfaces/globalInterfaces';

const DEFAULT_DELAY = 1000;

const useDebounce = <T>(
  debouncedFunction: (value: Nullable<T>) => void,
  delay = DEFAULT_DELAY
): [(value: T) => void, boolean] => {
  const [functionValue, setFunctionValue] = useState<Nullable<T>>(null);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    setIsWaiting(true);
    const handler = setTimeout(() => {
      debouncedFunction(functionValue);
      setIsWaiting(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedFunction, delay, functionValue]);

  return [
    (value: T) => {
      setFunctionValue(value);
    },
    isWaiting
  ];
};

export default useDebounce;
