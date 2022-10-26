import styled from "styled-components";
import Profile_pic2 from "./Images/Profile_pic2.png";

const Maindiv = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 50px -40px -10px -40px;
    padding: 20px 40px 20px 40px; 

    @media screen and (max-width: 30em) {
        padding: 10px 10px 10px 10px;
    }
`;

const Title = styled.div`
    margin-top: -10px;
    font-weight: 300;
    font-size: 25px;
    color: #860d0d;
    margin-left: 80px;

    @media screen and (max-width: 60em) {
        margin-left: 20px;
    }

    @media screen and (max-width: 30em) {
        margin: 0px;
    }
`;

const H1 = styled.h1`
    margin-top: 2px;
    color: #0080ff;
    margin-left: 80px;

    @media screen and (max-width: 60em) {
        margin-left: 20px;
        font-size: 30px;
    }

    @media screen and (max-width: 30em) {
        margin: 0px;
    }
`;

const Img = styled.img`
    height: 250px;
    width: 250px;

    @media screen and (max-width: 60em) {
        height: 200px;
        width: 200px;
    }

`;

const BioDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 5px;
    margin-left: 80px;

    h2 {
        color: #66b3ff;
    }

    @media screen and (max-width: 60em) {
        margin-left: 20px;
    }

    @media screen and (max-width: 45em) {
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 5px;
    }

    @media screen and (max-width: 30em) {
        margin: 0px;
    }

`;

const Bio = styled.div`
    margin-right: 80px;

    p {
        text-align: justify;

        b {
            color: #0080ff;
        } 
    }

    a {
        text-decoration: none;
        color: #860d0d;
        font-weight: 800;
        font-size: 18px;
    }

    @media screen and (max-width: 60em) {
        margin-right: 20px;
    }

    @media screen and (max-width: 30em) {
        font-size: 10px;

        a {
            font-weight: 700;
            font-size: 10px;
        }
    }

    @media screen and (max-width: 30em) {
        margin: 0px;
    }
`;



const About = () => {
    return ( 
        <Maindiv id="about">
            <Title>ABOUT</Title>
            <H1>Who's Mahmoud?</H1>
            <BioDiv>
                <Img src={Profile_pic2} alt="" />
                <div>
                    <h2>A curiosity-driven Front-End Developer</h2>
                    <Bio>
                        <p>I'm passionate about learning and building stuff. 
                            My happiest days are when I'm learning, creating and exploring different ideas. 
                            I spend most of my time researching and thinking of how to make things better.
                        </p>
                        <p>I have a <b>PhD</b> in <b>Electronics and Electrical Engineering</b> from <b>University College London</b> 🇬🇧. I have a programming 
                            and research background. <a href="https://www.dropbox.com/s/dykvzl5cc711hwq/Tech%20CV.pdf?dl=0" target="_blank" rel="noopener noreferrer" >Want my CV?</a>
                        </p>
                        <p>I'm an academic Lecturer turned developer who is currently looking for what problem to solve next 😉.
                        </p>
                        <a href="#contacts" >Get in Touch!</a>
                    </Bio>
                </div>
            </BioDiv>
        </Maindiv>

     );
}
 
export default About;
