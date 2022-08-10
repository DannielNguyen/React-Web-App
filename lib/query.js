export const PRODUCT_QUERY = `query{
  products{
    data{
      attributes
      {
        title
        Price
        Description
        Slug
        Image{
          data{
            attributes{
              formats
            }
          }
        }
        
      }
    }
  }
}
`;
export const GET_PRODUCT_QUERY =`
query getProduct($slug: String!){
  products(filters: {Slug: {eq: $slug}}){
    data{
      attributes{
        title,
        Slug,
        Description,
        Price,
        Image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`