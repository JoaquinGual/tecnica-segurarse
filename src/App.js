
import './App.css';
import { FormGroup } from './components/FormGroup/FormGroup';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <FormGroup/>
    

    </QueryClientProvider>
  );
}

export default App;
