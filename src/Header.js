import React from "react";
import {  NavLink } from "react-router-dom";
// import { useState , useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTabletButton} from '@fortawesome/free-solid-svg-icons'



const Header = (props) => {
    /* const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");


    const handleChange = (event) => {
        setName(event.target.value);
    }


    const handleChange2 = (event) => {
        setLastName(event.target.value);
    }

    useEffect(() => {
        const newArr2 = localStorage.getItem('Name')
        setName(newArr2 === null ? [] : newArr2)
    },[])

    useEffect(() => {
        localStorage.setItem('Name:', name);
    }, [name]); */

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
        {/* <div>
            <p> <input onChange={handleChange}  /> Name :{name} </p> 
            </div>
            
            <p>
                <input onChange={handleChange2} />  LastName : {lastName}
            </p> */}
    </>
    )
}


export default Header;