import React, {useRef, FC} from 'react'
type AddTodoType={
    todoAddFunc:(todoName:string)=> void;
}

const AddTodos:FC <AddTodoType> =({todoAddFunc}) => {

const userInputValue =  useRef <HTMLInputElement>(null);

   const sumbitForm = (e : React.FormEvent)=>{
     e.preventDefault()
     //console.log((userInputValue.current)!.value);
    
     
     todoAddFunc((userInputValue.current)!.value);
     
 }

  return (
    <form onSubmit={sumbitForm} className="flex flex-column gap ui-card-default py-1">
      <label htmlFor="userInput" className='label-text label-text-primary'>Add Todos</label>
      <input id="userInput"  className="input" type="text" placeholder="Add Todos" required  ref={userInputValue}/>
      <button className="btn-primary btn btn-py-1 flex flex-justify-center width-full " type="submit">
        <span className="font-size-sm"> Add Your Todos </span>
    </button>
    </form>
  )
}

export  {AddTodos}