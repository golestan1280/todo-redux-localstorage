import './App.css';
import { useSelector } from 'react-redux'
import TodoInput from './components/TodoInput';


function App() {
  const state = useSelector((state) => ({...state}))
  console.log('state:',state);

  return (
    <div className="App">
      <TodoInput />
    </div>
  );
}

export default App;
