// react-router-dom  => 6.3.0  =>> major update . minor update . paches(fix performance bugs !!)
import {Link} from "react-router-dom"
function Demo(){
    return(
        <>
            <h1>Home page</h1>
            <p>This is a Home page of our awesome App</p>
            <Link to="/about">Go to About Page</Link>
        </>
    );
}
export default Demo;



// React me anchor tag me use karna kyo galat h ? 

// Because after using achor tag , when we open that link then the whole website will rerender !!