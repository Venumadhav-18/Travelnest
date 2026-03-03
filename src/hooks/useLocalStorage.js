import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocal = (value) => {
    try {
      const val = typeof value === "function" ? value(state) : value;
      setState(val);
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.error("useLocalStorage set error", e);
    }
  };

  return [state, setLocal];
}
