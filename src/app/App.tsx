import React, { useContext } from 'react';
import './App.css';
import { AppContext } from '../providers/app-context.provider';

function App() {
  const { setIsDark } = useContext(AppContext);

  const handlClick = () => setIsDark && setIsDark((state) => !state);

  return <button onClick={handlClick}>Change Background</button>;
}

export default App;
