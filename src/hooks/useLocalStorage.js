import { useState} from "react";

  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });
    const setValue = (value) => {
      console.log("setvalue Calling")
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.log(error);
      }
    };
    return {storedValue, setValue};
  }
export default useLocalStorage;