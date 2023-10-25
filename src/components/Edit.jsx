import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';

function Edit(props) {
    const {oneLyd, getOneLyd, saveLyde} = props
    const [FName, setFName] = useState("")
    const [LName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [numb, setNumb] = useState("")
    const [city, setCity] = useState("")


    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        getOneLyd(params.id)
    }, [])

    useEffect(() => {
        if(oneLyd) {
            setFName(oneLyd.FName)
            setLName(oneLyd.LName)
            setEmail(oneLyd.email)
            setNumb(oneLyd.numb)
            setCity(oneLyd.city)
        }
    }, [oneLyd])

    const handleAdd =(e) => {
        e.preventDefault()
        if(!FName.trim() || !LName.trim() || !email.trim() || !numb.trim() || !city.trim()) {
            alert('заполните все поля')
         return;
        }

        const newLyde = {
            FName, LName, email, numb, city
        }
        saveLyde(params.id, newLyde)
        navigate('/')
    }
  return (
    <Form onSubmit={handleAdd}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={(e) => setFName(e.target.value)} type="text" placeholder="Enter First Name" value={FName}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={(e) => setLName(e.target.value)} type="text" placeholder="Enter Last Name" value={LName}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" value={email}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control onChange={(e) => setNumb(e.target.value)} type="text" placeholder="Number..." value={numb}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={(e) => setCity(e.target.value)} type="text" placeholder="Karakol..." value={city}/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}

export default Edit;