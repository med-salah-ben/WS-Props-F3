import React from 'react'
import {Button} from "react-bootstrap"
import Car from "./Car"
const CarsList = ({cars,testCallBack}) => {

    // console.log(cars)

    const handleMessage = (name,price)=> alert(`you have to pay ${price} to buy ${name}` )

    const name ="test call back function "
    return (
        <div>
        <div style={{display:"flex" , margin:"10px 10%" , border:"2px solid blue"}}>
           {cars.map((car,i)=>(
               
               <Car car={car} key={i}  handleMessage={handleMessage} />
           ))}
           
        </div>
        <Button className="btnCallBack" variant="primary" onClick={()=>testCallBack(name) } > Call Back </Button>
       
        </div>
    )
}

export default CarsList
