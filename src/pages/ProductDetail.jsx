import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Button, Card, Image,} from 'semantic-ui-react'
import ProductService from '../services/productService'


export default function ProductDetail() {
  let { id } = useParams()

  const [product, setProduct] = useState([])

    useEffect(() => {
      let productService = new ProductService()
      productService.getByProductId(id).then(result=>setProduct(result.data))
    }, [])

  return (
    <div>
      
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>{product.category}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
