import React from "react";
import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTabletButton} from '@fortawesome/free-solid-svg-icons'



const Header = (props) => {
   

    return (
        <>
        <header style={{ backgroundColor: "rgb(1, 70, 134)" , padding:"20px"}}>
        

        <h2  className="logo" style={{alignItems:"center" }}><NavLink to="/"><FontAwesomeIcon style={{color:"navy" , fontSize:"5rem" , margin :"0 auto"  }} icon={faTabletButton} /></NavLink></h2>
        <nav className="nav" style={{display:"flex" , justifyContent: "space-evenly"}}>
           <NavLink to="todoInput" >Input</NavLink>
           <NavLink to="toDoList">TodoList</NavLink>
            <NavLink to="About">About</NavLink>
        </nav>
        
        
        </header>
    
    </>
    )
}


export default Header;