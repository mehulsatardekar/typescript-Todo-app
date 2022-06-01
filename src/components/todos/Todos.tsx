import React,{FC, useId} from 'react'

type TodoItems = {
  items:{id:number,name:string}[];
  todoDelFunc:(todoId:number)=>void;
}
const Todos:FC <TodoItems>= ({items, todoDelFunc}) => {
// console.log(items);

  return (
    <>
    <ul className='flex flex-column gap-1 mt-1 list-style-none'>     
        {
         items.map((todo)=> {
             return(
                 <li key={todo.id} className="ui-card-default card-py ">
                     <p className='pb-1'>Todo id = {todo.id}</p>
                     <h3 className='font-bold pb-09 w-100 pb-1'>{todo.name}</h3>
                     <button onClick={todoDelFunc.bind(null,todo.id)} className="btn-primary btn btn-sm">Delete Todo</button>
                 </li>
             )
         })
     }
     </ul>
    </>
  )
}

export {Todos}