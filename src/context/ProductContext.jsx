import { createContext, useState } from "react";
import productsdata from "../data/productsdata";


export const ProductContext = createContext()

export const ProductProvider = props =>{
    const [products, setProducts] = useState(productsdata);

   return(
    <ProductContext.Provider value={[products, setProducts]}>
    {props.children}
</ProductContext.Provider>
   )
}