import { useState } from "react"
import {Todos} from "./components/Todos"
import { ListofTodos } from "./types"

const mockTodos:ListofTodos = [
  {
    id: 1,
    title: 'todo 1',
    completed: false
  },{
    id: 2,
    title: 'todo 2',
    completed: false
  },{
    id: 3,
    title: 'todo 3',
    completed: true
  },{
    id: 4,
    title: 'todo 4',
    completed: false
  }
]
function App() {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos 
        onRemoveTodo={handleRemove}
        todos={todos}/>
    </div>
  )
}

export default App
