import React from 'react';
import { useToDoContext } from '../ToDoContext';

//useToDoContext ile gerekli state ve fonskiyonları alıyoruz
//input yazıyoruz ve add butonunu render ediyoruz
//handleInputChange ve addtodo fonksiyonlarını bağlıyoruz

function ShowTodo() {
  const { newTodo ,handleInputChange,addTodo} = useToDoContext();

  return(
    <div>
      <h1> ToDo App</h1>
      <input
      type = "text"
      value ={newTodo}
      onChange={handleInputChange}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
export default ShowTodo;
