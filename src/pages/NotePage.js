import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [note, setNote] = useState(null)

  useEffect(() => {
  getNote();
  },[id] );
  let getNote = async ()=>{
    if(id==='new') return
   let response =  await fetch(`/api/notes/${id}/`);
   let data = await response.json();
   setNote(data)
  }


  let deleteNote = async ()=>{
    fetch(`/api/notes/${id}/delete/`,{ 
        method:"DELETE",
        headers : {
            'Content-Type' : 'application/json'
            }});
        history('/')
  }

  let createNote = async ()=>{
    fetch(`/api/notes/create/`,{
        method:"POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(note)
    })
  }
  let updateNote = async ()=>{
    fetch(`/api/notes/${id}/update/`,{
        method:"PUT",
        headers : {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(note)
    })
  }

  let handleSubmit = ()=>{
    console.log(note)
    if(id!== 'new' && note.body===null){
        console.log("he")
        deleteNote();
    }
    else if(id!=='new' && note.body!==null){
        console.log("he2")
        updateNote();
    }else if(id==='new' && note.body !==null){
        createNote();
    }
    history('/')
  }

  return (
    <div className='note'>
        <div className="note-header">
            <h3>
            <ArrowLeft onClick={handleSubmit} />
            </h3>
            {id!=="new" ? ( <button onClick={deleteNote}>Delete</button>): <button onClick={handleSubmit} >Done</button>}
           
        </div>
         <textarea value={note?.body} onChange={(e)=>{
            setNote({...note,'body':e.target.value})
         }}></textarea>
    </div>
    
  );
};


export default NotePage