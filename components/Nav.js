import {FiShoppingBag} from 'react-icons/fi';
import {AiTwotoneHome} from 'react-icons/ai'
import{GiHumanPyramid} from 'react-icons/gi'
import { NavStyles,NavItems } from "../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import User from "./User";
import React from "react";
import { useRouter } from "next/router";

const {AnimatePresence, motion} = require('framer-motion')
export default function Nav() {
    const route = useRouter();

  const {showCart,setShowCart,totalQty} = useStateContext()
  return (
       
    <NavStyles>
      <div class = 'logo'><GiHumanPyramid/><p>Generic Pyramid</p></div>
        <NavItems>
          <div><AiTwotoneHome class = 'home' color='gold' onClick={() => route.push(`/`)}/></div>
          <div><p>About</p></div>
          <div><p>Contact</p></div>
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
