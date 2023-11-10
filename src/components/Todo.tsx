import { type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onRemoveTodo: (id:number) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo}) => {
    return(
        <div className="task">
            <input type="checkbox"
            checked={completed}
            onChange={() => {}} />
            <label>{title}</label>
            <button
            className="delete"
            onClick={() => {
                onRemoveTodo(id)
            }}>Delete</button>
        </div>
    )
}