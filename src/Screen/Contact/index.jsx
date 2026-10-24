


// import { useState } from "react";

// export const Contact = () => {
//   const [form, setForm] = useState({
//     help: "",
//     name: "",
//     email: "",
//     number: "",
//     text: "",
//   });

//   const fields = [
//     {
//       name: "help",
//       type: "select",
//       options: [
//         "I have an issue with my Zomato order",
//         "My Zomato app is not working",
//         "I want to share feedback or a suggestion",
//       ],
//     },
//     {
//       name: "name",
//       type: "text",
//       placeholder: "Full Name",
//     },
//     {
//       name: "email",
//       type: "email",
//       placeholder: "Email Address",
//     },
//     {
//       name: "number",
//       type: "tel",
//       placeholder: "Mobile Number (optional)",
//     },
//     {
//       name: "text",
//       type: "textarea",
//       placeholder: "Type your message",
//     },
//   ];

//   const handler = (event) => {
//     const { name, value } = event.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Contact form data:", form);
//     alert("Form submitted successfully!");
//   };

//   const render = (field) => {
//     switch (field.type) {
//       case "select":
//         return (
//           <select
//             key={field.name}
//             name={field.name}
//             value={form[field.name]}
//             onChange={handler}
//             required
//             style={inputStyle}
//           >
//             <option value="">How can we help you?</option>
//             {field.options.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         );

//       case "textarea":
//         return (
//           <textarea
//             key={field.name}
//             name={field.name}
//             placeholder={field.placeholder}
//             value={form[field.name]}
//             onChange={handler}
//             required
//             rows={5}
//             style={inputStyle}
//           />
//         );

//       default:
//         return (
//           <input
//             key={field.name}
//             type={field.type}
//             name={field.name}
//             placeholder={field.placeholder}
//             value={form[field.name]}
//             onChange={handler}
//             required={field.name !== "number"}
//             style={inputStyle}
//           />
//         );
//     }
//   };

//   return (
//     <div style={{ paddingBottom: "40px" }}>
//       {/* Banner */}
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           height: "200px",
//           marginBottom: "35px",
//         }}
//       >
//         <img
//           src="https://b.zmtcdn.com/webFrontend/8015dbe54fd3659cc0366c1cc77f664c1601890512.jpeg?output-format=webp"
//           alt="Zomato contact banner"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}
//         />

//         <h1
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "white",
//             fontSize: "clamp(22px, 4vw, 40px)",
//             textAlign: "center",
//             width: "90%",
//             margin: 0,
//           }}
//         >
//           We would love to hear from you!
//         </h1>
//       </div>

//       {/* Contact Form */}
//       <div
//         style={{
//           maxWidth: "650px",
//           width: "90%",
//           margin: "0 auto",
//           padding: "25px",
//           boxSizing: "border-box",
//           border: "1px solid #eeeeee",
//           borderRadius: "12px",
//         }}
//       >
//         <h2 style={{ marginBottom: "20px" }}>
//           Contact Us
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "16px",
//             }}
//           >
//             {fields.map(render)}

//             <button
//               type="submit"
//               style={{
//                 backgroundColor: "#e23744",
//                 color: "white",
//                 padding: "13px",
//                 border: "none",
//                 borderRadius: "6px",
//                 fontSize: "16px",
//                 cursor: "pointer",
//               }}
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   border: "1px solid #cccccc",
//   borderRadius: "6px",
//   fontSize: "15px",
//   boxSizing: "border-box",
// };


                // <Form.Group controlId={field.name} key={field.name}>

                //         <Form.Label>{field.label}</Form.Label>
                //         <Form.Control
                //             type={field.type} name={field.name} value={form[field.name] || ""} placeholder={field.placeholder} onChange={handler} required>
                //         </Form.Control>
                //     </Form.Group> 


import { Container, Row, Col, Card } from "react-bootstrap"
import Footer from "../../Components/Footer";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
export const Contact = () => {
  return (
    <>
      <p style={{ textAlign: "center", color: "blue", marginTop: "30px" }}>Support Desk</p>
      <h1 className="fw-bold" style={{ textAlign: "center" }}>We Love to Hear from You!!</h1>
      <p style={{ fontweight: "400", textAlign: "center" }}>Reach our dedicated traveler concierge 24 hours a day, 7 days a week.</p>
      <Container className="my-5">
        <Row>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-2 d-flex">

            <Card className="border-0 shadow-lg h-100" style={{
              borderRadius: "18px",
              borderColor: "grey",
              overflow: "hidden",
              height: "180px",
              width: "100%",
              transition: " all 0.3s ease",
              cursor: "pointer",
              boxShadow: "0 0px 10px 4px rgba(0, 0, 0, 0.35)"
            }}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <FiMail size={30} style={{ color: "blue", marginBottom: "18px" }} />
                <Card.Title style={{ textAlign: "center" }}>Email Address</Card.Title>
                <Card.Text style={{ textAlign: "center", fontSize: "15px", color: "blue" }}>desk@travelsphere.ai</Card.Text>
              </Card.Body>
            </Card>
          </Col>


          <Col xs={12} sm={6} md={4} lg={4} className="mb-2 d-flex">
            <Card className="border-0 shadow-lg h-100" style={{
              borderRadius: "18px",
              overflow: "hidden",
              width: "100%",
              height: "100px",
              transition: " all 0.3s ease",
              cursor: "pointer",
              boxShadow: "0 0px 10px 4px rgba(0, 0, 0, 0.35)"
            }}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <FiPhone size={30} style={{ color: "#00d4ff", marginBottom: "18px" }} />
                <Card.Title style={{ textAlign: "center" }}>Hotline Support</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>+1 (800) 555-SPHERE</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-2 d-flex">
            <Card className="border-0 shadow-lg h-100 " style={{
              borderRadius: "18px",

              height: '100px',
              overflow: "hidden",
              width: "100%",
              transition: " all 0.3s ease",
              cursor: "pointer",
              boxShadow: "0 0px 10px 4px rgba(0, 0, 0, 0.35)"
            }}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <CiLocationOn size={30} style={{ color: "orange", marginBottom: "18px" }} />
                <Card.Title style={{ textAlign: "center" }}>Headquarters</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>Bengaluru</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>

  )


}



