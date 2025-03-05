import { useEffect, useState } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

// type UseLocalStorage = (key: string) => [
//   value: LocalStorageReturnValue,
//   {
//     setItem: (value: LocalStorageSetValue) => void;
//     removeItem: () => void;
//   },
// ];

function getValueStorage(key: string): LocalStorageReturnValue {

  const item = localStorage.getItem(key);
  return item === null ? null :  JSON.parse(item);
}

export function useLocalStorage(key: string): 
[value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
] {

  const [item, setItem] = useState<LocalStorageReturnValue>(() =>
    getValueStorage(key)
  );

  const removeItem = (): void => {
    localStorage.removeItem(key);
    setItem(null);
  };

  useEffect(() => {    
    localStorage.setItem(key, JSON.stringify(item));
  }, [key, item]);

  return [item, { setItem, removeItem }];
}
