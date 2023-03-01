import {useState} from 'react'
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import './App.css';

function App() {
const [todos, setTodos] = useState([])
const addTodoHandler = (text) => {
  setTodos([...todos, text])
}

  return (
    <main>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler}/>
      <TodoList todos={todos}/>
    </main>
  );
}

export default App;
