import { useState,useEffect } from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');      
    return savedTodos ? JSON.parse(savedTodos) : [];      // retriving the todo if any
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));  //saving the todo to the local storage
  }, [todos]);

  // Todo operations
  function addTodo(task) {
    setTodos([...todos, { text: [task], completed: false }]);
  }

  function toggleComplete(index) {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  function editTodo(index, newText) {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(newTodos);
  };


  
  return(
    <div className="container">
      <Header addTodo={addTodo}/>
      <div className="todo">
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        />
        </div>
    </div>
  )
}
export default App;