import React from 'react';

import useDebounceRxjs from './hooks/useDebounceRxjs'
import useDebounceLodash from './hooks/useDebounceLodash'

const App = () => {
  const [value, setValue] = useDebounceRxjs(500, '')
  const [valueTwo, setValueTwo] = useDebounceLodash(500, '')

  return (
    <div className="App">
      <input onChange={e => setValue(e.target.value)} />
      <h2>Debounced value Rxjs: {value}</h2>
      <input onChange={e => setValueTwo(e.target.value)} />
      <h2>Debounced value Lodash: {valueTwo}</h2>
    </div>
  );
}

export default App;
