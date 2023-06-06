import  { forwardRef, useImperativeHandle, useRef } from 'react'

const Newinput = forwardRef(
    (props,i)=>{
        useImperativeHandle(i,()=>({
            fill:fillinput,
        }))
        const fillinput=()=>{
            alert('Fill the input')
        }
        
        return (
           <input type="text" />
        )
    }
)


const UseImperativeHandle = () => {
    
    const inputRef = useRef();
    const handleClick =()=>{
            inputRef.current.fill()
    }
   
  return (
    <div className='container mt-5'>
       <Newinput ref={inputRef}/>
       <button onClick={()=>{handleClick()}}>action</button>
    </div>
  )
}

export default UseImperativeHandle