import React from 'react';
import { useToDoContext } from '../ToDoContext';

//usetodocontext kullanarak todos listesini ve deletetodo listesini alıyoruz
function TodoList(){
  const {todos ,deleteTodo} = useToDoContext();

  return(
    <ul>
      {todos.map((todo) => [
        //todos dizisini map fonksyonu ile döngüye alıp her bir todo için liste ögesi oluşturuyoruz
        <li key={todo.id}>
          {todo.task} <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
        //her todo için bir delete butonu ekliyoruz ve deleteTodo fonksiyonunu çağırıyoruz
      ])}
    </ul>
  );
}
export default TodoList;
