import ToDoItem from "./TodoItem";

function TodoList ({todos, toggleComplete, deleteTodo, editTodo}){
    if(todos.length == 0){
        return(
          <h2>Please Enter any Task</h2>
        )
      }
    return(
        <div className="list">
        <ul>
            {todos.map((todo, index) => (    // mapping through the todo list
                <ToDoItem
                key={index}
                index={index}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                />
            ))}
        </ul>
        </div>
    )
}

export default TodoList;