import React from "react";
import { useState } from "react";
// import TodoCount from "./TodoCount";
// import styles from "./todoItemStyle.module.scss";
import TodoItem from "./TodoItem";


const ToDoList = (props) => {

    const [title, setTitle] = useState("");

    const updateTitle = (e) => {
        setTitle(e.target.value)
    }

    const handlerAddSofort = () => {
        let changedTodos = props.todos.map((todo) => {
            if (todo.title === title || (todo.title === title && todo.title.includes("sofort "))) {
                todo.title = "sofort " + todo.title;
                return todo;
            }
            else {
                return todo;
            }
        })
        props.setTodos(changedTodos)

    }
    let todoCount = 0;
    props.todos.forEach((todo) => {
        if (todo.completed === true) {
            todoCount++;
        }
    })




    return (
        <>
            {/* hier wird mein UL liste bearbeitet mit einer Map */}
            <ul className="todo_list">
                {props.todos.map((todoObjUl) => {
                    console.log("todoObjUl ", todoObjUl)
                    return (
                        <TodoItem todoItem={todoObjUl}
                            changeHandlerZurTodoItem={props.changeHandlerZurTodoList}
                            deleteHandler={props.deleteHandler}
                        />
                    )
                })}
            </ul>
            <div style={{ "margin": "0 auto", "color": "white" }}>
                Tasks : {todoCount} / {props.todos.length}
            </div>

        
            <div className="sofort-btn" class="input-group mb-3 ">
                <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"
                    name=""
                    id=""
                    placeholder="choose a Title"
                    value={title}
                    onChange={updateTitle}
                ></input>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handlerAddSofort}>Sofort</button>
            </div>




        </>
    )

}

export default ToDoList;