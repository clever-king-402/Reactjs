import React from 'react'
import './TodoListBox.css';
import TodoItems from './TodoItems';
import ItemAdd from '../ItemAdd';
export default function TodoListBox() {
  return (
    <>
    <div className="container">
    <h1 className='list-heading'>ToDo List</h1>
    <div className="add-item">
        <ItemAdd/>
    </div>
    <div className="list-container">
        <TodoItems/>
    </div>
    </div>
    </>
  )
}
