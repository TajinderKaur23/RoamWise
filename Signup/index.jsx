
import { useFormik } from "formik";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FaGlobeAmericas } from "react-icons/fa";
import * as Yup from "yup";
export const Signup = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      travel: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Full Name is required"),

      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),

      travel: Yup.string()
        .required("Please select your travel goal"),
    }),

    // onSubmit: (values) => {
    //   const userData = {
    //     email: values.email,
    //     isLoggedIn: true,
    //   };

    //   localStorage.setItem("user", JSON.stringify(userData));
    //   alert("Sign Up Successful!");
    //   navigate("/");
    // },
  onSubmit: async (values) => {

    try {

        const response = await fetch(
            "http://localhost:3000/signup",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    travel: values.travel
                })
            }
        );

        const data = await response.json();

        if (data.success) {

            alert(data.message);

            navigate("/signin");

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.log(error);

        alert("Unable to connect to server");
    }
}
  });
  return (
    <Container fluid className="p-0">
      <Row className="g-0" style={{ minHeight: "100vh" }}>
        <Col
          md={6}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            position: "relative",
          }}
        >
          <div
            style={{
              background: "rgba(0,0,0,0.45)",
              height: "100%",
              padding: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "700",
                lineHeight: "1.2",
              }}
            >
              Explore the world,
              <br />
              one journey at a time.
            </h1>
            <p style={{ fontSize: "22px", marginTop: "25px" }}>
              Plan trips, discover destinations and create unforgettable
              memories.
            </p>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{ background: "#f8f9fa" }}
        >
          <div
            style={{
              width: "430px",
              background: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >

            <h1 style={{ color: "#0d6efd", fontWeight: "700" }}>
              <FaGlobeAmericas /> RoamWise
            </h1>

            <h2 className="mt-4 fw-bold">
              Start Exploring ✈
            </h2>

            <p className="text-muted">
              Continue your next adventure
            </p>

            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>

                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Shivani Oberoi"
                  value={formik.values.name}
                  onChange={formik.handleChange}

                  isInvalid={formik.touched.name && !!formik.errors.name}
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>

                <Form.Control
                  type="email"
                  name="email"
                  placeholder="traveler@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}

                  isInvalid={formik.touched.email && !!formik.errors.email}
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  name="password"
                  placeholder="********"
                  value={formik.values.password}
                  onChange={formik.handleChange}

                  isInvalid={formik.touched.password && !!formik.errors.password}
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Primary Travel Goal</Form.Label>

                <Form.Select
                  name="travel"
                  value={formik.values.travel}
                  onChange={formik.handleChange}

                  isInvalid={formik.touched.travel && !!formik.errors.travel}
                >
                  <option value="">Select your travel goal</option>
                  <option value="mountains">Mountains</option>
                  <option value="beaches">Beaches</option>
                  <option value="historical">Historical</option>
                  <option value="family">Family Trips</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {formik.errors.travel}
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" variant="primary"
                className="w-100"
                size="lg"
              >
                Create Account
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}