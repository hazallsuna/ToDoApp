import React,{ createContext,useContext,useEffect,useState} from "react";

const ToDoContext = createContext(); //yeni bir context oluşturduk

export const useToDoContext = () => useContext(ToDoContext); //hook oluşturduk diğer bileşenlerin contexte erişimi kolaylaştırmak için 

//todoprovider data gibi düşün context değerlerini sağlayacak 
export const ToDoProvider = ({children}) => {
    const [todos,setTodos] =useState([]);
    const [newTodo,setNewTodo] = useState('');
    //usestate ile stateleri tanımladık todosve newTodo

    //useeffect bileşen yüklendiğinde APIden todo listesini çekiyoruz
    useEffect(() =>{
        fetch('https://localhost:7144/ToDo')
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.error('Hata:',error));
    },[]);
    
    //yeni todo girişini güncelliyoruz
    const handleInputChange = (event) =>{
        setNewTodo(event.target.value);
    };
    
    //yeni todo ekliyoruz 
    const addTodo = ()=>{
        fetch('https://localhost:7144/ToDo',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({task:newTodo,isCompleted:false})
        })
        .then(response=>response.json())
        .then(data => {
            setTodos(prevTodos => [...prevTodos,data]);
            setNewTodo('');
        })
        .catch(error => console.error('Hata:', error));
    };
         
    //belirli bir todoyu siliyoruz
    const deleteTodo = (id) => {
        fetch(`https://localhost:7144/ToDo/${id}`, { 
            method: 'DELETE'
        })
        .then(()=> {
            setTodos(prevTodos =>prevTodos.filter(todo => todo.id !== id));
            })
            .catch(error => console.error('Hata',error));
        };
        return (
            <ToDoContext.Provider value={{ todos,newTodo,handleInputChange,addTodo,deleteTodo}}>
                {children}
            </ToDoContext.Provider>
        );
};