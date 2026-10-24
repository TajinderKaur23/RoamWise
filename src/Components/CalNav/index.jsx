import { Link } from "react-router-dom"
import { Card, Navbar, Nav, Container, Button } from "react-bootstrap"
export const CalNav=()=>{
     return (
            <>
                <Navbar expand="lg" style={{
                    backgroundColor: "white",
                    padding: "15px 0",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                }}>
                    <Container>
                        <Navbar.Brand as={Link} to="/" style={{
                            fontSize: "30px",
                            fontWeight: "bold",
                            color: "#0d6efd"
                        }}>
                           
                            RoamWise
                        </Navbar.Brand>
    
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/" >Jan</Nav.Link>
                            <Nav.Link as={Link} to="/explore" >Feb</Nav.Link>
                            <Nav.Link as={Link} to="/contact" >Mar</Nav.Link>
                            <Nav.Link as={Link} to="/festival">Festivals</Nav.Link>
                        </Nav>
                        <Button style={{ borderRadius: "30px", padding: "8px 25px" }}>Sign In</Button>
                    </Container>
                </Navbar>
    
            </>
        )
    }
