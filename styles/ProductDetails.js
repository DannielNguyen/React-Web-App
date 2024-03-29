import styled from 'styled-components';

export const DetailsStyle = styled.div`
display: flex;
justify-content:inline;
margin-top: 3rem;
img{
    width:40%;
    border: 2px solid white;
    margin-right: 5rem;
    margin-left: 5rem;
}
`
export const ProductInfo = styled.div`
width: 40%;
button{
    font-size:1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
}`
export const Quantity = styled.div`
display: flex;
align-items: center;
margin: 1rem 0rem;
button{
    background: transparent;
    border: none;
    display: flex;
    font-size:1.5rem;
    padding: 0rem 0.4rem;

}
p{
    width:1rem;
    text-align: center;
}
span{
    color: var(--secondary);
}
svg{
    color: #494949;
}
`
export const StyledButton = styled.button`
width:100%;
background: var(--primary);
color:white;
font-weight:500;
border-radius: .4rem;
border:none;
`

export const SearchStyle = styled.input`
height: 50px;
width: 25%;
padding: 2px;
  font-size: 17px;
  border:1px solid black;
  border-radius: 25px;

`