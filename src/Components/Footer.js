import styled from "styled-components";


const FooterDiv = styled.footer`
    background: #29293d;
    color: white;
    height: 50px;
    margin: 0px -40px -10px -40px;
    padding: 20px 40px 0px 40px;

    div {
        text-align: center;
    }

    @media screen and (max-width: 45em) {
        font-size: 10px;
    }
`;

const Footer = () => {
    return ( 
        <FooterDiv>
            <div>© 2022 | Designed &amp; coded by Mahmoud Tukur Kabir</div>
        </FooterDiv>
     );
}
 
export default Footer;