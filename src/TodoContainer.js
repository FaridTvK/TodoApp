import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import "./TodoContainer.scss"
import ToDoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";
import { v4 as uuid } from 'uuid';
import NoMatch from "./NoMatch"
import About from "./pages/About";



const TodoContainer = () => {



    const [todoArrstate, setTodoArrState] = useState([])


    const changeHandler = (id) => {
        const changeArr = todoArrstate.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodoArrState(changeArr)
    }


    const deleteTodo = (id) => {
        const deleteObj = todoArrstate.filter(todo => {
            return todo.id !== id;
        })
        setTodoArrState(deleteObj)
    }


    const addHandler = (title) => {
        const newTodos = {
            id: uuid(),
            title: title,
            completed: false,
        }
        setTodoArrState([...todoArrstate, newTodos])
    }




    useEffect(() => {
        console.log("es wird getestet 2")
        const newArr = JSON.parse(localStorage.getItem('simpleTodoList:'))
        setTodoArrState(newArr === null ? [] : newArr)
    }, [])

    // ? limit= num  gib mir limit möglichkeit
   

    // es wird erstmal das ausgeführt
    useEffect(() => {
        console.log("es wird getestet")
        localStorage.setItem('simpleTodoList:', JSON.stringify(todoArrstate));
    }, [todoArrstate]);

    return (
        <main className="App" style={{ margin: "0" }}>
            <Header />
            <Routes>
                {/* Home */}
                <Route path="/" element={<h1 style={{textAlign:"center"}}>startseite</h1>} />
                {/* Input */}
                <Route path="todoInput" element={
                <TodoInput className="todoInput" addHandler={addHandler} />} />

                {/* todoList */}
                <Route path="toDoList" element={
                <ToDoList
                    todos={todoArrstate}
                    setTodos={setTodoArrState}
                    changeHandlerZurTodoList={changeHandler}
                    deleteHandler={deleteTodo}

                />} />
                <Route path="/About" element={<About />}/>
                <Route path="*" element={<NoMatch/>}/>

            </Routes>

        </main>
    )

}


export default TodoContainer;