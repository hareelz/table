import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

function GridComplexExample(props) {
    const {addLyde} = props
    const [FName, setFName] = useState("")
    const [LName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [numb, setNumb] = useState("")
    const [city, setCity] = useState("")
    const navigate = useNavigate()
    const handleAdd =(e) => {
        e.preventDefault()
        if(!FName.trim() || !LName.trim() || !email.trim() || !numb.trim() || !city.trim()) {
            alert('заполните все поля')
         return;
        }

        const newLyde = {
            FName, LName, email, numb, city
        }
        addLyde(newLyde)
        navigate('/')
    }
  return (
    <Form onSubmit={handleAdd}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={(e) => setFName(e.target.value)} type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={(e) => setLName(e.target.value)} type="text" placeholder="Enter Last Name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control onChange={(e) => setNumb(e.target.value)} type="text" placeholder="Number..." />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={(e) => setCity(e.target.value)} type="text" placeholder="Karakol..."/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Return
      </Button>
    </Form>
  );
}

export default GridComplexExample;