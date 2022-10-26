import styled from "styled-components";
import linkedin_icon from "./Images/linkedin_icon.png";
import mail_icon from "./Images/mail_icon.png";
import github_icon from "./Images/github_icon.png";


const Maindiv = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 10px -40px -10px -40px;
    padding: 20px 40px 20px 40px;
    color: whitesmoke;
    background: #67bc98;
    /* flex-shrink: 0; */
	background-size: max-content; 

    @media screen and (max-width: 30em) {
        padding: 10px 10px 10px 10px;
    }
`;

const Div1 = styled.div`
    font-weight: 500;
    font-size: 70px;
    margin-top: 20px;
    margin-left: 80px;
    margin-right: 50px;

    @media screen and (max-width: 60em) {
        margin-left: 20px;
        margin-right: 20px;
    }

    @media screen and (max-width: 30em) {
        margin: 0px;
        font-weight: 400;
        font-size: 30px;
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 80px;
    margin-right: 50px;
    

    img {
        height: 40px;
        padding-right: 20px;
        cursor: pointer;
        filter: opacity(0.4) drop-shadow(0 0 0 #0080ff);

        &:hover {
            filter: opacity(0.9) drop-shadow(0 0 0 white);
        }
    }

    @media screen and (max-width: 60em) {
        margin-left: 20px;
        margin-right: 20px;
    }

    @media screen and (max-width: 30em) {
        margin-left: 0px;

        img {
            height: 20px;
            padding-right: 10px;
        }
    }
`;

const Div2 = styled.div`
    font-weight: 200;
    font-size: 20px;
    margin-left: 80px;

    p {
        line-height: 15px;
    }

    @media screen and (max-width: 60em) {
        margin-left: 20px;
    }

    @media screen and (max-width: 30em) {
        margin-left: 0px;
        font-size: 10px;
    }

`;

const Home = () => {
    return ( 
        <Maindiv id="/">
            <Div1>Hi, I'm Mahmoud!</Div1>
            <Div1>A Frontend Developer</Div1>
            <Logo>
                <a href="https://www.linkedin.com/in/mahmoud-kabir-phd-34261a160" target="_blank" rel="noopener noreferrer"><img src={linkedin_icon} alt=""/></a>
                <a href="https://github.com/mtukur24" target="_blank" rel="noopener noreferrer"><img src={github_icon} alt=""/></a>
                <a href="#contacts"><img src={mail_icon} alt=""/></a>
            </Logo>
            <Div2><p>I'm an academic Lecturer 🎓 turned Developer 😊</p>
                <p>I love creating and exploring new things. Meeting new people is my hobby ✌️ </p>
            </Div2>
        </Maindiv>
     );
}
 
export default Home;