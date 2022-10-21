import { Suspense }  from 'react'
import { AlwaysThrowPromise } from './AlwaysThrowPromise'

function App() {
  return (
    <div className="App">
     <Suspense fallback={<div>fallback</div>}>
      <AlwaysThrowPromise />
    </Suspense>
   </div>
  );
}

export default App;
