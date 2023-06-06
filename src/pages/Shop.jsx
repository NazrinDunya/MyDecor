import React, { useContext, useState } from 'react'
import SingleCard from '../components/SingleCard'
import { ProductContext } from '../context/ProductContext'

const Shop = () => {
    const [products,setProducts] = useContext(ProductContext)
    const [data,setData] =useState(products.slice(0,4))
   const filterResult = (comingItem)=>{
    const result = products.filter(fd=>{
        return fd.category === comingItem
    })
    setData(result)
  }
  
    return (
        <>
        <div className='text-center bg-flash-sale'>
                <h1 className='mb-5'>Daily Flash Sale!</h1>
                <div className='d-flex justify-content-center align-items-center'>
                    <p role="button" style={{ "color": "#707070", "fontSize": "16px", 'fontFamily': 'sans-serif' }} 
                    onClick={()=>{filterResult('Furniture')}}>
                        Furniture
                        </p>
                    <p role="button" className='ms-5' style={{ "color": "#707070", "fontSize": "16px", 'fontFamily': 'sans-serif' }} onClick={()=>{filterResult('Decor & Pillows')}} >Decor & Pillows</p>
                    <p role="button" className="ms-5" style={{ "color": "#707070", "fontSize": "16px", 'fontFamily': 'sans-serif' }}  onClick={()=>{filterResult('Appliances')}}>Appliances</p>
                </div>
            </div>

            <div className='text-start d-flex flex-wrap container'>
            {data.map(item=>{
            return <SingleCard key={item.id} 
            id={item.id} 
            status={item.status}
            detail1={item.detail1}
            detail2={item.detail2}
            detail3={item.detail3}
            title={item.title} 
            price={item.price} 
            image={item.image} 
            discount={item.discount} 
            alldata={item} 
            oneitem={item}/>
        })}
                </div>
        </>
    )
}

export default Shop