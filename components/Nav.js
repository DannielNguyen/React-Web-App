import Link from "next/link";
import {FiShoppingBag} from 'react-icons/fi';
import { NavStyles,NavItems } from "../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
const {AnimatePresence, motion} = require('framer-motion')
export default function Nav() {
  const {showCart,setShowCart,totalQty} = useStateContext()
  return (
    <NavStyles>
        <Link href={'/'}>Styled.</Link>
        <NavItems>
          <User />
            <div onClick={()=> setShowCart(true)}>
              {totalQty > 0 && <motion.span animate = {{scale:1}} initial = {{scale: 0}}>{totalQty}</motion.span> }
            <FiShoppingBag />
            <h3>Cart</h3>
            </div>
           </NavItems>
           <AnimatePresence>{showCart&& <Cart />}
</AnimatePresence>
        </NavStyles>
   
  )
}
