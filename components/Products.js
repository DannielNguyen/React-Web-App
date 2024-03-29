import { ProductStyle } from '../styles/ProductStyle'
import Link from 'next/link'
export default function Product({product}) {
  const {title, Price, Image,Slug} = product.attributes
  return (
    <ProductStyle>
      <Link href = {`product/${Slug}`}>
        <div>
            <img src={Image.data.attributes.formats.small.url} alt="" />
        </div>
        </Link>
        <h2>{title}</h2>
        <h3>${Price}</h3>

    </ProductStyle>
  )
}
