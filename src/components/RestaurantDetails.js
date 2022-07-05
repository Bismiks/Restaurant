import React from 'react'
//import { useState, useEffect } from 'react'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import  Rating from './Rating'
function RestaurantDetails() {
 // const [restaurant, setRestaurant] = useState([])
  const { id } = useParams()

  const detailsPage = useSelector(state => state.restaurantList)

  const { restaurant } = detailsPage

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch('/restaurants.json')
  //       .then((res) => res.json())
  //       .then((data) => setRestaurant(data.restaurants))
  //   }

  //   fetchData();
  // }, [])

  const details = restaurant.find((i) => i.id == id)
  console.log('details is ', details);

  return (
    <>
      <Link className='btn btn-outline-dark my-2 rounded btn-sm' to="/">Back</Link>
      
      {details ? (
        <Row className="my-3">
          <Col md={3}>
            <Image className='img' src={details.photograph} alt={details.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup.Item>
              <h1>{details.name}</h1>
              <p>{details.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Cuisine:{details.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Address:{details.address}</p>
            </ListGroup.Item>
          </Col>

          <Col md={4}>
            <ListGroup.Item>
              <h4>Operating Hour's</h4>
              <p>Monday:{details.operating_hours.Monday}</p>
              <p>Tuesday:{details.operating_hours.Tuesday}</p>  
              <p>Wednesday:{details.operating_hours.Wednesday}</p>
              <p>Thursday:{details.operating_hours.Thursday}</p>
              <p>Friday:{details.operating_hours.Friday}</p>  
              <p>Saturday:{details.operating_hours.Saturday}</p>
              
            </ListGroup.Item>
          </Col>

            <Row>
              <Card>
                <Rating data={details.reviews} />
                </Card>
            </Row>
        </Row>
       

      ) : "null"}
    </>
  )
}

export default RestaurantDetails

// ternary op - also error handling method