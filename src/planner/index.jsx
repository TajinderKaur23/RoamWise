
import { useState } from "react";
import { plan } from "../Plannerdest/plan";
import { Formik, Form, Field } from "formik";
import { FaHotel } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import * as Yup from "yup";
import {
    Container,
    Row,
    Col,
    Card,
    Button
} from "react-bootstrap";

const PlannerSchema = Yup.object().shape({
    destination: Yup.string().required("Destination is required"),
    days: Yup.number()
        .required("Days are required")
        .min(1, "Minimum 1 day"),
    friends: Yup.number()
        .required("Travelers required")
        .min(1),
    budget: Yup.string().required("Select hotel budget"),
    transport: Yup.string().required("Select transport"),
});

export const Planner = () => {

    const [result, setResult] = useState(null);

    return (

        <Container
            fluid
            style={{
                background: "#f5f8ff",
                minHeight: "100vh",
                padding: "60px 20px"
            }}
        >

            <h1
                className="text-center fw-bold"
                style={{
                    color: "#0d6efd",
                    fontSize: "48px"
                }}
            >
                ✈️  Trip Planner
            </h1>

            <p
                className="text-center mb-5"
                style={{
                    color: "#6c757d",
                    fontSize: "18px"
                }}
            >
                Plan your perfect trip in seconds.
            </p>

            <Card
                className="border-0 shadow-lg"
                style={{
                    maxWidth: "1150px",
                    margin: "auto",
                    borderRadius: "28px",
                    padding: "50px"
                }}
            >

                <Formik

                    initialValues={{

                        destination: "",

                        days: "",

                        friends: 1,

                        budget: "",

                        transport: ""

                    }}

                    validationSchema={PlannerSchema}

                    onSubmit={(values) => {

                        const selected = plan.find(
                            item => item.city === values.destination
                        );

                        const days = Number(values.days);

                        const friends = Number(values.friends);

                        const hotel =
                            selected.hotel[values.budget] * days;

                        const food =
                            selected.food *
                            days *
                            friends;

                        const activities =
                            selected.activities *
                            days *
                            friends;

                        const transport =
                            selected.transport[values.transport] *
                            friends;

                        const total =
                            hotel +
                            food +
                            activities +
                            transport;

                        const perPerson =
                            total / friends;

                        setResult({

                            hotel,

                            food,

                            activities,

                            transport,

                            total,

                            perPerson

                        });


                        const tripData = {
                            destination: values.destination,
                            days,
                            friends,
                            budget: values.budget,
                            transport: values.transport,

                            hotel,
                            food,
                            activities,
                            transportCost: transport,

                            total,
                            perPerson,

                            createdAt: new Date().toLocaleString(),
                        };

                        const oldTrips =
                            JSON.parse(localStorage.getItem("plannedTrips")) || [];

                        oldTrips.push(tripData);

                        localStorage.setItem(
                            "plannedTrips",
                            JSON.stringify(oldTrips)
                        );
                    }}
                >
                    {({ errors, touched }) => (

                        <Form>

                            <Row className="g-5">

                                <Col md={6}>

                                    <label className="fw-semibold mb-2">
                                        Destination
                                    </label>

                                    <Field
                                        as="select"
                                        name="destination"
                                        className="form-select"
                                        style={{
                                            height: "58px",
                                            borderRadius: "15px"
                                        }}
                                    >

                                        <option value="">
                                            Select Destination
                                        </option>

                                        {plan.map(item => (

                                            <option
                                                key={item.city}
                                                value={item.city}
                                            >
                                                {item.city}
                                            </option>

                                        ))}

                                    </Field>

                                    {
                                        touched.destination && errors.destination && (
                                            <div className="text-danger mt-1">
                                                {errors.destination}
                                            </div>
                                        )
                                    }

                                </Col>

                                <Col md={3}>

                                    <label className="fw-semibold mb-2">
                                        Days
                                    </label>

                                    <Field
                                        type="number"
                                        name="days"
                                        className="form-control"
                                        style={{
                                            height: "58px",
                                            borderRadius: "15px"
                                        }}
                                    />

                                    {
                                        touched.days && errors.days && (
                                            <div className="text-danger mt-1">
                                                {errors.days}
                                            </div>
                                        )
                                    }

                                </Col>

                                <Col md={3}>

                                    <label className="fw-semibold mb-2">
                                        Travelers
                                    </label>

                                    <Field
                                        type="number"
                                        name="friends"
                                        className="form-control"
                                        style={{
                                            height: "58px",
                                            borderRadius: "15px"
                                        }}
                                    />

                                    {
                                        touched.friends && errors.friends && (
                                            <div className="text-danger mt-1">
                                                {errors.friends}
                                            </div>
                                        )
                                    }

                                </Col>

                                <Col md={6}>

                                    <label className="fw-semibold mb-2">
                                        Hotel Budget
                                    </label>

                                    <Field
                                        as="select"
                                        name="budget"
                                        className="form-select"
                                        style={{
                                            height: "58px",
                                            borderRadius: "15px"
                                        }}
                                    >

                                        <option value="">
                                            Select Budget
                                        </option>

                                        <option value="low">
                                            Low
                                        </option>

                                        <option value="medium">
                                            Medium
                                        </option>

                                        <option value="luxury">
                                            Luxury
                                        </option>

                                    </Field>

                                    {
                                        touched.budget && errors.budget && (
                                            <div className="text-danger mt-1">
                                                {errors.budget}
                                            </div>
                                        )
                                    }

                                </Col>

                                <Col md={6}>

                                    <label className="fw-semibold mb-2">
                                        Transport
                                    </label>

                                    <Field
                                        as="select"
                                        name="transport"
                                        className="form-select"
                                        style={{
                                            height: "58px",
                                            borderRadius: "15px"
                                        }}
                                    >

                                        <option value="">
                                            Select Transport
                                        </option>

                                        <option value="bus">
                                            Bus
                                        </option>

                                        <option value="train">
                                            Train
                                        </option>

                                        <option value="flight">
                                            Flight
                                        </option>

                                        <option value="car">
                                            Car
                                        </option>

                                    </Field>

                                    {
                                        touched.transport && errors.transport && (
                                            <div className="text-danger mt-1">
                                                {errors.transport}
                                            </div>
                                        )
                                    }

                                </Col>

                                <Col md={12} className="text-center mt-4">

                                    <Button
                                        type="submit"
                                        size="lg"
                                        style={{
                                            borderRadius: "50px",
                                            padding: "14px 60px",
                                            fontWeight: "600",
                                            fontSize: "18px"
                                        }}
                                    >
                                        Generate Trip Budget
                                    </Button>

                                </Col>

                            </Row>

                        </Form>
                    )}
                </Formik>

            </Card>
            {result && (
                <>

                    <div className="text-center mt-5 mb-5">

                        <h2
                            style={{
                                fontWeight: "700",
                                color: "#0d6efd",
                                fontSize: "40px"
                            }}
                        >
                            Budget Breakdown
                        </h2>

                        <p
                            style={{
                                color: "#6c757d",
                                fontSize: "18px"
                            }}
                        >
                            Estimated expenses for your entire trip
                        </p>

                    </div>

                    <Row
                        className="g-4 justify-content-center"
                        style={{ maxWidth: "1200px", margin: "auto" }}
                    >

                        <Col lg={3} md={6}>
                            <Card
                                className="border-0 text-center h-100"
                                style={{
                                    borderRadius: "22px",
                                    padding: "30px",
                                    boxShadow: "0 12px 25px rgba(0,0,0,.08)"
                                }}
                            >
                                <div style={{ fontSize: "55px" }}><FaHotel style={{ color: "blue" }} /></div>

                                <h5 className="mt-3 fw-bold">
                                    Hotel
                                </h5>

                                <h3 className="text-primary">
                                    ₹{Math.round(result.hotel)}
                                </h3>
                            </Card>
                        </Col>

                        <Col lg={3} md={6}>
                            <Card
                                className="border-0 text-center h-100"
                                style={{
                                    borderRadius: "22px",
                                    padding: "30px",
                                    boxShadow: "0 12px 25px rgba(0,0,0,.08)"
                                }}
                            >
                                <div style={{ fontSize: "55px" }}><FaUtensils /></div>

                                <h5 className="mt-3 fw-bold">
                                    Food
                                </h5>

                                <h3 className="text-success">
                                    ₹{Math.round(result.food)}
                                </h3>
                            </Card>
                        </Col>

                        <Col lg={3} md={6}>
                            <Card
                                className="border-0 text-center h-100"
                                style={{
                                    borderRadius: "22px",
                                    padding: "30px",
                                    boxShadow: "0 12px 25px rgba(0,0,0,.08)"
                                }}
                            >
                                <div style={{ fontSize: "55px" }}><FaMapMarkedAlt style={{ color: "blue" }} /></div>

                                <h5 className="mt-3 fw-bold">
                                    Activities
                                </h5>

                                <h3 className="text-warning">
                                    ₹{Math.round(result.activities)}
                                </h3>
                            </Card>
                        </Col>

                        <Col lg={3} md={6}>
                            <Card
                                className="border-0 text-center h-100"
                                style={{
                                    borderRadius: "22px",
                                    padding: "30px",
                                    boxShadow: "0 12px 25px rgba(0,0,0,.08)"
                                }}
                            >
                                <div style={{ fontSize: "55px" }}><FaCarSide style={{ color: "red" }} /></div>

                                <h5 className="mt-3 fw-bold">
                                    Transport
                                </h5>

                                <h3 className="text-danger">
                                    ₹{Math.round(result.transport)}
                                </h3>
                            </Card>
                        </Col>

                    </Row>

                    <Row
                        className="mt-5"
                        style={{
                            maxWidth: "1200px",
                            margin: "40px auto"
                        }}
                    >

                        <Col lg={8}>

                            <Card
                                className="border-0"
                                style={{
                                    borderRadius: "25px",
                                    padding: "35px",
                                    boxShadow: "0 15px 35px rgba(0,0,0,.08)"
                                }}
                            >

                                <h3 className="fw-bold mb-4">
                                    Expense Summary
                                </h3>

                                <div className="d-flex justify-content-between mb-3">
                                    <span><FaHotel size={30} style={{ color: "blue" }} /> Hotel</span>
                                    <strong>₹{Math.round(result.hotel)}</strong>
                                </div>

                                <div className="progress mb-4" style={{ height: "10px" }}>
                                    <div
                                        className="progress-bar bg-primary"
                                        style={{
                                            width: `${(result.hotel / result.total) * 100}%`
                                        }}
                                    ></div>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span><FaUtensils size={30} /></span>
                                    <strong>₹{Math.round(result.food)}</strong>
                                </div>

                                <div className="progress mb-4" style={{ height: "10px" }}>
                                    <div
                                        className="progress-bar bg-success"
                                        style={{
                                            width: `${(result.food / result.total) * 100}%`
                                        }}
                                    ></div>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span><FaMapMarkedAlt size={30} style={{ color: "blue" }}></FaMapMarkedAlt></span>
                                    <strong>₹{Math.round(result.activities)}</strong>
                                </div>

                                <div className="progress mb-4" style={{ height: "10px" }}>
                                    <div
                                        className="progress-bar bg-warning"
                                        style={{
                                            width: `${(result.activities / result.total) * 100}%`
                                        }}
                                    ></div>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span><FaCarSide size={30} style={{ color: "red" }} /></span>
                                    <strong>₹{Math.round(result.transport)}</strong>
                                </div>

                                <div className="progress" style={{ height: "10px" }}>
                                    <div
                                        className="progress-bar bg-danger"
                                        style={{
                                            width: `${(result.transport / result.total) * 100}%`
                                        }}
                                    ></div>
                                </div>

                            </Card>

                        </Col>

                        {/* <Col lg={4}>

              <Card
                className="border-0 text-center"
                style={{
                  borderRadius: "25px",
                  padding: "40px",
                  background:
                    "linear-gradient(135deg,#0d6efd,#3b82f6)",
                  color: "white",
                  boxShadow: "0 15px 35px rgba(13,110,253,.35)"
                }}
              >

                <h5>Total Trip Cost</h5>

                <h1
                  className="fw-bold my-4"
                  style={{ fontSize: "48px" }}
                >
                  ₹{Math.round(result.total)}
                </h1>

                <hr />

                <h6>Per Person</h6>

                <h2 className="fw-bold">
                  ₹{Math.round(result.perPerson)}
                </h2>

              </Card>

            </Col> */}

                        <Col lg={4} className="d-flex">
                            <Card
                                className="border-0 shadow rounded-4 w-100"
                                style={{
                                    minHeight: "250px",
                                    padding: "40px 30px",
                                }}
                            >
                                <div
                                    className="d-flex flex-column justify-content-between h-100 text-center"
                                >

                                    <div style={{ marginTop: "20px" }}>
                                        <h3
                                            className="fw-semibold mb-4"
                                            style={{ color: "#4b5563", fontSize: "2rem" }}
                                        >
                                            Total Trip Cost
                                        </h3>

                                        <h1
                                            className="fw-bold"
                                            style={{
                                                color: "#2563eb",
                                                fontSize: "4.3rem",
                                            }}
                                        >
                                            ₹{Math.round(result.total)}
                                        </h1>
                                    </div>

                                    <hr className="my-4" />


                                    <div style={{ marginBottom: "20px" }}>
                                        <h3
                                            className="fw-semibold mb-3"
                                            style={{ color: "#4b5563", fontSize: "2rem" }}
                                        >
                                            Per Person
                                        </h3>

                                        <h1
                                            className="fw-bold"
                                            style={{
                                                color: "#111827",
                                                fontSize: "3.5rem",
                                            }}
                                        >
                                            ₹{Math.round(result.perPerson)}
                                        </h1>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                </>
            )}

        </Container>
    );
};