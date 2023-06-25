import { useParams } from "react-router-dom";

function User(){
    const params = useParams(); // useparams ek hook h besically ,usko as a function use karte yha per !!
    const {name} =params;
    // console.log(name);
    return(
        <>
            <h1>This is {name}'s Page !!</h1>
        </>
    )  
}
export default User;