import { useEffect } from "react";
import { useNavigate } from "react-router";
const NoMatch = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(() => {
           navigate('TodoInput') 
           
        }, 5000);
    }, []);


    return(
    <>
    <p>Dein URL gibt es nicht</p>
    </>

)
}


export default NoMatch;