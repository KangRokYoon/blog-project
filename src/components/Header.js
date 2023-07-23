import styled from "styled-components";
import { BsList } from 'react-icons/bs'

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

const IconWrapper = styled.div`
    font-size: 60px;
    color: #eaecef;
`

const Header = () => {
    return (
        <HeaderStyled>
            <IconWrapper>
                <BsList />
            </IconWrapper>
            <HeaderTitle className="title">KangRok's Blog</HeaderTitle>
        </HeaderStyled>
    );
}

export default Header;
