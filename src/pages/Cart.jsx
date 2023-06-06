import Table from 'react-bootstrap/Table';
import { Container,Col, Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { LinkContainer } from 'react-router-bootstrap';

const Cart = () => {
   const {items,updateItemQuantity,removeItem,emptyCart,isEmpty} = useCart();
  return isEmpty ? 
    <div className="text-center mt-5 pt-5">
      <i class="bi bi-cart-plus-fill" style={{fontSize:'120px',color:'#ececec'}}></i>
      <h5 style={{fontFamily:'sans-serif',fontWeight:'600'}}>YOUR CART IS CURRENTLY EMPTY.</h5><br />
      <LinkContainer to='/shop'>
      <Button variant="btn btn-outline-dark">RETURN TO SHOP</Button>
      </LinkContainer>
    </div>
     :(
    <div>
      <h1 className='text-center my-5'>CART</h1>
      <Container>
      <Col>
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>PRODUCT</th>
          <th></th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item,c)=>{
          return <tr key={item.id}>
          <td>{c+1}</td>
          <td><img src={item.image} width={70} alt="" /></td>
          <td>{item.title}</td>
          <td>${item.price *item.quantity}</td>
          <td><Button variant="btn btn-outline-secondary" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
          <span className='mx-2'>{item.quantity}</span>
          <Button variant="btn btn-outline-secondary" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button></td>
          <td><Button variant='btn btn-outline-warning' onClick={()=>{removeItem(item.id)}}>X</Button></td>
        </tr>
        })}
      </tbody>
    </Table>
    <p role={Button} onClick={()=>{emptyCart()}} style={{fontWeight:'600',cursor:'pointer'}}><i class="bi bi-trash-fill"></i>EMPTY CART</p>
      </Col>
      </Container>
    </div>
  )
}

export default Cart