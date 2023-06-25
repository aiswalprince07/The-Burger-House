import {Link} from "react-router-dom"
function About(){
    return(
        <>
            Hello i am About 
            <li><Link to="/user/anil">Anil</Link></li>
            <li><Link to="/user/peter">Peter</Link></li>
        </>
    );
}
export default About;