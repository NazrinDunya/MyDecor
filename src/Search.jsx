import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Container,Button,  Form, InputGroup,Card,Row,Col } from 'react-bootstrap';

const Search = () => {
    const [value,setValue] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setData(res.data))
    }, [])

    const filterResult =(comingItem)=>{
        const result = data.filter(fd=>{
          return fd.category === comingItem
        })
        setData(result);
    }
    return (
        <>
            
            <Container>
            <InputGroup className="mb-3 mb-5">
                <Form.Control
                    placeholder="Search Products"
                    onChange={e => { setValue(e.target.value) }}
                />
                <Button variant="secondary">
                    Search
                </Button>
            </InputGroup>
            </Container>

            <Row className='g-5 mt-3'>
      {data.filter(p=>p.name.toLocaleLowerCase().includes(value)).map(item=>{
              return  <Col key={item.id} sm={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.email}
                  </Card.Text>
                </Card.Body>
              </Card>
        </Col>
            })}
      
      </Row>
        </>
    )
}

export default Search