import React from 'react'
import {Card , Button} from "react-bootstrap"
const Car = ({car, handleMessage}) => {
    return (
        <div style={{margin:"8px"}} >
          <Card style={{ width: '24.5rem'  }}>
  <Card.Img variant="top" src={car.imgSrc} />
  <Card.Body>
    <Card.Title> {car.name} </Card.Title>
    <Card.Text>
      {car.price}
    </Card.Text>
    <Button variant="primary" onClick={()=>handleMessage(car.name , car.price)} >Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Car
