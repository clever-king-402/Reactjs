import logo from './logo.svg';
import './App.css';
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'

function App() {
  return (
    <div className='calculator mx-auto mt-10 px-3'>
      <Screen/>
      <ButtonBox/>
    </div>
   );
}

export default App;
