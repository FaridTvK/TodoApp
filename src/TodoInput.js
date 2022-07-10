import React, { useState } from "react";
import Alert from "react-bootstrap/Alert"
import styles from "./Alertstyle.module.scss";


const TodoInput = (props) => {



    const [inputText, setInputText] = useState("")


    const onChangeHandler = e => {

        setInputText(e.target.value);

    }

    const submitHandler = (todo) => {
        todo.preventDefault()
        props.addHandler(inputText)
        setInputText("");

    }





    return (
        <>

            <form onSubmit={submitHandler} className="form">

                <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg></button>
                    <input type="text" value={inputText}
                        onChange={onChangeHandler} class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                </div>
                {inputText.length === 0 ? <Alert className={styles.sec} variant="warning text-center">Add Your Task </Alert> : null}

            </form>

        </>

    )

}


export default TodoInput;