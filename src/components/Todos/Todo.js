import './Todo.css';
import { useState } from 'react';
function Todo({ todo, index }) {
  const [completed, setCompleted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTodo, setModalTodo] = useState(null);

  const openModal = (todo) => {
    setModalTodo(todo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div className="todo__list">
      <div className="title__block">
        <ul className="title__list">
          <li className="title"> ID</li>
          <li className="title"> TITLE</li>
          <li className="title"> DESCRIPTION</li>
          <li className="title"> STATUS</li>
        </ul>
      </div>
      <div className="content__block">
        <ul className="todo__content">
          <li className="content__list">{index === 0 ? 1 : index + 1}</li>
          <li className="content__list">{todo.title}</li>
          <li className="content__list">{todo.description}</li>
          <li className="content__list">
            <input className='checkbox'
              type="checkbox"
              checked={completed}
              onChange={handleCheckboxChange}
            />
          </li>
         
          
        </ul>
            <button onClick={() => openModal(todo)}>View</button>
        {modalIsOpen && (
          <div className="modal">
            <div className="modal__content">
              <h3>Title:</h3> {modalTodo.title}
              <h4>Description: </h4>{modalTodo.description}
              <h4>Status:</h4> {completed ? 'Completed' : 'Incomplete'}
              <button className='close__modal' onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Todo;
