import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useWishlist } from 'react-use-wishlist';

const WishList = () => {
  const {items,removeWishlistItem,isWishlistEmpty} = useWishlist();
  return isWishlistEmpty ? 
  <Container className='mt-5 pb-5'>
    <div className='d-flex ms-2'>
    <h5 style={{color:'#707070',fontSize:'13px'}}>Home</h5>
    <span style={{color:'#707070',fontSize:'13px'}} className='ms-2'>{'>'}</span>
    <h5 style={{color:'#707070',fontSize:'13px'}} className='ms-2'>WishList</h5>
    </div>
    <h1 className='my-5'>My Decor</h1>
    <Table>
    <thead>
        <tr>
          <th style={{color:'#707070',fontSize:'16px',fontFamily:'Jost, sans-serif'}}>PRODUCT NAME</th>
          <th></th>
          <th style={{color:'#707070',fontSize:'16px',fontFamily:'Jost, sans-serif'}}>UNIT PRICE</th>
          <th style={{color:'#707070',fontSize:'16px',fontFamily:'Jost, sans-serif'}}>STOCK STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
         <th style={{color:'#707070',fontSize:'16px',fontFamily:'Jost, sans-serif'}}>No products added to the wishlist</th>
         <th></th>
         <th></th>
         <th></th>
         <th></th>
        </tr>
      </tbody>
    </Table>
  </Container> :(
    <div>
      <Container className='mt-5'>
      <Table className='mt-5'>
      <thead>
        <tr>
          <th></th>
          <th style={{color:'#707070',fontSize:'16px',fontFamily:'Jost, sans-serif'}}>PRODUCT NAME</th>
          <th></th>
          <th style={{color:'#707070',fontSize:'16px',fontFamily:'Jost, sans-serif'}}>UNIT PRICE</th>
          <th style={{color:'#707070',fontSize:'16px',fontFamily:'Jost, sans-serif'}}>STOCK STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item,c)=>{
          return <tr key={item.id}>
          <td>{c+1}</td>
          <td><img src={item.image} alt="" width={70} /></td>
          <td>{item.title}</td>
          <td>${item.price}</td>
          <td>{item.status}</td>
          <td>
            <h6 role='button' onClick={()=>{removeWishlistItem(item.id)}}>X</h6>
          </td>
        </tr>
        })}
      </tbody>
    </Table>
      </Container>
    </div>
  )
}

export default WishList