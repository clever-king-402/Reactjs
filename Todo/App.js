import './App.css';
import Header from './myComponent/Header';
import Todos from './myComponent/Todos';
import  {Footer} from './myComponent/Footer';
function App() {
  let todos = [
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
]
  return (
    <>
    <Header searchBar={false} />
    <Todos  todos={todos}/>
    <Footer/>
    </>
  );
}

export default App;
