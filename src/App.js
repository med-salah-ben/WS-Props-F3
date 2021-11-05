import PropTypes from "prop-types";
import ClasseS from "./assets/ClasseS.jpg"
import Porsche from "./assets/Porsche.jpg";
import bugatti from "./assets/bugatti.jpeg";
import './App.css';
import CarsList from "./Components/CarsList";
import {Nav, Navbar , Container} from "react-bootstrap"

function App({name,price,imgSrc}) {

  const products = [
    {
      name:"911 Carrera",
      price:"609 000 DT",
      imgSrc:Porsche
    },
    {
      name : "bugatti veyron",
      price :"1 000 000 DT",
      imgSrc :bugatti
    },
    {
      name:"mercedes classe s",
      price:"700 000 DT",
      imgSrc: ClasseS
    },

  ]

  const testCallBack = name => alert(`Hi ${name}`)

  return (
    <div >
      <Navbar style={{width:"100%"}} bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
     <CarsList cars={products} testCallBack={testCallBack} />
    </div>
  );
} 

App.defaultProps = {
  name : "car",
  price:"x",
  imgSrc:"https://tunisiancars.tn/wp-content/uploads/2021/01/DSC_0421-1200x675.jpg"
}

App.propTypes = {
  name : PropTypes.string
}

export default App;

