import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {Todos} from './Todos'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

export default App;
