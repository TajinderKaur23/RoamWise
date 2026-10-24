import { FaRegCalendarAlt } from "react-icons/fa";
import { Datafest } from "../../Datafest";
import Footer from "../../Components/Footer";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
export const Festivals = () => {
    const [month, setMonth] = useState("All")
    const allYearFestivals = [
        Datafest.find(f => f.month === "January"),
        Datafest.find(f => f.month === "March"),
        Datafest.find(f => f.month === "July"),
        Datafest.find(f => f.month === "November"),
    ];
    const filterfest = month === "All" ? Datafest.filter((festival, index) => index < 4) :
        Datafest.filter((festival) => festival.month === month)

    return (
        <>
            <Container
                style={{
                    background: "#fff",
                    borderRadius: "20px",
                    padding: "25px 35px",
                    marginTop: "20px",
                    marginBottom: "30px",
                    boxShadow: "0 4px 15px rgba(0,0,0,.05)"
                }}
            >
                <div className="d-flex align-items-center mb-2">
                    <div
                        style={{
                            width: "55px",
                            height: "55px",
                            borderRadius: "15px",
                            background: "#EFF6FF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "18px"
                        }}
                    > <FaRegCalendarAlt size={28} style={{ color: "blue" }} />
                    </div>
                    <div>
                        <h2
                            style={{
                                margin: 0,
                                fontWeight: "800",
                                fontSize: "42px",
                                color: "#1E293B"
                            }}
                        >
                            Cultural Festivals Spotlight
                        </h2>
                        <p
                            style={{
                                margin: "6px 0 0",
                                color: "#64748B",
                                fontSize: "17px"
                            }}
                        >
                            Plan your holiday around India's famous festivals and discover local traditions.
                        </p>
                    </div>

                </div>
                <hr style={{ margin: "20px 0" }} />

                <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                    <Button
                        className="me-2 mb-2"
                        onClick={() => setMonth("All")}
                        style={{ marginTop: "15px" }}>
                        All Year
                    </Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2 " onClick={() => setMonth("January")}>Jan</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2 " onClick={() => setMonth("February")}>Feb</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("March")}>Mar</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("April")}>Apr</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("May")}>May</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("June")}>Jun</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("July")}>Jul</Button>
                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("August")}>Aug</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("September")}>Sep</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("October")}>Oct</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("November")}>Nov</Button>

                    <Button style={{ marginTop: "15px" }} className="me-2 mb-2" onClick={() => setMonth("December")}>Dec</Button>




                </div>
            </Container>


            <Container className="mb-5 mt-3">
                <Row className="g-4">
                    {filterfest.map((festival) => (


                        <Col md={6} className="d-flex">
                            <Card className="w-100" style={{
                                border: "none",
                                borderRadius: "22px",
                                overflow: "hidden",
                                boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                                transition: "0.3s",
                                height: "100%"
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-6px)";
                                    e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,.15)";
                                }}

                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
                                }}
                            >
                                <Card.Img src={festival.img} style={{
                                    height: "220px",
                                    objectFit: "cover",
                                }} />
                                <Card.Body className="p-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span
                                            style={{
                                                background: "#EFF6FF",
                                                color: "#2563EB",
                                                padding: "6px 12px",
                                                borderRadius: "30px",
                                                fontSize: "13px",
                                                fontWeight: "600"
                                            }}
                                        >
                                            {festival.category}
                                        </span>
                                        <span style={{ color: "#64748B", fontWeight: "500" }}>
                                            {festival.month}
                                        </span>
                                    </div>
                                    <h4
                                        style={{
                                            fontWeight: "700",
                                            marginBottom: "10px",
                                            fontSize: "28px",
                                            minHeight: "68px"
                                        }}
                                    >
                                        {festival.name}
                                    </h4>
                                    <div className="mb-1">
                                        <CiLocationOn size={22} style={{ color: "#2563EB" }} /> <strong>{festival.city}</strong>, {festival.state}
                                    </div>

                                    <div className="mb-0">
                                        🗓 Best Time : {festival.bestTime}
                                    </div>

                                    <hr />
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            color: "#64748B",
                                            marginTop: "10px",
                                            marginBottom: "0",
                                            lineHeight: "1.5",
                                            minHeight: "48px"
                                        }}
                                    >
                                        Experience <strong>{festival.name}</strong> in{" "}
                                        <strong>{festival.city}</strong>, one of India's most celebrated{" "}
                                        {festival.category.toLowerCase()} festivals.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>
            <Footer />
        </>
    )
}