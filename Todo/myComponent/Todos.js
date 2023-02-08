import React from 'react'
import  {TodoItem} from '../myComponent/TodoItem';
import Addtodos from './Addtodos';

export default function Todos(props) {
  return (
    <div className='container'>
        <h3 className='text-center'>Todos List</h3>
        {props.todos.length===0?<h1>No ,Todos: to display</h1>:
        props.todos.map((todox)=><TodoItem todo={todox} key={props.todos.sno}  onDelete={props.onDelete}/>)}
      <Addtodos/>
    </div>
  )
}
