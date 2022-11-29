import React from 'react';
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from "../lib/query"
import SearchBar from '../components/searchBar'
export default function product() {
  const [results] = useQuery({query: PRODUCT_QUERY})
  const {data, fetching, error} = results
  if (fetching) return <p>Loading your content...</p>
  if (error) return <p>An error has occured: {error.message}</p>
  const products = data.products.data
  return (
    <div>
<div class="text-divider">Our Products</div>
      <SearchBar data = {products}/> 
      
    </div>
  )
}