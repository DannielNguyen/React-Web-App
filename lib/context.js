import { createContext,useContext,useState } from "react";

const ShopContext = createContext()
export const StateContext = ({children}) => {
    
    const  [showCart, setShowCart] = useState(false)
    const  [cartItems, setcartItems] = useState([])
    const  [Qty, setQty] = useState(1)
    const  [totalQty, setTotalQty] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)


    const increaseQty = () => { 
        setQty(prevQty =>  prevQty + 1 )
     }
      const decreaseQty = () => { 
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1
            return prevQty - 1 
         })
     }
     //add Items
     const onAdd = (product,quantity) =>{
        setTotalQty((prevTotalQty) => prevTotalQty + quantity)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.Price * quantity)
        const exist = cartItems.find((item) => item.Slug === product.Slug)
        if (exist){
            setcartItems(cartItems.map((item) => item.Slug === product.Slug ? {...exist,quantity: exist.quantity + quantity}: item))
        }
     else {
        setcartItems([...cartItems,{...product, quantity: quantity}])
     }}
     const onRemove = (product) =>{
                setTotalQty((prevTotalQty) => prevTotalQty - 1)
                        setTotalPrice((prevTotalPrice) => prevTotalPrice - product.Price)


        const exist = cartItems.find(item => item.Slug === product.Slug)
        if (exist.quantity === 1){
            setcartItems(cartItems.filter(item => item.Slug !== product.Slug))
                }
        else {
        setcartItems(cartItems.map((item) => item.Slug === product.Slug ? {...exist,quantity: exist.quantity - 1}: item))
        
     }
    }
    return(
        <ShopContext.Provider value = {{Qty,setQty,increaseQty,decreaseQty,showCart,setShowCart,cartItems,setcartItems,onAdd,onRemove,totalQty,totalPrice}}>
            {children}
        </ShopContext.Provider>
    )
}
export const useStateContext = () => useContext(ShopContext);
