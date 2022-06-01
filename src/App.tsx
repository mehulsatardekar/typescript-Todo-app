import { useEffect, useState, useCallback , useId} from 'react'
import logo from './logo.svg'
import './App.css'

import { Todos } from './components/todos/Todos';
import { AddTodos } from './components/addtodo/AddTodos';
function App() {

  const uuid = useId()
  const todoData = [{
    id: Math.random(),
    name:'Wake-up',
},
{
  id: Math.random(),
    name:'Bath-Time',
},
{       
  id: Math.random(), 
    name:'BreakFast-Time',
},
{
  id: Math.random(),
    name:'Lunch time',
}
]

type todoType = {
  id:number;
  name:string;
}

const [todos, setTodo] = useState<todoType[]>([])

// const [todos, setTodo] = useState<{id:number, name:string}[]>([])

useEffect(()=>{
  setTodo(todoData)
},[setTodo])

const addTodo = (todoName:string)=>{
   console.log(todoName);
   setTodo(prevTodos=> [
     ...prevTodos,
     { id: Math.random(),
       name:todoName}
   ])
}

const delTodo = (todoId: number)=>{
  console.log(todoId);
  const todoFilterData = todos.filter(todo=> todo.id !== todoId);

  console.log(todoFilterData);
  setTodo(todoFilterData);
}

  return (
    <div className='my-1 '>
      <div className='flex flex-justify-center pt-1 pb-1'>
      <h3 className="font-sm">Todo app build with Typescript 🚀🚀🚀</h3>
      </div>
      <AddTodos todoAddFunc={addTodo}/>
      <Todos items={todos} todoDelFunc={delTodo}/>
    </div>
  )
}

export default App
