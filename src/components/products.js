import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';
import cardimage1 from '../img/zinc.jpeg'

class Products extends Component{
    render(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardimage1} />
            <Card.Body>
                <Card.Title>Zinc Tablet</Card.Title>
                <Card.Text>
                    Zinc Sulfate Tablets
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        )
    }
}

export default Products;