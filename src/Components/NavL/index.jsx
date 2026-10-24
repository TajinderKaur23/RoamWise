// import { Link, NavLink } from "react-router-dom"
// export const Nav=()=>{
//     return(
// <>

// <Link to="/ ">Home Screen</Link>
// {/* <Link to="/explore">Explore Screen</Link>
// <Link to="/contact">contact Screen</Link> */}

// </>
//     )
// }
import { Link } from "react-router-dom"
import { useState } from "react";
import { Card, Navbar, Nav, Container, Button } from "react-bootstrap"
import { TfiLocationPin } from "react-icons/tfi";
export const NavL = () => {



    return (
        <>
            <Navbar expand="lg" style={{
                backgroundColor: "white",
                position: "sticky",
                padding: "10px 0",
                top: 0,
                zIndex: 1000,

                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}>

                <Container>
                    <Navbar.Brand as={Link} to="/explore" className="d-flex align-items-center" style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        textDecoration: "none",
                    }}>

                        <div>
                            <img style={{
                                width: "58px",
                                height: "58px",
                                objectFit: "contain",
                                marginRight: "10px",
                            }} src="WhatsApp Image 2026-07-31 at 13.34.51.jpeg"></img><span style={{
                                color: "#0d6efd", fontFamily: "'Montserrat', sans-serif",
                                letterSpacing: "0.5px",
                            }}>RoamWise</span>
                        </div>
                    </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            style={{
                                 fontSize:"18px",
                                color: "#333",
                                fontWeight: "500",
                                margin: "0 12px",
                                transition: "all .3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "#0d6efd";

                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "#333";

                            }}

                        >
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} style={{
                             fontSize:"18px",
                            color: "#333",
                            fontWeight: "500",
                            margin: "0 12px",
                            transition: "all .3s ease",
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "#0d6efd";

                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "#333";

                            }} to="/explore" >Discover</Nav.Link>
                             <Nav.Link as={Link} to="/plan" style={{
                        color: "#333",
                         fontSize:"18px",
                        fontWeight: "500",
                        margin: "0 12px",
                        transition: "all .3s ease",
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "#0d6efd";

                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "#333";

                        }}>
                        Planner
                    </Nav.Link>
                            
                        <Nav.Link as={Link} to="/festival" style={{
                            fontSize:"18px",
                            color: "#333",
                            fontWeight: "600",
                            margin: "0 12px",
                            transition: "all .3s ease",
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "#0d6efd";

                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "#333";

                            }}>Festivals</Nav.Link>
                        <Nav.Link as={Link} to="/contact" style={{
                             fontSize:"18px",
                            color: "#333",
                            fontWeight: "500",
                            margin: "0 12px",
                            transition: "all .3s ease",
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "#0d6efd";

                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "#333";

                            }}>Contact</Nav.Link>

                        <Nav.Link as={Link} to="/wishlist" style={{
                            color: "#333",
                             fontSize:"18px",
                            fontWeight: "500",
                            margin: "0 12px",
                            transition: "all .3s ease",
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "#0d6efd";

                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "#333";

                            }}>
                            Wishlist
                        </Nav.Link>

                    
                   
                    </Nav>
                    </Navbar.Collapse>
                    <Button
                        as={Link}
                        to="/signin"
                        style={{
                            borderRadius: "30px",
                            padding: "8px 25px",
                        }}
                    >
                        Sign In
                    </Button>


                </Container>
            </Navbar>

        </>
    )
}