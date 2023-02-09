import React, { useState } from 'react'
import './TodoListBox.css'
export default function TodoItems() {

    function Delete(deletet){
        setlist(list.filter((e)=>e!==deletet
        ))
    }

    const [list, setlist] = useState([
        {sn:1,name:'hello1',desc:'this is very good'},
        {sn:2,name:'hello2',desc:'this is very good'},
        {sn:3,name:'hello3',desc:'this is very good'},
        {sn:4,name:'hello4',desc:'this is very good'},
    ])
  return (
<>
   <table>
    {list.map((item)=>
       <tr><td>{item.sn}</td><td>{item.name}</td><td>{item.desc}</td><td><button onClick={()=>Delete(item)}>Delete</button></td></tr>
    )}
   </table>
</>
  )
}
