import './App.css';
import Header from './myComponent/Header';
import Todos from './myComponent/Todos';
import  {Footer} from './myComponent/Footer';
import { useState } from 'react';

function App() {

  function onDelete(list){
    setTodos(todos.filter((e)=>{
      return e!==list
    }))
  }

  const [todos,setTodos] = useState( [
    {
        sno : 1,
        title : "hello wolrx1",
        desc : "laksdjfaksfdjja sdf asdf"
    },
    {
        sno : 2,
        title : "hello wolrx2",
        desc : "laksdjfaksfdjja sdf asdf"
    },
    {
        sno : 3,
        title : "hello wolrx3",
        desc : "laksdjfaksfdjja sdf asdf"
    }
])
  return (
    <>
    <Header searchBar={true} />
    <Todos  todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
