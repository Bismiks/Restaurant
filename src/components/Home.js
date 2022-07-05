import React from 'react'
import {useState, useEffect} from 'react'
import { Row , Col  } from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import { useDispatch,useSelector } from "react-redux"
import { listRestaurants } from '../Action/restaurantAction'
function Home() {
 
            const dispatch = useDispatch()

            const hotels = useSelector(state => state.restaurantList)

            const {restaurant} = hotels

            useEffect(() => {
              dispatch(listRestaurants())
            }, [dispatch])
  return (
    <Row>
    {
      restaurant.map(item =>(
        <Col sm={12} md={8} lg={6} xl={3}>
            <RestaurantCard data={item}/> 
            {/* passing data from parent to child {RestaurantCard.js}   */}
        </Col>
      ))
    }
    </Row>
    
  )
}

export default Home


// in return elements must be under single parent <> </>
// hotels data structure is array[obj] for better iteration in this data is Mapping 
// data passing frm parent to child using props or properties
//{/* passing data to child {RestaurantCard.js} */}



 // 1 method for render page fetch data
  // const [hotels,setHotels] = useState([])

  // useEffect(() => {
  // const fetchData = async () =>{
  //   await fetch('/restaurants.json')
  //   .then((res) => res.json())
  //   .then((data) => setHotels(data.restaurants))
  // }  
  // fetchData() 
  // }, [])

 //console.log("hotels is", restaurant);

