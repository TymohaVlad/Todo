import Todo from './Todo';
function TodoList({ todos, props }) {

  return (
    <div className="todo_list-container">
      {!todos.length && <h3>Todo list is empty</h3>}
      
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
    </div>
  );
}
export default TodoList;
