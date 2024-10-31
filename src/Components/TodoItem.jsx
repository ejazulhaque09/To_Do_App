import { useState } from "react";

function ToDoItem({index, todo, toggleComplete, deleteTodo, editTodo}){
    const [isEditing, setIsEditing] = useState(false);
    const [newtask, setNewtask] = useState(todo.text);

    function handleEdit(){
        if(isEditing){
            editTodo(index, newtask);  // edit the task
        }
        setIsEditing(!isEditing);   
    }

    return(
        <div className="item">
        <li>
            <div className="list">
            <button onClick={()=>toggleComplete(index)}>
                {todo.completed ? '🗹': '☐'}
            </button>
            {isEditing ? ( <div>
                <input type="text" value={newtask} onChange={(e) => setNewtask(e.target.value)} />
                </div>
            ) : (
                <span style={{textDecoration: todo.completed ? "line-through" : "none",color: todo.completed ? "gray" : "black"}}>{todo.text}</span>
            )}
            </div>
            <div className="operation">
            <button onClick={handleEdit}>{isEditing ? "✔" : "✎"}</button>
            <button onClick={()=> deleteTodo(index)}>❌</button>
            </div>
        </li>
        </div>
    )
}
export default ToDoItem;