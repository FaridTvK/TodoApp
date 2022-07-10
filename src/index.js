import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TodoContainer from "./TodoContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
    <StrictMode>
        <BrowserRouter>
            <TodoContainer />
        </BrowserRouter>
    </StrictMode>,
    document.getElementById("root"));
