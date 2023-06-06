import React, { useState } from 'react'
import { Container, Button, Modal, Form, InputGroup, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import productsdata from '../data/productsdata'
import { LinkContainer } from 'react-router-bootstrap'
import { useCart } from "react-use-cart";
import { useWishlist } from 'react-use-wishlist'

const HeaderSearch = () => {
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const filterResult =(comingItem)=>{
    const result = productsdata.filter(fd=>{
      return fd.category === comingItem
    })
    setData(result);
}

  return (
    <>
      <Container>
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3">
            <div className="container-fluid">
              <button className="navbar-toggler d-block" style={{ 'border': 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{ 'color': '#a20401' }} />
              </button>
              <NavLink className="navbar-brand ms-5" to="/"><img src="https://mydecor-be87.kxcdn.com/mydecor/wp-content/themes/mydecor/images/logo.png" width={160} alt="" /></NavLink>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                  <li className="nav-item d-flex ms-2">
                    <a className="nav-link active" aria-current="page" href="#" style={{ 'color': '#a20401' }}>Homepages</a>
                    <i class="bi bi-chevron-down" style={{ 'color': '#a20401' }}></i>
                  </li>
                  <LinkContainer to='/shop'>
                  <li className="nav-item d-flex ms-2">
                    <a className="nav-link active" aria-current="page" href="#">Shop</a>
                    <i class="bi bi-chevron-down"></i>
                  </li>
                  </LinkContainer>
                  <li className="nav-item d-flex ms-2">
                    <a className="nav-link active" aria-current="page" href="#">Product</a>
                    <i class="bi bi-chevron-down"></i>
                  </li>
                  <li className="nav-item d-flex ms-2">
                    <a className="nav-link active" aria-current="page" href="#">Blog</a>
                    <i class="bi bi-chevron-down"></i>
                  </li>
                  <li className="nav-item d-flex ms-2">
                    <a className="nav-link active" aria-current="page" href="#">Pages</a>
                    <i class="bi bi-chevron-down"></i>
                  </li>
                  <li className="nav-item ms-2">
                    <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className='icons d-flex'>
                <div>
                  <div role="button" className='searchbox' onClick={handleShow}>
                    <i class="bi bi-search"></i>
                  </div>

                  <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Search For Products</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Search Products"
                          onChange={e => { setValue(e.target.value) 
                          setData(productsdata)
                          }}
                        />
                        <Button variant="secondary">
                          Search
                        </Button>
                      </InputGroup>
                      <Row className='g-5 mt-3'>
                        {data.filter(p=>p.title.toLowerCase().includes(value)).map(item=>{
                          return (
                            <div className="col-12 col-sm-6 col-md-4" key={item.id}>
                                    <div className="cardd" style={{ width: '15rem' }}>
                                        <img src={item.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="product-title mt-2" style={{'color':'#161616','fontSize':'16px','fontFamily':'sans-serif'}}>{item.title}</h6>
                                            <div className='d-flex'>
                                            <h5 style={{color:'#707070'}}><del>{item.discount}</del></h5>&#160;&#160;&#160;
                                            <h5 className="product-text" style={{'color':'#a20401','fontSize':'20px'}}>{item.price}</h5>
                                            </div>
                                            <hr style={{'color':'#707070'}} />
                                            <div className='d-flex justify-content-between'>
                                                <h6 style={{'color':'#707070','fontSize':'16px'}}>+Read more</h6>
                                                <h6><i class="bi bi-heart" style={{'color':'#707070','fontSize':'16px'}}></i><i class="fa-solid fa-code-compare"></i></h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                          )
                        })}

                      </Row>
                    </Modal.Footer>
                  </Modal>

                </div>

                
                <LinkContainer to='/login'>
                  <div className='searchbox ms-2'>
                  <i class="bi bi-person"></i>
                  </div>
                </LinkContainer>

                <div className='count-number text-center'>{totalWishlistItems}</div>
                <LinkContainer to='/wishlist'>
                <div className='searchbox ms-2'>
                  <i class="bi bi-heart"></i>
                </div>
                </LinkContainer>
                
                <div className='cnumber text-center'>{totalItems}</div>
                <LinkContainer to='/cart'>
                <div className='searchbox ms-2'>
                  <i class="bi bi-handbag-fill"></i>
                </div>
                </LinkContainer>
                
              
              </div>
            </div>
          </nav>
        </header>
      </Container>
    </>
  )
}

export default HeaderSearch