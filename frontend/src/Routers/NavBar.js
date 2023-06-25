import {Link} from "react-router-dom"

function NavBar(){
    return(
        <div>
            <ul className="navbar" >
                <li> <Link to ="/about">About</Link></li>
                <li><Link to ="/">Demo</Link></li>

            </ul>
        </div>
    )
}
export default NavBar;