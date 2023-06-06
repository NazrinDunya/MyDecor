import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import data from '../data/photosdata'
import products from '../data/products'

const ListSt = ({ display }) => {

    return (
        <>
            <h1 className={display}>
                <div className='text-start d-flex flex-wrap container'>
                    {
                        products
                            .filter(products => products.id === "Furniture")
                            .map(products =>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="cardd" style={{ width: '15rem' }}>
                                        <img src={products.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="product-title mt-2" style={{'color':'#161616','font-size':'16px','fontFamily':'sans-serif'}}>{products.title}</h6>
                                            <h5 className="product-text mt-3" style={{'color':'#000','font-size':'20px'}}>{products.price}</h5>
                                            <hr style={{'color':'#707070'}} />
                                            <div className='d-flex justify-content-between'>
                                                <h6 style={{'color':'#707070','font-size':'16px'}}>+Read more</h6>
                                                <h6><i class="bi bi-heart" style={{'color':'#707070','font-size':'16px'}}></i><i class="fa-solid fa-code-compare"></i></h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                    }
                </div>
            </h1>
        </>

    )

}

const ListNd = ({ display }) => {
    return (
        <>
            <h1 className={display}>
                <div className='text-start d-flex flex-wrap container'>
                    {
                        products
                            .filter(products => products.id === "Decor & Pillows")
                            .map(products =>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="cardd" style={{ width: '15rem' }}>
                                        <img src={products.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="product-title mt-2" style={{'color':'#161616','font-size':'16px','fontFamily':'sans-serif'}}>{products.title}</h6>
                                            <h5 className="product-text mt-3" style={{'color':'#000','font-size':'20px'}}>{products.price}</h5>
                                            <hr style={{'color':'#707070'}} />
                                            <div className='d-flex justify-content-between'>
                                                <h6 style={{'color':'#707070','font-size':'16px'}}>+Read more</h6>
                                                <h6><i class="bi bi-heart" style={{'color':'#707070','font-size':'16px'}}></i><i class="fa-solid fa-code-compare"></i></h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                    }
                </div>
            </h1>
        </>
    )
}

const ListRd = ({ display }) => {
    return (
        <>
            <h1 className={display}>
                <div className='text-start d-flex flex-wrap container'>
                    {
                        products
                            .filter(products => products.id === "Appliances")
                            .map(products =>
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div className="cardd" style={{ width: '15rem' }}>
                                        <img src={products.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="product-title mt-2" style={{'color':'#161616','font-size':'16px','fontFamily':'sans-serif'}}>{products.title}</h6>
                                            <h5 className="product-text mt-3" style={{'color':'#000','font-size':'20px'}}>{products.price}</h5>
                                            <hr style={{'color':'#707070'}} />
                                            <div className='d-flex justify-content-between'>
                                                <h6 style={{'color':'#707070','font-size':'16px'}}>+Read more</h6>
                                                <h6><i class="bi bi-heart" style={{'color':'#707070','font-size':'16px'}}></i><i class="fa-solid fa-code-compare"></i></h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>)
                    }
                </div>
            </h1>
        </>
    )
}

const Home = () => {
    const [first, setFirst] = useState('d-block')
    const [table, settable] = useState('d-none')
    const [sofa, setsofa] = useState('d-none')
    return (
        <>
            <div className='row d-flex ms-4'>
                {data.map(item => (
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
                    <p style={{ "color": "#707070", "font-size": "16px", 'fontFamily': 'sans-serif' }} role={"button"} onClick={() => {
                        setFirst('d-block')
                        settable('d-none')
                        setsofa('d-none')
                    }}>Furniture</p>
                    <p className='ms-5' style={{ "color": "#707070", "font-size": "16px", 'fontFamily': 'sans-serif' }} role={"button"} onClick={() => {
                        setFirst('d-none')
                        settable('d-none')
                        setsofa('d-block')
                    }}>Decor & Pillows</p>
                    <p className="ms-5" style={{ "color": "#707070", "font-size": "16px", 'fontFamily': 'sans-serif' }} role={"button"} onClick={() => {
                        setFirst('d-none')
                        settable('d-block')
                        setsofa('d-none')
                    }}>Appliances</p>
                </div>
                <>
                    <ListSt display={first} />
                    <ListNd display={sofa} />
                    <ListRd display={table} />
                </>
            </div>
        </>
    )
}

export default Home