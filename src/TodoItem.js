import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
const TodoItem = (props) => {
    return (
        <li key={props.todoItem.id}>
            <div style={{"display": "flex"}}>
            {props.todoItem.title}
           
           <div class="form-check form-switch form-check-reverse">
               <input class="form-check-input" type="checkbox"
               checked={props.todoItem.completed}
               onChange={() => {
                   props.changeHandlerZurTodoItem(props.todoItem.id)
               }}id="flexSwitchCheckReverse"></input>
                  
           </div>
           <button
               style={{
                   backgroundColor: "transparent",
                   border: "none",
                   cursor: "pointer"
               }}
               onClick={() => {
                   props.deleteHandler(props.todoItem.id)
               }}

           >
               <FontAwesomeIcon style={{ color: "white" }} icon={faDeleteLeft} />
           </button>
            </div>
        </li>

    )
}

export default TodoItem;