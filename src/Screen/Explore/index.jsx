// import { Accordion } from "react-bootstrap";
// import { accordion } from "../../Data/sample";
// export const Explore = () => {
//   return (
// <>
//     <div style={{ width: "80%", margin: "40px auto" }}>
//       <h2 style={{ fontSize: "36px", marginBottom: "25px" }}>Explore options near me</h2>

//       <Accordion  >

//         {accordion.map((item) => (
//           <Accordion.Item eventKey={item.id} style={{
//             marginBottom: "18px",
//             border: "1px solid #e8e8e8",
//             borderRadius: "12px",
//             overflow: "hidden",
//             backgroundColor: "white",
//           }}
//           >
//             <Accordion.Header>
//               {item.title}
//             </Accordion.Header>
//             <Accordion.Body>
//               {item.data.join(". ")}
//              </Accordion.Body>
//           </Accordion.Item>
//         ))}
//       </Accordion>
//     </div>

// </>
//   )
// }


import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Datatr } from "../../Datatr";
import Footer from "../../Components/Footer";
import { FaRegCompass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
export const Explore = () => {
  const navigate = useNavigate()
  const handlec = (id) => {
    navigate(`/cardinfo/${id}`);
  };
  <Button
    variant="outline-primary"
    onClick={() => navigate("/explore")}
  >
    ← Back to Discover
  </Button>

  return (
    <>
      <style>
        {`
          @keyframes rotateCompass {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <h1 style={{ display: "flex", alignItems: "center", gap: "8px", margin: '20px' }}> <FaRegCompass size={50} style={{
        color: "blue",
        animation: "rotateCompass 2s linear infinite"
      }} /> Discover Destinations</h1>

      <Container>
        <Row>
          {Datatr.map((item, index) => (
            <>
              <Col md={6} lg={4} className="mb-4" key={index}>
                <Card onClick={() => handlec(item.id)} className="border-1px solid #e5e7eb shadow-lg h-100 " style={{ overflow: "hidden", transition: "0.3s", borderRadius: "20px" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                  }}>
                  <div style={{ position: "relative" }}>
                    <Card.Img src={item.image} style={{ height: "200px", objectFit: "cover" }} />

                    {/* <span
                      style={{
                        position: "absolute",
                        left: "15px",
                        bottom: "50px",
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: "25px",
                        textShadow: "2px 2px 6px rgba(0,0,0,0.8)"
                      }}
                    >
                      {item.state} 
                    </span> */}

                    <div
                      style={{
                        position: "absolute",
                        right: "15px",
                        bottom: "15px",
                        background: "#fff",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontWeight: "600",
                      }}
                    >
                      ⭐ {item.rating}
                    </div>
                  </div>

                  <Card.Body className="p-4">
                    <Card.Title style={{ fontSize: "2rem", fontWeight: "700", lineHeight: "1.2" }} className="fw-bold mb-2">{item.name}</Card.Title>

                    <Card.Text
                      className="text-muted mb-1"
                      style={{
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                    >
                      {item.category}
                    </Card.Text>

                    <div className="d-flex flex-wrap gap-2 " style={{ marginTop: "12px", marginBottom: "20px" }}>
                      {item.popularFor.slice(0, 3).map((tag, index) => {
                        let icon = "📍";
                        if (tag === "Royal Palaces") icon = "🏰";

                        if (tag === "Culture") icon = "🎭";
                        if (tag === "Shopping") icon = "🛍️";
                        if (tag === "Street Food") icon = "🍛";

                        if (tag === "Snow") icon = "❄"
                        if (tag === "Adventure") icon = "🏔"
                        if (tag === "Camping") icon = "🌄"
                        if (tag === "Royal Heritage") icon = "🏰"
                        if (tag === "Lakes") icon = "🌊"
                        if (tag === "Boating") icon = "⛵"
                        return (
                          <span
                            key={index}
                            style={{
                              flex: 1,
                              textAlign: "center",
                              background: "#f3f4f6",
                              borderRadius: "20px",
                              padding: "6px 8px",
                              fontSize: "12px",
                              fontWeight: "600",
                              overflow: "hidden",
                              color: "#333",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {icon} {tag}
                          </span>
                        );
                      })}
                    </div>
                    <div className="d-flex justify-content-between " style={{
                      marginTop: "8px",
                      fontSize: "15px",
                    }}>
                      <span>🕒 {item.duration}</span>

                      <span>🌤 {item.bestTimeToVisit}</span>
                    </div>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <small className="text-muted">EST. BUDGET</small>
                        <h4 className="fw-bold text-primary">
                          ₹{item.budget}
                        </h4>
                      </div>
                      <button
                        className="btn btn-primary rounded-pill px-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlec(item.id);
                        }}
                      >
                        Explore →
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

