import { Button } from "bootstrap"
import { Modal } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap"
import { ProductContext } from "../context/ProductContext"
import { useContext, useState } from "react"
import { useCart } from 'react-use-cart';
import { useWishlist } from "react-use-wishlist"
import { useStars } from 'stars-rating-react-hooks';
import { GlassMagnifier } from "react-image-magnifiers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleCard = ({ image, title, price, discount, id, alldata, oneitem,status,detail1,detail2,detail3 }) => {
  const notify = () => toast.success('Item added to your cart!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addWishlistItem } = useWishlist();
  const [products, setProducts] = useContext(ProductContext)
  const { addItem } = useCart();
  const config = {
    totalStars: 5,
    initialSelectedValue: 2,
    renderFull: "★",
    renderEmpty: "☆"
  };

  const {
    stars,
    getStarProps,
    getStarWrapperProps,
  } = useStars(config);
  return (
    <div className="col-12 col-sm-6 col-md-3" key={id} >
      <div className="cardd" style={{ width: '15rem' }}>
        <img src={image} className="card-img-top" alt="..." />
        <LinkContainer to={`/shop/${id}`}>
        <div role='button' className="product-group text-center">
        </div>
        </LinkContainer>
          <div role="button"onClick={handleShow} className="product-group-button">
            <button>Quick view</button>
          </div>
          <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3" style={{fontSize:'34px'}}>{title}</h1>
      <div className='d-flex justify-content-between'>
      <div className='d-flex justify-content-between'>
      <p><span
        {...getStarWrapperProps({
          style: {
            cursor: "pointer"
          }
        })}
      >
        {stars?.map((star, i) => (
          <span
            key={i}
            {...getStarProps(i, {
              style: {
                fontSize: "20px",
                color: "gold"
              },
              onClick: ( ratedValue) => {
                alert(`You just rated ${ratedValue} Stars!!`);
              }
            })}
          >
            {star}
          </span>
        ))}
      </span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <p style={{color:'#707070',marginTop:'3px'}}>Status:<span style={{color:'#009900'}}>{status}</span></p>
      </div>
      <div>
        <ul style={{listStyle:'none'}} className='d-flex'>
          <li className='me-2'><a href="" style={{color:'rgb(0, 0, 128)'}}><i class="bi bi-facebook"></i></a></li>
          <li className='me-2'><a href=""><i class="bi bi-twitter"></i></a></li>
          <li className='me-2'><a href="" style={{color:'#cb2027'}}><i class="bi bi-pinterest"></i></a></li>
          <li><a href="" style={{color:'#0073b1'}}><i class="bi bi-linkedin"></i></a></li>
        </ul>
      </div>
      </div>
      <h5 style={{fontWeight:'600'}}>Product Details</h5>
      <ul>
        <li style={{fontSize:'16px',color:'#707070'}}>{detail1}</li>
        <li style={{fontSize:'16px',color:'#707070'}}>{detail2}</li>
        <li style={{fontSize:'16px',color:'#707070'}}>{detail3}</li>
      </ul>
      <h5 style={{color:'#707070'}}><del>{discount}</del></h5>
      <p className="lead" style={{fontWeight:'600',fontSize:'30px'}}>${price}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" onClick={handleClose} className="btn btn-secondary btn-lg px-4 me-md-2">Back</button>
        <button type="button" className='ps-3 pe-3' style={{color:'white',backgroundColor:'#707070',border:'none',borderRadius:'5px'}} onClick={() => { notify(addItem(alldata)) }}>+ADD TO CART</button>
        <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
        <button type="button" className='ps-4 pe-4 ms-2' style={{color:'#707070',backgroundColor:'white',border:'1px solid #707070',borderRadius:'5px'}}>BUY NOW</button>
      </div><br />
      <div className='d-flex'>
      <button type='button' className='heart-wish' onClick={()=>{addWishlistItem(oneitem)}} style={{background:'none',border:'none',color:'#707070',fontSize:'13px'}}><i class="bi bi-heart"></i> Wishlist</button>
      <h6 className="mt-2 ms-5" style={{color:'#707070',fontSize:'14px'}}><i class="fa-solid fa-code-compare"></i> Compare</h6>
      </div>
    </div>
    <div className="col-10 col-sm-8 col-lg-6">
    <GlassMagnifier imageSrc={image} imageAlt="Example"/>
    </div>
  </div>
</div>
        </Modal.Body>
        </Modal>

        <div className="card-body">
          <h6 className="product-title mt-2" style={{ 'color': '#161616', 'fontSize': '16px', 'fontFamily': 'sans-serif' }}>{title}</h6>
          <div className='d-flex'>
            <h5 style={{ color: '#707070' }}><del>{discount}</del></h5>&#160;&#160;&#160;
            <h5 className="product-text" style={{ 'color': '#a20401', 'fontSize': '20px' }}>${price}</h5>
          </div>
          <hr style={{ 'color': '#707070' }} />
          <div className='d-flex justify-content-between'>
            <button style={{ background: 'none', border: 'none', color: '#707070' }} onClick={() => { notify(addItem(alldata)) }}>+Add to cart</button>
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div className="d-flex">
            <button onClick={() => addWishlistItem(oneitem)} style={{ border: 'none', background: 'none' }}><i class="bi bi-heart" style={{ 'color': '#707070', 'fontSize': '16px' }}></i></button>
            <h6 className="mt-1"><i class="fa-solid fa-code-compare"></i></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard