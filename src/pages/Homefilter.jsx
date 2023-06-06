import React, { useState } from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import photosdata from '../data/photosdata'
import productsdata from '../data/productsdata'
import { ProductContext } from "../context/ProductContext"
import { useContext } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { useWishlist } from 'react-use-wishlist'

const Homefilter = () => {
    const { addWishlistItem } = useWishlist();
    const [products,setProducts] = useContext(ProductContext)
    const [data,setData] =useState(productsdata.slice(0,4))
    const filterResult = (comingItem)=>{
    const result = products.filter(fd=>{
        return fd.category === comingItem
    })
    setData(result)
  }

  return (
    <>
    <div className='row d-flex ms-4'>
                {photosdata.map(item => (
                    <div className="card" style={{ width: '19rem', border: 'none', borderRadius: 'none' }}>
                        <img src={item.photo} className="card-img-top" alt="..." style={{ 'border-top-left-radius': '0', 'border-top-right-radius': '0' }} />
                        <div className='blackbox'></div>
                        <button >{item.description}</button>
                    </div>

                ))}
            </div>

    <Row className='mt-5'>
                <Col sm={12} md={3} className="text-center bg-colbox">
                    <div className='bg-icon'>
                        <img src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/feature-1.png" alt="" width={50} className="tilt-shaking" />
                    </div><br />
                    <div className='bg-text'>
                        <h5>Amazing Value Every Day</h5>
                        <p>Items prices that fit your budget.</p>
                    </div>
                </Col>
                <Col sm={12} md={3} className="text-center bg-colbox">
                    <div className='bg-icon'>
                        <img src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/feature-2.png" alt="" width={50} />
                    </div><br />
                    <div className='bg-text'>
                        <h5>Free Shipping Over $35*</h5>
                        <p>Popular delivery on 1 - 2 days</p>
                    </div>
                </Col>
                <Col sm={12} md={3} className="text-center bg-colbox">
                    <div className='bg-icon'>
                        <img src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/feature-3.png" alt="" width={50} />
                    </div><br />
                    <div className='bg-text'>
                        <h5>Expert Customer Service</h5>
                        <p>Our team on hand seven days a week.</p>
                    </div>
                </Col>
                <Col sm={12} md={3} className="text-center bg-colbox">
                    <div className='bg-icon'>
                        <img src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/feature-4.png" alt="" width={50} />
                    </div><br />
                    <div className='bg-text'>
                        <h5>Unbeatable Selection</h5>
                        <p>All things home, all in one place.</p>
                    </div>
                </Col>
            </Row>

    <div className='text-center bg-flash-sale'>
                <h1 className='mb-5'>Daily Flash Sale!</h1>
                <div className='d-flex justify-content-center align-items-center'>
                    <p role="button" style={{ "color": "#707070", "fontSize": "16px", 'fontFamily': 'sans-serif' }} 
                    onClick={()=>{filterResult('Furniture')}}>
                        Furniture</p>
                    <p role="button" className='ms-5' style={{ "color": "#707070", "fontSize": "16px", 'fontFamily': 'sans-serif' }} onClick={()=>{filterResult('Decor & Pillows')}} >Decor & Pillows</p>
                    <p role="button" className="ms-5" style={{ "color": "#707070", "fontSize": "16px", 'fontFamily': 'sans-serif' }}  onClick={()=>{filterResult('Appliances')}}>Appliances</p>
                </div>
            </div>

            
                <div className='text-start d-flex flex-wrap container'>
                    {
                        data.map(item=>{
                                return(
                                    <div className="col-12 col-sm-6 col-md-3" key={item.id}>
                                    <div className="cardd" style={{ width: '15rem' }}>
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="product-title mt-2" style={{'color':'#161616','fontSize':'16px','fontFamily':'sans-serif'}}>{item.title}</h6>
                                            <div className='d-flex'>
                                            <h5 style={{color:'#707070'}}><del>{item.discount}</del></h5>&#160;&#160;&#160;
                                            <h5 className="product-text" style={{'color':'#a20401','fontSize':'20px'}}>${item.price}</h5>
                                            </div>
                                            <hr style={{'color':'#707070'}} />
                                            <div className='d-flex justify-content-between'>
                                            <LinkContainer  to={`/shop/${item.id}`} style={{ textDecoration:'none',color:'#707070', marginTop:'2px'}}>
                                            <a role={Button}>+Read More</a>
                                            </LinkContainer>
                                            <div className='d-flex'>
                                            <button onClick={() => addWishlistItem(item)} style={{border:'none',background:'none'}}><i class="bi bi-heart" style={{'color':'#707070','fontSize':'16px'}}></i></button>
                                            <h6 className="mt-1"><i class="fa-solid fa-code-compare"></i></h6>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                )
                            })
                    }
                </div>
            </>
  )
}

export default Homefilter

