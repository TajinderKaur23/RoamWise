 
//  import { Home } from "./E-Products/Home";
//  import { Product } from "./E-Products/Product";
//  import { About} from "./E-Products/About";
// import { Route, Routes } from "react-router-dom";

// import { MyNav } from "./E-Products/MyNav";
// import { Navigate } from "react-router-dom";
// import { Dashboard } from "./E-Products/Dashboard";
 

import { Carousel, Container, Card, Row, Col } from "react-bootstrap";
import { Home } from "./Screen/Home"
import { Contact } from "./Screen/Contact";
import {Explore} from "./Screen/Explore"
import { Route,Routes } from "react-router-dom"
import { MyNav } from "./Components/MyNav"
 //import { Nav } from "./Components/Nav"

 
function App() {
    
    return (
    <>
           
         <MyNav></MyNav> 
            <Routes> 
              {/* Zomato */}
             <Route path="/" element={<Home />}></Route>
              <Route path="/explore" element={<Explore />}></Route>
              <Route path="/contact" element={<Contact />}></Route> 
</Routes>
//               {/* understand Routing */}
//                {/* <Route path="/" element={<Home />}></Route> */}
//                 {/* <Route path="/about" element={<About/>}></Route> */}
//                   {/* <Route path="/product" element={<Product />}></Route>
//                   <Route path="*" element={<h1>page not found</h1> }></Route> */}
//                  {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
//                   {/* <Route path="/dashboard/about" element={<About/>}></Route> //outlet
//                    <Route path="/dashboard" element={<Dashboard/>}>
//                    <Route path="about" element={<About/>}></Route> 
//                    </Route> */}
                  
{/* //   <Route path="/" element={<Home />} />
//   <Route path="/product" element={<Product />} />
//   <Route path="/about" element={<About />}/>

//   <Route path="/dashboard" element={<Dashboard />}>
//     <Route path="about" element={<About />} />
    
//   </Route>

//   <Route path="*" element={<h1>page not found</h1>} /> */}

 
          </>
     )        
    
    } export default App


// import { Route,Routes } from "react-router-dom";
// import { CartProduct } from "./CartProduct";
// import { NavProduct } from "./CartProduct/NavProduct";
// import { Single } from "./CartProduct/Single";
// function App(){
// return(
//     <>
// <NavProduct/>
//  <Routes>
        {/* <Route path="/" element={<Home />} /> */}
    

        {/* Product List */}
        // <Route path="/products" element={<CartProduct />} />

        {/* Single Product */}
//       <Route path="/product/:id" element={<Single />} />

//         <Route path="*" element={<h1>Page Not Found</h1>} />
//       </Routes>
//     </>
// )
// }
// export default App

//travel 
// import { useState } from "react"
// import { Wish } from "../Wish"
// import {NavL} from "./Components/NavL"
// import { Route, Routes } from "react-router-dom"
// import { Home } from "./Screen/Home"
// import { Datatr } from "./Datatr"
// import { Explore } from "./Screen/Explore"
// import { Contact } from "./Screen/Contact"
// import { Festivals } from "./Screen/Festivals"
// import { Cardinfo } from "./Cardinfo"
// import { SignIn } from "./Screen/Signin"
// import { Signup } from "../Signup"
// import { Planner } from "./planner"
// import NotFound from "./Screen/Notfound"
// function App() {

//   return (
//     <>
//     <div
     
//     >
//    <NavL />
      
//       <Routes>
//         <Route path="/" element={<Home/>} />
//       <Route path="/explore" element={<Explore/>}></Route>
//       <Route path="/plan" element={<Planner />} />
//         <Route path="/contact" element={<Contact/>}></Route>
//         <Route path="/festival" element={<Festivals/>}></Route>
//        <Route path="/cardinfo/:id" element={<Cardinfo />} />
//         <Route path="/signin" element={<SignIn/>}></Route>
//           <Route path="/signup" element={<Signup/>}></Route>
//           <Route path="/wishlist" element={<Wish />} />
//          <Route path="*" element={<NotFound />} /> 
//         </Routes>
//         </div>
//     </>
//   )
// }
// export default App


//redux
// import { Home } from "./Screen/Home"
// import {Explore} from "./Screen/Explore"
// import {Contact} from "./Screen/Contact"
// import { useSelector } from "react-redux"
// function App(){
//   const Login=useSelector((state)=>state.loginReducer.isLogin)
//   return(
//     <>
    
    // {Login&&<Explore />}
    //  {Login&&<Contact />}
    {/* <Home /> 
    <Explore />
    <Contact /> */}
//     </>
//   )
// }
//   export default App
 //slicer
 //actions
 //combining redux
 //configure store -multiple stores and reducers inside
 //connecting redux to app

 //ui will get data from redux
 //ui will update data to redux