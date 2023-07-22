import styled from "styled-components";
import {BsList} from 'react-icons/bs'

const HeaderStyled = styled.div`
    padding: 30px;
    background: #011627;
    height: 80px;
    display: flex;
    /* justify-content:center; */

    .icon {
        font-size: 60px;
        color: #eaecef;
};
`
const HeaderTitle = styled.p`
    color: #eaecef;
    font-size: 40px;
    font-family: 'Lugrasimo', cursive;
`



const Header = () => {
    return (
        <HeaderStyled>
            <HeaderTitle>KangRok's Blog</HeaderTitle>
            <BsList className="icon"/>
        </HeaderStyled>
    );
}

export default Header;