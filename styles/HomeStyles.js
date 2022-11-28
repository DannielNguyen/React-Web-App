import styled from "styled-components";
const {motion} = require("framer-motion")

export const HomeStyle = styled(motion.div)`
display:flex;
align-items: center;
justify-content: center;
background: url(https://res.cloudinary.com/danielcloud1999/image/upload/v1669607128/samples/276952082_670967334173131_2235410104821261358_n_qrkgig.jpg?fbclid=IwAR2BmFA6HLwJZdKdlA4MM6ZWEWYD_hXbI5Qkwb3dnzMNfIQPdcWGWnsAQ40) no-repeat;
background-position: center;
background-size: cover;
padding-top:20rem;
padding-bottom:20rem;
margin-left:-10rem;
margin-right:-4rem;
margin-bottom:4rem;
font-size:40px;
h1{
    position: absolute;
    align-items: center;
    top:19%;
    left:33%;
}
button{
    position:absolute;
    top:28%;
    left: 43%;
 background:transparent;
    border: 2px solid black;
    padding: 1rem 2rem;
    width: 15%;
    color: black;
    margin-top: 2rem;
    cursor: pointer;
    border-radius: .4rem;
    font-size: 20px;
   
}
button:hover {
  background: black;
  color: white;
}
`