
// import { slider, restaurants } from "../../Data/sample";
// import { Carousel, Container, Card, Row, Col } from "react-bootstrap";

// const handler = (e) => {
//   console.log(e.currentTarget.previousElementSibling.scrollLeft += 300)
// }

// const handle = (e) => {
//   console.log(e.currentTarget.nextElementSibling.scrollLeft -= 300)
// }

// export const Home = () => {
//   return (
//     <>


//      <div
//         style={{
//           background: "#f8f8f8",
//           padding: "30px 0",
//         }}
//       >
//         <Container>
//           <h2
//             style={{

//               marginBottom: "30px",
//               fontSize: "38px",
//               marginTop: "20px"
//             }}
//           >
//             Inspiration for your first order
//           </h2>
//           <div
//             style={{
//               position: "relative",

//             }}
//           >
//             <button
//               onClick={handle}
//               style={{
//                 position: "absolute",
//                 top: "40%",
//                 left: 0,
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 border: "none",
//                 background: "white",
//                 boxShadow: "0 2px 10px rgba(0,0,0,.2)",
//                 cursor: "pointer",
//                 zIndex: 10,
//               }}
//             >
//               {"<"}
//             </button>

//             <div
//               className="d-flex"
//               style={{
//                 overflow: "auto",
//                 whiteSpace: "nowrap",
//                 scrollbarWidth: "none",
//                 gap: "20px",
//                 scrollBehavior: "smooth",
//               }}
//             >
//               {slider.map((item) => {
//                 return (
//                   <Col className="m-3 p-3" key={item.id}>
//                     <img
//                       src={item.image}
//                       style={{
//                         width: "150px",
//                         height: "150px",
//                         borderRadius: "50%",
//                       }}
//                     />
//                     <p style={{ textAlign: "center" }}>{item.title}</p>
//                   </Col>
//                 );
//               })}
//             </div>

//             <button
//               onClick={handler}
//               style={{
//                 position: "absolute",
//                 top: "40%",
//                 right: 0,
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 border: "none",
//                 background: "white",
//                 boxShadow: "0 2px 10px rgba(0,0,0,.2)",
//                 cursor: "pointer",
//                 zIndex: 10,
//               }}
//             >
//               {">"}
//             </button>
//           </div>
//         </Container>
//       </div>



//       <Container className="mt-5">
//         <h4 style={{ fontSize: "32px", marginBottom: "30px", marginTop: "6px" }}>
//           Yamuna Nagar, Haryana, India Restaurants
//         </h4>

//         <Row>
//           {restaurants.map((iteme) => {
//             return (
//               <Col
//                 xs={12}
//                 sm={6}
//                 md={4}
//                 lg={4}
//                 className="mb-4 d-flex"
//                 key={iteme.id}
//               >
//                 <Card
//                   className="border-0 shadow-sm h-100"
//                   style={{
//                     borderRadius: "18px",
//                     overflow: "hidden",
//                     width: "100%",
//                     transition: " all 0.3s ease",

//                     cursor: "pointer",
//                     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
//                   }}

//                 >


//                   <div style={{ position: "relative" }}>

//                     <Card.Img
//                       src={iteme.image_url}
//                       style={{
//                         height: "250px",
//                         objectFit: "cover",
//                       }}
//                     />


//                     {iteme.offer && (
//                       <div
//                         style={{
//                           position: "absolute",
//                           bottom: "12px",
//                           left: "10px",
//                           background: "#256FEF",
//                           color: "white",
//                           padding: "5px 10px",
//                           borderRadius: "5px",
//                           fontSize: "13px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         {iteme.offer}
//                       </div>
//                     )}



//                     {iteme.is_promoted && (
//                       <div
//                         style={{
//                           position: "absolute",
//                           top: "12px",
//                           right: "12px",
//                           background: "rgba(0,0,0,.6)",
//                           color: "white",
//                           padding: "4px 8px",
//                           borderRadius: "5px",
//                           fontSize: "12px",
//                         }}
//                       >
//                         Promoted
//                       </div>
//                     )}

//                   </div>

//                   <Card.Body style={{ padding: "14px" }}>



//                     <div className="d-flex justify-content-between align-items-center">

//                       <h5
//                         style={{
//                           margin: 0,
//                           fontSize: "18px",
//                           fontWeight: "600",
//                           overflow: "hidden",
//                           whiteSpace: "nowrap",
//                           textOverflow: "ellipsis",
//                         }}
//                       >
//                         {iteme.restaurant_name}
//                       </h5>


//                       <span
//                         style={{
//                           background: "#267E3E",
//                           color: "white",
//                           padding: "4px 8px",
//                           borderRadius: "7px",
//                           fontSize: "13px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         ★ {iteme.rating}
//                       </span>

//                     </div>




//                     <div
//                       className="d-flex justify-content-between mt-2"
//                       style={{
//                         color: "#696969",
//                         fontSize: "14px",
//                       }}
//                     >

//                       <span
//                         style={{
//                           maxWidth: "70%",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                           whiteSpace: "nowrap"
//                         }}
//                       >
//                         {iteme.cuisines.join(", ")}
//                       </span>


//                       <span>
//                         {iteme.cost_for_one}
//                       </span>

//                     </div>







//                     <div
//                       className="d-flex justify-content-end"
//                       style={{
//                         color: "#696969",
//                         fontSize: "14px"
//                       }}
//                     >


//                       <span>
//                         {iteme.delivery_time}
//                       </span>


//                     </div>


//                   </Card.Body>


//                 </Card>
//               </Col>

//             );
//           })}
//         </Row>
//       </Container> 
//     </>
//   );
// };

//Travel planner

import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { Datatr } from "../../Datatr"
import { LuPlane } from "react-icons/lu";
import Footer from "../../Components/Footer";
export const Home = () => {

  const navigate = useNavigate()
  const handle = () => {
    navigate({
      pathname: "/festival",

    });
  }
  const handler = () => {
    navigate({
      pathname: "/explore"
    })

  };
  return (
    <>
      <style>
        {`
          @keyframes fly {
            from {
              transform: translate(0,0);
            
            }
            to {
              transform: translate(300px,-150px)
           
            }
          }
        `}

      </style>


      <div
        className="position-relative overflow-hidden  shadow-lg m-4"
        style={{ height: "500px", borderRadius: "28px" }}
      >
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600" className="w-100 h-100" style={{ objectFit: "cover", filter: "brightness(60%) contrast(110%) saturate(120%)" }}></img>

        <div style={{
          position: "absolute",
          inset: 0,

          //  background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.45))",
          background:
            "linear-gradient(90deg, rgba(8,15,35,0.75) 0%, rgba(20,20,20,0.35) 50%, rgba(255,140,0,0.25) 100%)",


        }}>
        </div>
        <div style={{
          position: "absolute", inset: 0, display: "flex", justifyContent: "center", alignItems: "center",
          background: "rgba(255,140,0,0.12)",
          mixBlendMode: "screen",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          padding: "20px",
          zIndex: 2
        }}>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: "1.05",
              letterSpacing: "-2px"
            }}
          >
            <LuPlane size={50} style={{
              margin: "15px",
              animation: "fly 3s linear infinite", transformOrigin: "center"
            }} />
            Design Your Perfect{" "}
            <span style={{ color: "#00d4ff" }}>
              Escape
            </span>
          </h1>

          <p style={{
            fontSize: "20px ", maxWidth: "760px",
            lineHeight: "1.7",
            fontWeight: 500,
            marginTop: "18px"
          }}>
            Tailored itineraries, immersive maps, festivals and  travel planning.
          </p>

        </div>
      </div>
      <h1 className="fw-bold" style={{ textAlign: "center", color: "#00d4ff", marginBottom: "4px" }}>Explore Categories</h1>

      <Container fluid="lg">
        <Row className="justify-content-center g-4 mt-4">
          <Col lg={3} md={4} sm={6} xs={12}>
            <Card
              className="border-0 shadow-sm h-100 text-center"
              style={{
                borderRadius: "20px", padding: "26px 10px", border: "1px solid #edf2f7",
                boxShadow: "0 8px 25px rgba(0,0,0,.05)", cursor: "pointer"
              }}
            >

              <div style={{ fontSize: "32px" }}>🌴</div>
              <Card.Text style={{ fontSize: "17px", fontWeight: "600" }}>
                Beaches
              </Card.Text>
            </Card>
          </Col>

          <Col lg={3} md={4} sm={6} xs={12}>
            <Card
              className="border-0 shadow-sm h-100 text-center"
              style={{ borderRadius: "20px", padding: "26px 10px", cursor: "pointer", border: "1px solid #edf2f7", boxShadow: "0 8px 25px rgba(0,0,0,.05)" }}
            >
              <div style={{ fontSize: "32px" }}>🏞️</div>
              <Card.Text style={{ fontSize: "17px", fontWeight: "600" }}>
                Mountains
              </Card.Text>
            </Card>
          </Col>

          <Col lg={3} md={4} sm={6} xs={12}>
            <Card
              className="border-0 shadow-sm h-100 text-center"
              style={{ borderRadius: "20px", padding: "26px 10px", cursor: "pointer", border: "1px solid #edf2f7", boxShadow: "0 8px 25px rgba(0,0,0,.05)" }}
            >
              <div style={{ fontSize: "32px" }}>🏛️</div>
              <Card.Text style={{ fontSize: "17px", fontWeight: "600" }}>
                Historical
              </Card.Text>
            </Card>
          </Col>

          <Col lg={3} md={4} sm={6} xs={12}>
            <Card
              className="border-0 shadow-sm h-100 text-center"
              style={{ borderRadius: "20px", padding: "26px 10px", cursor: "pointer", border: "1px solid #edf2f7", boxShadow: "0 8px 25px rgba(0,0,0,.05)" }}
            >
              <div style={{ fontSize: "32px" }}>👨‍👩‍👧‍👦</div>
              <Card.Text style={{ fontSize: "17px", fontWeight: "600" }}>
                Family Trips
              </Card.Text>
            </Card>
          </Col>
        </Row>

        <div className="d-flex justify-content-between align-items-center mb-4" style={{ marginTop: "80px" }}>
          <div>
            <h1 style={{
              fontSize: "50px",
              fontWeight: 800,
              marginBottom: "6px"
            }}>Popular Destinations</h1>
            <p style={{
              color: "grey", fontSize: "18px",
              color: "#64748b"
            }}>Trending spots across India right now</p>
          </div>
          {/* <div className="d-flex justify-content-between align-items-center"> */}

          <Button onClick={handler}
            variant="outline-primary"
            style={{
              borderRadius: "25px",
              padding: "8px 20px",
              fontWeight: "600"
            }}
          >
            View All →
          </Button>
        </div>
      </Container>



      <Container className="mb-5">
        <Row>


          <Col md={6} lg={4} className="mb-4">
            <Card className="border-1px solid #e5e7eb  h-100" style={{ overflow: "hidden", transition: "0.3s", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,.08)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.01";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
              }}>
              <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" style={{ height: "260px", objectFit: "cover" }} />



              <Card.Body style={{ padding: "26px" }}>
                <Card.Title className="fw-bold mb-3" style={{
                  fontSize: "34px",
                  fontWeight: 700
                }}>Taj Mahal</Card.Title>
                <Card.Text style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#6b7280",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minHeight: "58px"
                }} >"The Taj Mahal is a UNESCO World Heritage Site and one of the world's most famous monuments. Built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",</Card.Text>
              </Card.Body>
            </Card>
          </Col>


          <Col md={6} lg={4} className="mb-4" >
            <Card className="border-1px solid #e5e7eb h-100" style={{ overflow: "hidden", transition: "0.3s", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,.08)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
              }}>
              <Card.Img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600" style={{ height: "260px", objectFit: "cover" }} />



              <Card.Body style={{ padding: "26px" }}>
                <Card.Title className="fw-bold  mb-3" style={{
                  fontSize: "34px",
                  fontWeight: 700
                }}>Jaipur</Card.Title>
                <Card.Text style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#6b7280",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minHeight: "58px"
                }}>Known as the Pink City of India, Jaipur is famous for royal palaces, forts, colorful markets, and traditional Rajasthani culture.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4" >
            <Card className="border-1px solid #e5e7eb  h-100" style={{ overflow: "hidden", transition: "0.3s", borderRadius: "26px", boxShadow: "0 10px 30px rgba(0,0,0,.08)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
              }}>
              <Card.Img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600" style={{ height: "260px", objectFit: "cover" }} />



              <Card.Body style={{ padding: "26px" }}>
                <Card.Title className="fw-bold  mb-3" style={{
                  fontSize: "34px",
                  fontWeight: 700
                }}>Goa</Card.Title>
                <Card.Text style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#6b7280",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minHeight: "58px"
                }}>Goa is India's most popular beach destination, famous for sandy beaches, nightlife and water sports.</Card.Text>
              </Card.Body>
            </Card>
          </Col>



        </Row>
      </Container>
      <>
       

       
       
        <Container className="mb-5">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "40px",
              padding: "20px",
              background: "#fff",
              borderRadius: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",

            }}
          >
            
            <div style={{ flex: 1 }}>
              <span
                style={{
                  display: "inline-block",
                  background: "#FFF3D6",
                  color: "#B36B00",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                FESTIVAL SPOTLIGHT
              </span>

              <h1
                style={{
                  fontSize: "46px",
                  fontWeight: "700",
                  color: "#101828",
                  margin: "18px 0",
                  lineHeight: "1.15",
                }}
              >
                Plan Around <br /> Cultural Festivities
              </h1>

              <p
                style={{
                  color: "#667085",
                  fontSize: "17px",
                  lineHeight: "1.7",
                  maxWidth: "500px",
                }}
              >
                Align your next destination with legendary local festivals.
                Dance in the streets of Rio, paint the sky in Mathura during
                Holi, or meditate under Tokyo's sakura petals. Discover the
                optimal season, crowd parameters, and festival schedules
                instantly.
              </p>

              <button
                onClick={handle}
                style={{
                  marginTop: "30px",
                  background: "#0F172A",
                  color: "white",
                  border: "none",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: "600",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Explore Festivals →
              </button>
            </div>

            
            <div
              style={{
                flex: 1,
                position: "relative",
                maxWidth: "650px",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiquXeOfBvJsWH66HK9oB0rWe-oQ7jD85aIUtViLp5Bw&s=10"
                alt="Festival"
                style={{
                  width: "100%",
                  height: "320px",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />

              
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "24px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15))",
                }}
              />

             
              <div
                style={{
                  position: "absolute",
                  bottom: "25px",
                  left: "25px",
                  color: "white",
                }}
              >
                <p
                  style={{
                    color: "#FFD54F",
                    fontWeight: "700",
                    fontSize: "14px",
                    margin: 0,
                  }}
                >
                  HIGHLIGHT OF MARCH
                </p>

                <h2
                  style={{
                    marginTop: "10px",
                    fontSize: "34px",
                    margin: 0,
                  }}
                >
                  Holi Color Festival,
                  <br />
                  Mathura
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </>
      <Container className="mb-5 mt-5">

        <h1 style={{ fontSize: "44px", marginBottom: '35px', fontWeight: '600' }}>What Our Travelers Say ❤️</h1>
        <Row className="g-4">

          <Col md={6} >
            <Card>
              <Card.Body>

                <Card.Text >
                  "RoamWise's Trip Planner crafted the perfect 7-day Udaipur trip for us. Every destination and route was planned seamlessly, making our journey stress-free!"
                  <br />

                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" style={{ padding: "12px", height: "80px", width: "80px", borderRadius: '50%', }}></img>
                  <span>Alexandro Rossi</span><br></br>
                  <span>Family Traveller</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card  >
              <Card.Body>
                <Card.Text>
                  "Planning my Goa vacation with RoamWise was effortless. The personalized itinerary helped me explore every destination without wasting time or missing hidden gems!"
                  <br />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_T7Bg8e_YtrVCA5DlgsM2m-QiXZFPpG43unJstYGR-Q&s=10" style={{ padding: "12px", height: "80px", width: "80px", borderRadius: '50%' }}></img>
                  <span>Sarah jenkins</span><br></br>
                  <span>Solo Traveller</span>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />

    </>

  )
}


{/* // import { useSelector,useDispatch } from "react-redux"

// import { login } from "../../store/loginslice"
// import { logout } from "../../store/loginslice"
// export const Home=()=>{ */}
{/* //   const Login=useSelector((state)=>state.loginReducer.isLogin)  //for tking data redux,state

//  const dispatch=useDispatch()    //updating data,redux action call
//   return(
//     <>
//     <h1>Home</h1>
    
//       <h1>{Login?"user is login":"user is logout"}</h1>
//       <button onClick={()=>dispatch(login())}>login</button>
      
//       <button onClick={()=>dispatch(logout())}>to logout</button>
    
//     </>
//   ) 
// } */}