import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #29293d;
    margin: -10px -40px -10px -40px;
    padding: 20px 40px 20px 40px;
    flex-wrap: wrap;
    position: sticky;
    top: 0;
    opacity: 0.9;
    z-index: 1000;

    @media screen and (max-width: 30em) {
        padding: 10px 10px 10px 10px;
    }

`;

const Logo = styled.div`
    font-weight: 800;
    font-size: 25px;
    color: #0080ff;
    align-self: center;
    margin-left: 80px;
    

    span {
        font-weight: 300;
        font-size: 15px;
    }

    @media screen and (max-width: 60em) {
        margin-left: 20px;
    }

    @media screen and (max-width: 30em) {
        margin-left: 0px;
    }
`;

const Hambuger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    align-self: center;

    span {
        height: 2px;
        width: 25px;
        margin-bottom: 4px;
        background: #67bc67;
        border-radius: 5px;
    }

    @media screen and (max-width: 45em) {
        display: flex;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    align-self: center;
    margin-right: 80px;

    @media screen and (max-width: 60em) {
        margin-right: 20px;
    }
    
    
    @media screen and (max-width: 45em) {
      overflow: hidden;
      flex-direction: column;
      width: 100%;
      max-height: ${({isOpen}) => (isOpen? "300px" : "0")};
    }

    @media screen and (max-width: 30em) {
        margin-right: 0px;
    }
`;

const Menulinks = styled(Link)`
    padding: 15px;
    cursor: pointer;
    text-align: center;
    color: #67bc98;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        color: #00ff80;
        border-bottom: 3px solid #00ff80;
    }

    &.active {
        color: #00ff80;
        border-bottom: 3px solid #00ff80;
    }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <Nav>
            <Logo>MY<span>portfolio</span></Logo>
            <Hambuger onClick={() => setIsOpen(!isOpen)} >
                <span />
                <span />
                <span />
            </Hambuger>
            <Menu isOpen={isOpen} >
                <Menulinks to='/' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setIsOpen(!isOpen)}>Home</Menulinks>
                <Menulinks to='about' spy={true} smooth={true} offset={-120} duration={500} onClick={() => setIsOpen(!isOpen)}>About</Menulinks>
                <Menulinks to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setIsOpen(!isOpen)}>Skills &amp; Tools</Menulinks>
                <Menulinks to='projects' spy={true} smooth={true} offset={-90} duration={500} onClick={() => setIsOpen(!isOpen)}>Projects</Menulinks>
                <Menulinks to='contacts' spy={true} smooth={true} offset={-90} duration={500} onClick={() => setIsOpen(!isOpen)}>Contact</Menulinks>
            </Menu>
        </Nav>
     );
}
 
export default Navbar;