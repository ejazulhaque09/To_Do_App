import { useState } from "react";

function Header({addTodo}){
    const [task, setTask] = useState('');
    const [add, setAdd] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if(task.trim()){
            addTodo(task);  // add the task
            setAdd(false);  
            setTask('')   // empty the input field
        }
        else{
            alert("Please Enter the task to add!");
        }
    }

    return(
        <header>
            <h1>ToDo App</h1>
            {add ? (<form onSubmit={handleSubmit}>
                <button onClick={()=> setAdd(false)}>✖️</button>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task"/>
                <button type="submit">Add</button>
            </form>) : (
                <button onClick={()=> setAdd(true)}>➕</button>
            )}
            
        </header>
    )
}

export default Header;