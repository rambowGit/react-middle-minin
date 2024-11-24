import { useEffect, useState } from "react";


type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];


function getValueStorage(key: string): string | null {
  if (!localStorage.getItem(key) || localStorage.getItem(key) == 'undefined') {
    return null;
  }
  
  return JSON.parse(localStorage.getItem(key));
}


export function useLocalStorage(key: string): UseLocalStorage {
  const [item, setItem] = useState<LocalStorageReturnValue>(() => getValueStorage(key));

  const removeItem = (): void => {
    setItem(null);
    localStorage.removeItem(key)
  };
  
  useEffect(() => {
    if (item  == null || item == 'undefined') {
      localStorage.removeItem(key)
      return;  
    } else {
      if (typeof(item) == 'string') {
        localStorage.setItem(key, JSON.stringify(item));
      }
    }
    
  }, [key, item]);
  
  return [item, { setItem, removeItem }];
  
}