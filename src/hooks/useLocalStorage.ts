import { useEffect, useState } from "react";


const useLoacalStorage = <T>(
    key: string, 
    initialValue: T | (() => T)
  ) => {
    const [value, setValue] = useState<T>(() => {
      const jsonValue = localStorage.getItem(key);

      if(jsonValue != null) {
        return JSON.parse(jsonValue);
      }

      if(typeof initialValue !== 'function') {
        return initialValue;
      }

      return (initialValue as () => T)()
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [value, key]);
    

    return [value, setValue] as[T, typeof setValue]
}

export default useLoacalStorage;