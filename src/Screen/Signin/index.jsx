
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SignIn = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    // onSubmit: (values) => {
    //   const userData = {
    //     email: values.email,
    //     isLoggedIn: true,
    //   };

    //   localStorage.setItem("user", JSON.stringify(userData));

    //   alert("Sign In Successful!");
    //   navigate("/");
    // },

onSubmit: async (values) => {

    try {

        const response = await fetch(
            "http://localhost:3000/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            }
        );

        const data = await response.json();

        if (data.success) {

            const userData = {
                ...data.user,
                isLoggedIn: true
            };

            localStorage.setItem(
                "user",
                JSON.stringify(userData)
            );

            alert("Sign In Successful!");

            navigate("/");

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

        {/* Left Side */}
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

        {/* Right Side */}
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
            <h1
              style={{
                color: "#0d6efd",
                fontWeight: "700",
              }}
            >
              <FaGlobeAmericas /> RoamWise
            </h1>

            <h2 className="mt-4 fw-bold">
              Welcome Back 👋
            </h2>

            <p className="text-muted">
              Continue your next adventure
            </p>

            <Form onSubmit={formik.handleSubmit}>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>

                <Form.Control
                  type="email"
                  name="email"
                  placeholder="traveler@example.com"
                  size="lg"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.touched.email && !!formik.errors.email
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  name="password"
                  placeholder="********"
                  size="lg"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.touched.password &&
                    !!formik.errors.password
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                className="w-100"
                size="lg"
                type="submit"
              >
                Sign In
              </Button>

              <p className="text-center mt-4">
                Don't have an account?{" "}
                <Link to="/signup">Create Account</Link>
              </p>

            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};