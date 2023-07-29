import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "../assets/image.png"

const SideNav = styled.div`
    width: 240px;
    background: gray;
    position: absolute;
    height: 95vh;
    padding: 0 30px;
    transition: all 1s;
    left:0;
`
const Ul = styled.ul`
    padding: 0;
`

const Li= styled.li`
    list-style-type: none;
    margin: 10px 0;
    color: #eaecef;
    text-decoration: none;
    font-size: 16px;
    display: block;
    padding: 10px 15px;
    border-radius: 6px;
`
const Infomation = styled.div`
   width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 0;
    text-align: center;
    padding: 20px;

    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      margin: auto;
      margin-top: 10px;
    }

    p {
    color: white;
}
`
const Searchcontainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 10px;

   input {
      width: 150px;
      height: 5px;  
      border-radius: 10px; 
      border: none;
      width: 100% ;
      padding: 30px;
   }

   i {
      position: absolute; 
      padding: 10px;
   }
`

const Sidebar = () => {
   const navigate = useNavigate();

    return (
      <SideNav>
         <Infomation>
            <img src={Image} alt=" " />
            <p>Hello World! and You</p>
            <p>KangRok</p>
         </Infomation>
         <Searchcontainer>
            <input type="text" />
            <i class="fa-solid fa-magnifying-glass"></i>
        </Searchcontainer>
         <Ul>
            <Li onClick={() => {navigate('/list')}}>list</Li>
            <Li onClick={() => {navigate('/블로그 메뉴')}}>블로그 메뉴</Li>
            <Li onClick={() => {navigate('/인기 글')}}>인기 글</Li>
            <Li onClick={() => {navigate('/home')}}>home</Li>
            <Li onClick={() => {navigate('/설정')}}>설정</Li>
         </Ul>
      </SideNav>
    )
 };

 export default Sidebar;
   