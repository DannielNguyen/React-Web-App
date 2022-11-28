import { Context, useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import { DetailsStyle, ProductInfo, Quantity,StyledButton } from '../../styles/ProductDetails';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import {useStateContext} from '../../lib/context'
import { useEffect } from 'react';


const {motion} = require("framer-motion")

export default function ProductDetails() {
    const {Qty,increaseQty,decreaseQty, onAdd,setQty} = useStateContext()
	//reset qty
	useEffect(()=>{
		setQty(1);
	},[])
	//Fetch Graphql data
	const { query } = useRouter();
	console.log(query);
	const [
		result
	] = useQuery({
		query     : GET_PRODUCT_QUERY,
		variables : { slug: query.slug }
	});
	console.log(Qty);
	const { data, fetching, error } = result;
	if (fetching) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;
	//Extract data
	const { title, Description, Image } = data.products.data[0].attributes
	console.log( data.products.data[0].attributes)
	return (
		<DetailsStyle>
			<img src={Image.data.attributes.formats.medium.url} alt="" />
			<ProductInfo>
				<h2>{title}</h2>
				<p>{Description}</p>

				<Quantity>
					<span>Quantity</span>
					<button>
						<AiFillMinusCircle onClick={decreaseQty} />
					</button>
					<p>{Qty}</p>
					<button>
						<AiFillPlusCircle onClick= {increaseQty} />
					</button>
				</Quantity>
				<StyledButton onClick = {() => onAdd(data.products.data[0].attributes,Qty)}>Add to cart</StyledButton>
			</ProductInfo>
		</DetailsStyle>
	);
}
