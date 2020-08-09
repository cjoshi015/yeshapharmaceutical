import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';

class Products extends Component{
    render(){
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder./img/zinc.jpeg" />
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