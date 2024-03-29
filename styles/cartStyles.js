import styled from "styled-components";
const {motion} = require("framer-motion")
export const CartWrapper = styled(motion.div)`
    position:fixed;
    top:0;
    right:0;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.4);
    z-index: 120;
    display: flex;
    justify-content: flex-end;
    //display:none;

`;
export const CartStyle = styled(motion.div)`
width: 35%;
background: white;
padding: 2rem 2rem;
overflow-y:scroll;
position: relative;
`;
export const Card = styled(motion.div)`
display:flex;
align-items:center;
justify-content:space-between;
border-radius: 1rem;
border:2px solid black;
overflow:hidden;
background: white;
padding: 2rem;
margin: 2rem 0rem;
img {
    width: 8rem;
}
`; 

export const CardInfo = styled(motion.div)`
width: 50%;
div{
    display:flex;
    flex-direction:space-between;
}`
export const EmptyStyle = styled(motion.div)`
  /* For the empty cart */
  position: absolute;
  top: 0;
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  svg {
    font-size: 8rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  button {
    background:white;
    border: 2px solid black;
    padding: 1rem 2rem;
    width: 100%;
    color: black;
    margin-top: 2rem;
    cursor: pointer;
    border-radius: .4rem;
    font-size: 20px;
  }
  p{
    margin-right: 5rem;
  }
`;
export const Cards = styled(motion.div)``;
