import styled from "styled-components";

export const NavStyles = styled.nav`
min-height: 15vh ;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;
a{
    font-size: 1.2rem;
}
p{
  float:right;
  padding:.5rem;
  line-height: 1rem;
}
svg{
    font-size: 2rem;
    cursor: pointer;
}
div{
    margin-right:0.2rem;
}

`
export const NavItems = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
div{
    margin-left: 3rem;
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
}
h3{
    font-size: 1rem;
    padding: 0.25rem;
}
svg{
    font-size: 1.5rem;
    cursor: pointer;

}
.home{
  font-size:2rem;
  cursor: pointer;
  margin-bottom: 1rem;
}
span{
    background: black;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: .9rem;
    position: absolute;
    right: -1%;
    top: -20%;
    pointer-events: none;
}
.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 5px;
  height: 30px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: black;
}

.searchTerm:focus {
  color: #00B4CC;
}

.searchButton {
  width: 40px;
  height: 30px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  float:left;
}
`