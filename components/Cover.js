import { HomeStyle } from "../styles/HomeStyles";
import { StyledButton } from "../styles/ProductDetails";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Cover() {
    return(
        <HomeStyle >
            <motion.h1 initial = {{opacity:0}} animate = {{opacity: 1,y:'3px'}} transition = {{duration:1}}>D I S C O V E R &nbsp; Y O U R &nbsp; T A L E N T</motion.h1>
            <Link href = '/product'><button>View Courses</button></Link>
        </HomeStyle>
            
    )
}