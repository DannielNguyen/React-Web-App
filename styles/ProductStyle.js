import styled from "styled-components";

export const ProductStyle = styled.div`
background-color: white;
position:relative;
display:flex;
flex-direction: column;
border-radius: 2rem;
img{
    width: 100%;
    height: 15rem;
    object-fit:cover;
    cursor: pointer;
    border-top-left-radius:1.5rem;
    border-top-right-radius:1.5rem;
}
h2{
    padding: 0.5rem 0rem 0rem 1rem;
}
h3{
    padding: 0rem 1rem 0.5rem 1rem;
}
:hover{
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
transform:translate(2px,-3px);
transition: .5s;
}
`
