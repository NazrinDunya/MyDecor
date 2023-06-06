import React, { useContext } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';
import { useStars } from 'stars-rating-react-hooks';
import { GlassMagnifier } from "react-image-magnifiers";
import { useCart } from 'react-use-cart';
import { useWishlist } from "react-use-wishlist";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {
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
  const { addWishlistItem } = useWishlist();
  const { addItem } = useCart();
  const [products, setProducts] = useContext(ProductContext)
  const { url } = useParams();
  const productdetails = products.find(p => p.id === url);
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
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3" style={{ fontSize: '34px' }}>{productdetails.title}</h1>
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
                      onClick: (ratedValue) => {
                        alert(`You just rated ${ratedValue} Stars!!`);
                      }
                    })}
                  >
                    {star}
                  </span>
                ))}
              </span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p style={{ color: '#707070', marginTop: '3px' }}>Status:<span style={{ color: '#009900' }}>{productdetails.status}</span></p>
            </div>
            <div>
              <ul style={{ listStyle: 'none' }} className='d-flex'>
                <li className='me-2'><a href="" style={{ color: 'rgb(0, 0, 128)' }}><i class="bi bi-facebook"></i></a></li>
                <li className='me-2'><a href=""><i class="bi bi-twitter"></i></a></li>
                <li className='me-2'><a href="" style={{ color: '#cb2027' }}><i class="bi bi-pinterest"></i></a></li>
                <li><a href="" style={{ color: '#0073b1' }}><i class="bi bi-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <h5 style={{ fontWeight: '600' }}>Product Details</h5>
          <ul>
            <li style={{ fontSize: '16px', color: '#707070' }}>{productdetails.detail1}</li>
            <li style={{ fontSize: '16px', color: '#707070' }}>{productdetails.detail2}</li>
            <li style={{ fontSize: '16px', color: '#707070' }}>{productdetails.detail3}</li>
          </ul>
          <h5 style={{ color: '#707070' }}><del>{productdetails.discount}</del></h5>
          <p className="lead" style={{ fontWeight: '600', fontSize: '30px' }}>${productdetails.price}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <LinkContainer to='/shop'>
              <button type="button" className="btn btn-secondary btn-lg px-4 me-md-2">Back</button>
            </LinkContainer>
            <button type="button" className='ps-3 pe-3' style={{ color: 'white', backgroundColor: '#707070', border: 'none', borderRadius: '5px' }} onClick={() => { notify(addItem(productdetails)) }}>+ADD TO CART</button>
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
            <button type="button" className='ps-4 pe-4 ms-2' style={{ color: '#707070', backgroundColor: 'white', border: '1px solid #707070', borderRadius: '5px' }}>BUY NOW</button>
          </div><br />
          <div className='d-flex'>
            <button type='button' className='heart-wish' onClick={() => { addWishlistItem(productdetails) }} style={{ background: 'none', border: 'none', color: '#707070', fontSize: '13px' }}><i class="bi bi-heart"></i> Wishlist</button>
            <h6 className="mt-2 ms-5" style={{ color: '#707070', fontSize: '14px' }}><i class="fa-solid fa-code-compare"></i> Compare</h6>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <GlassMagnifier imageSrc={productdetails.image} imageAlt="Example" />
        </div>
      </div>
    </div>

  )
}

export default ProductDetails