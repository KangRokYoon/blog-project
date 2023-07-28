import styled from "styled-components";
import { BsList } from 'react-icons/bs'
import Sidebar from "./Sidebar";
import { useState } from "react";

const HeaderStyled = styled.div`
    padding: 30px;
    background: #011627;
    height: 80px;
    display: flex;
    align-items: center;
`

const HeaderTitle = styled.p`
    color: #eaecef;
    font-size: 40px;
    font-family: 'Lugrasimo', cursive;
    text-align: center;
    margin: 0; /* Remove any default margin to avoid spacing issues */
    flex: 1; /* Allow the title to take the available space and center it */
`
const Loginbutton = styled.div`
    color: #eaecef;
`

const IconWrapper = styled.div`
    font-size: 60px;
    color: #eaecef;
`

const Header = () => {
    const [showNav, setShowNav] =useState(false);
    return (
        <HeaderStyled>
            <IconWrapper>
                <BsList onClick={() => setShowNav(!showNav)}/>
                {showNav && <Sidebar/>}
            </IconWrapper>
            <HeaderTitle className="title">KangRok's Blog</HeaderTitle>
            
            <Loginbutton >로그인</Loginbutton>
        </HeaderStyled>
    );
}

export default Header;
