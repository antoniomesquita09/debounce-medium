import { useState, useCallback } from 'react'
import { debounce } from 'lodash'


const useDebounce = (time, initialValue) => {
  const [value, setValue] = useState(initialValue);

  const debouncedSave = useCallback(
    debounce(nextValue => setValue(nextValue), time),
    [],
  );
    
  const handleChange = nextValue => {
    debouncedSave(nextValue);
  };

  return [value, handleChange]
}

export default useDebounce
