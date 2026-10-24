import { Datatr } from "../Datatr"
import { useParams } from "react-router-dom"
import { useState ,useEffect} from "react"
import { Container,Card,Row,Col,Button } from "react-bootstrap"
import { CiCloudMoon } from "react-icons/ci";
import { Location } from "../Location";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

export const Cardinfo=()=>{
  const wishlist=()=>{
const wish=JSON.parse(localStorage.getItem("wish"))||[]
const exist=wish.some((place)=>place.id===item.id)
if(!exist){
    wish.push(item)
    localStorage.setItem("wish",JSON.stringify(wish))
    alert("Destination Added to Wishlist!!")
}
else{
    alert("Already in wishlist")
}

  console.log(JSON.parse(localStorage.getItem("wish")));
  }
  const navigate = useNavigate()
  const handle = () => {
    navigate({
      pathname: "/explore",

    });
  };
  const { id } = useParams();

const item = Datatr.find((place) => place.id === Number(id));
   
    const [activeImg, setActiveImg] = useState(0);
    const [weather,setweather]=useState();
    
const getWea = (code) => {
  if (code === 0) return "☀️ Sunny";
  if ([1, 2].includes(code)) return "🌤️ Partly Cloudy";
  if (code === 3) return "☁️ Cloudy";
  if ([45, 48].includes(code)) return "🌫️ Foggy";
  if ([51, 53, 55, 56, 57].includes(code)) return "🌦️ Drizzle";
  if ([61, 63, 65, 66, 67].includes(code)) return "🌧️ Rainy";
  if ([71, 73, 75, 77].includes(code)) return "❄️ Snowy";
  if ([80, 81, 82].includes(code)) return "🌧️ Showers";
  if ([95, 96, 99].includes(code)) return "⛈️ Thunderstorm";

  return "🌍 Unknown";
};
  const nextImage = () => {
    setActiveImg((prev) =>
      prev === item.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImg((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    );
  };
   useEffect(() => {
  

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m"
  )
    .then((res) => res.json())
    .then((data) => setweather(data))
    .catch((err) => console.log(err));
}, [item.city]);
return(
  <>
  <div
  className="d-flex justify-content-between align-items-center mb-4"
  style={{ padding: "0 30px" }}
>
  <Button variant="outline-primary" style={{borderRadius:"30px",marginTop:"10px",padding:"8px 18px"}} onClick={handle}>
    ← Back to Discover
  </Button>

  <Button variant="outline-danger"style={{borderRadius:"30px",marginTop:"10px",padding:"8px 18px"}} onClick={wishlist} >
    ❤️ Wishlist
  </Button>
</div>
     <hr/>
     <div style={{marginLeft:"80px"}}>
  <h1
    className="fw-bold mb-1"
    style={{
      fontSize: "46px",
      color: "#1F2937",
    }}
  >
    {item.city}
  </h1>
  <p
    className="text-muted mb-0"
    style={{ fontSize: "16px" }}
  >
    {item.state}
  </p>

  </div>
<Container className="mt-4">
<Row className="g-4 align-items-start">

<Col lg={8} md={7}>
   <div style={{ position: "relative" }}>

        {/* Left Button */}
<button
          onClick={prevImage}
          style={{
            position: "absolute",
            top: "40%",
            left: 0,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            background: "white",
            boxShadow: "0 2px 10px rgba(0,0,0,.2)",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
         <FiChevronLeft size={26}/>
           </button>

       <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
    <div style={{position:"relative"}}>
      {console.log(item.city, item.images)}
    <Card.Img
  src={item.images[activeImg]}
  
  style={{
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
  }}
/>


</div>
</Card>
         <button
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "40%",
            right: 0,
            width: "40px",
              height: "40px",
            borderRadius: "50%",
            border: "none",
            background: "white",
            boxShadow: "0 2px 10px rgba(0,0,0,.2)",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
       <FiChevronRight size={26} />
        </button>
      </div>
      <Card className="shadow-sm border-0 rounded-4 mt-4 overflow-hidden">
  
 <Card.Body className="pb-0">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h4 className="fw-bold mb-1">📍 {item.city}</h4>
        <small className="text-muted">
          Explore the destination on the map
        </small>
      </div>

      <span
        className="px-3 py-2"
        style={{
          background: "#EFF6FF",
          color: "#2563EB",
          borderRadius: "25px",
          fontWeight: 600,
        }}
          >
        📌 Live Location
      </span>
    </div>
  <Location
    lat={item.latitude}
    lng={item.longitude}
    city={item.city}
  />
  </Card.Body>
  </Card>

  <Card className="border-0 rounded-4 mt-5" style={{padding:"10px"}}>
  <Card.Body>
    <h4 className="fw-bold mb-3">📍 Nearby Places</h4>
<Row className="g-4">
    {item.topAttractions.map((place, index) => (
          <Col lg={4} md={6}>
           { console.log(place)}
        <Card
    className="border-0 shadow-sm h-100"
    style={{
      borderRadius: "18px",
      overflow: "hidden",
      transition: "0.3s",
      cursor: "pointer",
      minHeight:"240px"
    }}>
  
            <img
              src={place.imgat}
              alt={place.name}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "14px 0 0 14px"
              }}
            />
         

       
            <Card.Body >
<div className="d-flex justify-content-between">
            
             <h6 className="fw-bold mb-0">
                  {place.name}
                </h6>
                 <span
          style={{
            color: "#f59e0b",
            fontWeight: 600,
            fontSize: "14px"
          }}
        >
          ⭐ {place.rating}
        </span>
               </div>
                 

              <p
                className="text-muted mb-1"
                style={{ fontSize: "13px" }}
              >
                {place.type}
              </p>

             

            </Card.Body>
            </Card>
          </Col>
    ))}
    </Row>
    </Card.Body>

       </Card>




<Card className="border-0  rounded-4 h-100"
 style={{
    minHeight: "240px",
    transition: ".3s",
    cursor: "pointer",
    width:"100%"
  }}
>
  <Card.Body>

    <h4 className="fw-bold mb-3">🍽 Popular Foods</h4>
 <Row className="g-4 ">
    {item.foodToTry.map((food, index) => (
<Col lg={4} md={6} key={index}>
      <Card
        key={index}
        className="border-0 shadow-sm rounded-4 mb-3"
         style={{
          borderRadius: "18px",
          overflow: "hidden",
          transition: "0.3s",
          cursor: "pointer",
          minHeight: "220px",
        }}
      >
      

       
            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "14px 0 0 14px"
              }}
            />
        

        
            <Card.Body >
 <div className="d-flex justify-content-between align-items-start">
              <h6 className="fw-bold mb-0">
                {food.name}
              </h6>
   <span
              style={{
                color: "#f59e0b",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              🍴
            </span>
          </div>
              <p
                className="text-muted mb-0"
                style={{ fontSize: "13px" }}
              >
                {food.type}
              </p>

            </Card.Body>
          </Card>

        </Col>
    ))}
      </Row>

  </Card.Body>

</Card>
</Col>

  <Col lg={4} md={5}>
  <div style={{
      position: "sticky",
      top: "90px",
    }}
  >
    <Card className="shadow rounded-4 border-0 p-4 " style={{minHeight:"400px"}}>
       <Card.Title className="fs-3 fw-bold mb-4" style={{color:"blue"}}><CiCloudMoon size={30} />
<span>Live weather</span></Card.Title>
<hr/>
 {weather ? (
  <>
    <h4>Current Weather</h4>

    <h2 className="display-4 fw-bold">{weather.current.temperature_2m}°C</h2>

    <h5 className="text-warning">
      {getWea(weather.current.weather_code)}
    </h5>

    <div className="d-flex justify-content-between"><span>💧Humidity</span>{weather.current.relative_humidity_2m}%</div>

    <p>Wind: {weather.current.wind_speed_10m} km/h</p>

  </>
) : (
  <p>Loading weather...</p>
  
)}
</Card>

<Card className="shadow-sm border-0 rounded-4 mt-4 p-4" style={{position:"sticky"}}>
  <h5 className="fw-bold mb-3">🛡️ Safety & Travel Advice</h5>

  <hr />

  <h6
    className="fw-bold"
    style={{
      fontSize: "14px",
      color: "#6B7280",
      textTransform: "uppercase",
    }}
  >
    🚆 Transport
  </h6>

  <ul style={{ paddingLeft: "18px" }}>
    {item.safetyAdvice.transport.map((tip, index) => (
      <li
        key={index}
        style={{
          marginBottom: "10px",
          color: "#4B5563",
          fontSize: "14px",
        }}
      >
        {tip}
      </li>
    ))}
  </ul>

  <hr />

  <h6
    className="fw-bold"
    style={{
      fontSize: "14px",
      color: "#6B7280",
      textTransform: "uppercase",
    }}
  >
    🛡️ Local Tips
  </h6>

  <ul style={{ paddingLeft: "18px" }}>
    {item.safetyAdvice.tips.map((tip, index) => (
      <li
        key={index}
        style={{
          marginBottom: "0",
          color: "#4B5563",
          fontSize: "14px",
        }}
      >
        {tip}
      </li>
    ))}
  </ul>
</Card>
   </div>
  </Col>
  
  
   </Row>
   </Container>
   <Footer />
</>
)
}
 
 
    

