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
`

const Sidebar = () => {
   const navigate = useNavigate();

    return (
      <SideNav className="sidenav active">
         <div className='infomation'>
            <img src={Image} alt=" " />
            <p>Hello World! and You</p>
            <p>KangRok</p>
         </div>
         <div className="search-container">
            <input className="search-bar" type="text" />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
         <ul className="bar">
            <li onClick={() => {navigate('/list')}}>list</li>
            <li onClick={() => {navigate('/블로그 메뉴')}}>블로그 메뉴</li>
            <li onClick={() => {navigate('/인기 글')}}>인기 글</li>
            <li onClick={() => {navigate('/home')}}>home</li>
            <li onClick={() => {navigate('/설정')}}>설정</li>
         </ul>
      </SideNav>
    )
 };

 export default Sidebar;
   