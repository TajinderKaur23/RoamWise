import { Link, NavLink } from "react-router-dom"
import { Navbar,Nav} from "react-bootstrap"
import {Container }from "react-bootstrap"
export const MyNav=()=>{
    return(
<>
<Navbar bg="white" expand="lg" className="shadow-sm py-3" >
    <Container>
        <Navbar.Brand as={Link} to="/">
         <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            
            style={{ width: "120px" }}/>
            </Navbar.Brand>
    <Navbar.Collapse>
        <Nav className="ms-auto gap-2">
    <Nav.Link as={Link} to="/" className="mx-3 fs-5">Home</Nav.Link>
     <Nav.Link as={Link} to="/explore" className="mx-3 fs-5">Explore options near me</Nav.Link>
      <Nav.Link as={Link} to="/contact" className="mx-3 fs-5">Contact Us</Nav.Link> 
{/* <Link to="/ ">Home Screen</Link>
<Link to="/about">Explore Screen</Link>
<Link to="/product">contact Screen</Link>
  */}
 </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</> 

    )
}