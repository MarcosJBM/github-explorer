import { useState } from 'react';

import { RepositoryList } from './components';

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      <button type='button' onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <RepositoryList />
    </>
  );
}
