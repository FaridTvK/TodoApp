import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import "./TodoContainer.scss"
import ToDoList from "./TodoList";
import Header from "./Header";
import TodoCount from "./TodoCount";
// import Playground from "./Playground";
import TodoInput from "./TodoInput";
// import Alert from "./Alert"
import { v4 as uuid } from 'uuid';
import NoMatch from "./NoMatch"
import Contact from "./pages/Contact"
import About from "./pages/About";
import Privacy from "./pages/Privacy"



// let _todos = [
//     {
//         id: uuid(),
//         title: "essen",
//         completed: true,
//     },
//     {
//         id: uuid(),
//         title: "aufräumen",
//         completed: false
//     },
//     {
//         id: uuid(),
//         title: "zocken",
//         completed: false
//     },
//     {
//         id: uuid(),
//         title: "schlafen",
//         completed: true,
//     }
// ];
// um mehr compenenten innerhalb einer return schreiben zu können , kann man mit REACT.Fragment machen!





const TodoContainer = () => {
    // die useState fucntion gibt uns ein Array zurrück
    // mit der "state Variable" (todosArrState) und einer function 
    // mit der wir die "state Variable" ändern können!
    /*  const [showPlayground, setShowPlayground] = useState(false)
  */
     // const [Load, isLoading] = useState(true)



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
    // useEffect(() => {

    //     const fetchData = async () => {

    //         try {
    //             const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    //             const respArr = await resp.json();
    //             setTodoArrState(respArr.slice(0, 10))
    //             isLoading(false)

    //         } catch (e) {
    //             console.log(e)
    //             alert('Todos konnten nicht geladen werden')
    //         }

    //     }
    //     fetchData()
    // }, [])

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
                {/* TodoCount */}
                <Route path="TodoCount" element={
                <TodoCount
                    todos={todoArrstate}
                />} />
                {/* PlayGround */}
                {/* <Route path="Playground" element={
                <Playground/>}
                /> */}
                <Route path="/Contact" element={<Contact/>}/>
                    
                <Route path="/About" element={<About />}/>
                <Route path="/Privacy" element={<Privacy />}/>
                
                <Route path="*" element={<NoMatch/>}/>

            </Routes>

        </main>
    )

}


export default TodoContainer;