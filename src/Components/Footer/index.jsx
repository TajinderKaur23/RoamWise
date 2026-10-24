
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#f8f9fa",
                padding: "25px 0 10px",
                marginTop: "50px",
            }}
        >
            <Container>

                <Row className="align-items-start">
                


                    <Col md={4}>
                        <h3>
                            <span style={{ color: "blue" }}>Roam</span>
                            <span style={{ color: "green" }}>Wise</span>
                        </h3>

                        <p style={{ marginBottom: 0 }}>

                            Plan your perfect trip with travel suggestions.
                            Explore amazing places around India.
                        </p>
                    </Col>


                    <Col md={2}>
                        <h5 style={{color:"blue"}}>Quick Links</h5>

                        <p  className="mb-2"><Link  to='/' style={{ textDecoration: "none", color: "#222" }}
                        >Home</Link></p>
                        <p  className="mb-2"><Link  to='/explore' style={{ textDecoration: "none", color: "#222" }}
                        >Destinations </Link></p>
   <p  className="mb-0">
                            <Link  
                                to="/festival"
                                style={{ textDecoration:"none", color:"#222" }}
                            >
                                Festivals
                            </Link>
                        </p>
                        
                    </Col>



                    <Col md={2}>
                        <h5 style={{color:"blue"}}>Support</h5>

                         <p  className="mb-2">
                            <Link
                                to="/contact"
                                style={{ textDecoration:"none", color:"#222" }}
                            >
                               Contact Us 
                               
                            </Link>
                        </p>
                         <p  className="mb-2">
                            <Link
                                to="/contact"
                                style={{ textDecoration:"none", color:"#222" }}
                            > Support desk</Link>
                       </p>
                    </Col>



                    <Col md={2}>
                        <h5 style={{color:"blue"}}>Contact</h5>

                         <p  className="mb-2">
                            <a 
                                href="mailto:travel@gmail.com"
                                style={{ textDecoration:"none", color:"#222" }}
                            >
                                Email
                            </a>
                        </p>

                        <p  className="mb-0">
                            <a 
                                href="tel:+911234567890"
                                style={{ textDecoration:"none", color:"#222" }}
                            >
                                Phone
                            </a>
                        </p>
                    </Col>

                </Row>


                <hr />


                <Row>
                    <Col className="text-center">
                        <p style={{ textAlign: "center" }}>
                            © 2026 RoamWise. All Rights Reserved.
                        </p>
                    </Col>
                </Row>


            </Container>
           
        </footer>
    );
}

export default Footer;