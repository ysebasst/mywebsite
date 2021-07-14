import { useState } from "react";

export const useInput = (initialState = null) => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleChange];
};
