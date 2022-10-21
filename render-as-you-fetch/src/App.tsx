import React, {Suspense} from 'react';
import './App.css';
import {DataLoader} from './DataLoader'
import {Loadable} from './Loadable'

const sleep = (): Promise<string> => new Promise((resolve) => {
  setTimeout(() => {resolve('fullfilled')}, 3000)
})

function App() {
  const [data] = React.useState(new Loadable(sleep()))

  return (
    <div className="App">
    <h1>render as you fetch</h1>
    <p>outside suspense</p>
    <Suspense>
      <p>inside suspense</p>
      <DataLoader data={data} />
    </Suspense>
   </div>
  );
}

export default App;
