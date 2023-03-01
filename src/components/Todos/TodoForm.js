import { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isInvalidForm, setIsInvalidForm] = useState(false);

  function onSubmitHandler(event) {
    event.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      setIsInvalidForm(true);
      return;
    }

    addTodo({
      title,
      description
    });
    setTitle('');
    setDescription('');
    setIsInvalidForm(false);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
    setIsInvalidForm(false);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
    setIsInvalidForm(false);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form__group">
        <label>
          Title
          <input
            className={isInvalidForm && title.trim() === '' ? 'invalid' : ''}
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter new title"
          ></input>
        </label>
      </div>
      <div className="form__group">
        <label>
          Description
          <input
            className={isInvalidForm && description.trim() === '' ? 'invalid' : ''}
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter description"
          ></input>
        </label>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default TodoForm;