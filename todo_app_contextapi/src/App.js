import React from 'react';
import ShowTodo from './Components/ShowTodo';
import TodoList from './Components/TodoList';
import './App.css';
import { ToDoProvider } from './ToDoContext';

// tüm uygulamayı todoprovider ile sarıyoruz böylece alt bileşenler contexte erişiyor 
//showtodo ve todolist render ediyoruz
function App() {
 return(
  <ToDoProvider>
    <div>
      <ShowTodo/>
      <TodoList/>
    </div>
  </ToDoProvider>
 );
}
 

export default App;
