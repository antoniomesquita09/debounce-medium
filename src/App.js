import React from 'react';

import useDebounce from './hooks/useDebounce'

const App = () => {
  const [value, setValue] = useDebounce(500, '')

  return (
    <div className="App">
      <input onChange={e => setValue(e.target.value)} />
      <h2>Debounced value: {value}</h2>
    </div>
  );
}

export default App;
