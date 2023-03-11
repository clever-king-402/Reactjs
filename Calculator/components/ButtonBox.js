import React from 'react'
let buttonClick = (value)=>{
    let cursor = document.getElementById('cursor')
    let history = document.getElementById('history')
    if(value==='='){
        history.innerText = cursor.innerText
        cursor.innerText = eval(cursor.innerText)
        return null
    }
    if(value==='AC'){
        history.innerText=''
        cursor.innerText = ''
        return null
    }
    
    if(cursor.innerText.length <22){
        cursor.innerText +=value
    }
    
}


const ButtonBox = () => {
   
  return (
    <div className='button-box px-'>
        <div className='grid grid-cols-4 gap-3 text-3xl'>
            {/* part-1 */}
            <button className='btn bg-gray-400 rounded-full' onClick={()=>buttonClick('AC')}>AC</button>
            <button className='btn bg-gray-400 rounded-full' onClick={()=>buttonClick('none')}>+/-</button>
            <button className='btn bg-gray-400 rounded-full' onClick={()=>buttonClick('%')}>%</button>
            <button className='btn bg-orange-500 rounded-full' onClick={()=>buttonClick('/')}>/</button>

            {/* part-2 */}
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick(7)}>7</button>
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick(8)}>8</button>
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick(9)}>9</button>
            <button className='btn bg-orange-500 rounded-full' onClick={()=>buttonClick('*')}>*</button>

            {/* part-3 */}
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick(4)}>4</button>
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick(5)}>5</button>
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick(6)}>6</button>
            <button className='btn bg-orange-500 rounded-full' onClick={()=>buttonClick('-')}>-</button>
 
            {/* part-4 */}
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick(1)}>1</button>
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick(2)}>2</button>
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick(3)}>3</button>
            <button className='btn bg-orange-500 rounded-full' onClick={()=>buttonClick('+')}>+</button>

            {/* part-5 */}
            <button className=' bg-blue-500 rounded-full col-start-1 col-end-3' onClick={()=>buttonClick(0)}>0</button>
            <button className='btn bg-blue-500 rounded-full' onClick={()=>buttonClick('.')}>.</button>
            <button className='btn bg-orange-500 rounded-full' onClick={()=>buttonClick('=')}>=</button>
        </div>
    </div>
  )
}

export default ButtonBox