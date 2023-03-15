import "./styles/app.scss";
import {BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import "./styles/header.scss";
import "./styles/app.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
function App() {
  return(
    <Router>
    <Header isAuthenticated={true} />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element ={<Contact/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;



// Learning Router@6


// import Demo from './Routers/Demo';
// import About from './Routers/About';
// import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom';
// import NavBar from './Routers/NavBar';
// import Page404 from './Routers/Page404';
// import User from './Routers/User';

// function App(){
//   return(
//     <div className="App">
//     <BrowserRouter> 
//     <NavBar/>
//       <Routes>
//       <Route path="/" element={<Demo/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/user/:name" element={<User/>}/>
//       <Route path="/*" element={<Navigate to ="/"/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;





// we can use Navigate => to re direct any page directly !! and it is present in react-router-dom

// Lect-4 (Param)  => full form is parameter ...and the real us of param is , youtuber told about covid website where 100+ countries are there and
                     // so are we need 100+ pages for that website ? ...Obiusly no we can use param directly there !!!