import React, {useState} from 'react'
import { SearchStyle } from '../styles/ProductDetails';
import Product from '../components/Products'
import { Gallery } from '../styles/Gallery'

export default function SearchBar({data}){
    const [filterData, setfilterData] = useState(data);

  const handleFilter = (e) => {

  const searchInput = e.target.value;
  const newFilter = data.filter((product) =>{
    return product.attributes.title.toLowerCase().includes(searchInput.toLowerCase())
  });
  setfilterData(newFilter)

};

return(
    <div>
<SearchStyle type="search"
   placeholder="Search anything! (not really)"
   onChange={handleFilter}/>
    
   

   {filterData.length != 0 && (
     <Gallery>
        {filterData.map(prod =>
         <Product key = {prod.attributes.Slug} product = {prod}/>)}

      </Gallery>)
      }
      </div>


    )
}