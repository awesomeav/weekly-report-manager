import React,{useState} from 'react'

function Serach() {

    const [text,settext]=useState('');


  return (
    <section>
    <form>
        <input type="text" placeholder='search emp'
        className='form-control'
        value={text} cd
        onChange={(e)=>settext(e.target.value)}
         />

    </form>
    
    </section>
  )
}

export default Serach