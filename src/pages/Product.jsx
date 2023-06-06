import axios from 'axios'
import {useState,useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard';
const Product = () => {

    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>setData(res.data))
    },[])
    
    
  return (
    <>
    <h1 className='text-center'>Product List</h1>
       <Container>
            <Row className="g-5">
            {data.map(item=>(
            <SingleCard title={item.title} description={item.description} image={item.image}/>
        ))}
            </Row>
        </Container>
    
    </>
  )
}

export default Product