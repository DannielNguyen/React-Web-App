import { useStateContext } from '../lib/context';
import { CartWrapper, CartStyle,Card,CardInfo,EmptyStyle,Checkout,Cards } from '../styles/cartStyles';
import {FiShoppingCart} from 'react-icons/fi';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { Quantity } from '../styles/ProductDetails';
import getStripe from '../lib/getStripe';
const card = {
	hidden: {opacity: 0, scale: 0.8},
	show:{ opacity:1, scale:1},
}
const cards = {
	hidden: {opacity: 1},
	show:{
		opacity: 1,
		transition:{
			delayChildren:0.3,
			staggerChildren:0.1,
		}
	}
}

export default function Cart() {
	const { cartItems,setShowCart, onAdd, onRemove, totalPrice} = useStateContext();
	//payment
const handleCheckout = async () =>{
	const stripe = await getStripe()
	const response = await fetch("/api/stripe",{
		method: "POST",
		headers: {"Content-Type" : "application/json"},
		body: JSON.stringify(cartItems)
	})

const data = await response.json()
await stripe.redirectToCheckout({sessionId: data.id})
}
	return (
		<CartWrapper onClick={()=> setShowCart(false)}>
			<CartStyle initial = {{x:"70%"}} animate={{x:"0%"}} exit = {{x:"75%"}} transition = {{ type: "tween"}}onClick={(e)=>e.stopPropagation()}>
				{cartItems.length < 1 && (
					<EmptyStyle initial = {{opacity:0, scale:0.8}} animate = {{opacity: 1, scale:1}} transition = {{delay: 0.2}}>
						<h1>Your cart is empty 😳</h1>
           <FiShoppingCart />
        
					</EmptyStyle>
				)}
				<Cards layout variants={cards} initial = "hidden" animate = "show" >
				{cartItems.length >= 1 &&
					cartItems.map((item) => {
						return (
							<Card layout variants={card} key = {item.slug}>
								<img src={item.Image.data.attributes.formats.thumbnail.url} alt={item.title} />
								<CardInfo>
									<h3>{item.title}</h3>
									<h3>${item.Price}</h3>
									<Quantity>
										<span>Quantity</span>
										<button  onClick={() => onRemove(item)}>
											<AiFillMinusCircle />
											</button>
										

										<p>{item.quantity}</p>
										<button onClick={() => onAdd(item,1)}>
										<AiFillPlusCircle />
										</button>

										
									</Quantity>
								</CardInfo>
							</Card>
						);
					})}
					</Cards>
					{cartItems.length >= 1 && (
						<Checkout layout>
							<h3>Subtotal:{totalPrice}</h3>
							<button id = 'checkout' onClick ={handleCheckout}>Purchase</button>
						</Checkout>
							
						
					)}
			</CartStyle>
		</CartWrapper>
	);
}
