
import { ListofTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
  todos: ListofTodos
  onRemoveTodo: (id:number) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
        {todos.map((todo) => (
                <li key={todo.id}
                className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo 
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
    </ul>
  )
}
