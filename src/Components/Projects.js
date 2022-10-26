import styled from "styled-components";
import Advice_App from "./Images/Advice_App.png";
import IPaddress_App from "./Images/IPaddress_App.png";
import Calc_App from "./Images/Calc_App.png";
import Notes_App from "./Images/Notes_App.png";
import REST_App from "./Images/REST_App.png";

const Maindiv = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 10px -40px -10px -40px;
    padding: 20px 40px 20px 40px;

    @media screen and (max-width: 30em) {
        padding: 10px 10px 10px 10px;
    }
`;

const H1 = styled.h1`
    margin-left: 80px;
    color: #000099;

    @media screen and (max-width: 60em) {
        margin-left: 20px;
    }

    @media screen and (max-width: 30em) {
        margin-left: 0px;
        font-size: 30px;
    }
`;

const Title = styled.div`
    margin-top: 20px;
    font-weight: 300;
    font-size: 25px;
    color: #860d0d;
    margin-left: 80px;

    @media screen and (max-width: 60em) {
        margin-left: 20px;
    }

    @media screen and (max-width: 30em) {
        margin-left: 0px;
    }
`;

const ProjectsList = styled.div`
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    column-gap: 10px;

    @media screen and (max-width: 50em) {
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 50px;
    }

`;

const ProjectDiv = styled.div`
    margin-left: 80px;

    h1 {
        color: #660066;
    }

    @media screen and (max-width: 60em) {
        margin-left: 20px;
    }

    @media screen and (max-width: 30em) {
        margin-left: 0px;

        h1 {
            font-size: 30px;
        }
    }
`;

const Tools = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 5px;
    column-gap: 5px;
    width: 80%;

    div {
        background: #000033;
        color: whitesmoke;
        padding: 10px;
        width: auto;
        font-size: 10px;
    }

    @media screen and (max-width: 30em) {
        div {
            font-size: 8px;
        }
    }
`;

const P = styled.p`
    width: 80%;
    text-align: justify;
    line-height: 25px;

    span {
        color: #660066;
    }

    @media screen and (max-width: 50em) {
        width: 100%;
    }

    @media screen and (max-width: 30em) {
        font-size: 10px;
        line-height: 15px;
    }
    
`;

const ViewDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 5px;
    width: 80%;

    @media screen and (max-width: 50em) {
        width: 100%;
    }
    
    
    a {
        display: inline-block;
        padding: 0.75rem 1.25rem;
        border-radius: 3px;
        color: #fff;
        font-size: 1rem;
        letter-spacing: 0.15rem;
        transition: all 0.3s;
        position: relative;
        overflow: hidden;
        z-index: 1;
        text-decoration: none;

        &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #67bc98;
            border-radius: 3px;
            z-index: -2;
        }

        &:before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: #660066;
            transition: all 0.5s;
            border-radius: 3px;
            z-index: -1;
        }

        &::hover {
            color: #fff;
        }

        &:hover:before {
            width: 100%;
        }

        @media screen and (max-width: 30em) {
            font-size: 10px;
            
        }

    }
`;

const AppImage = styled.img`
    width: 400px;
    height: 300px;
    margin-right: 100px;
    margin-top: 30px;

    @media screen and (max-width: 60em) {
        margin-right: 20px;
    }

    @media screen and (max-width: 30em) {
        margin-right: 0px;
        width: 250px;
        height: 150px;
        margin-top: 10px;

    }

`;








const Projects = () => {
    return ( 
        <Maindiv id="projects">
            <Title>PROJECTS</Title>
            <H1>Some of the Projects I've Built  </H1>
            <ProjectsList>
                <ProjectDiv>
                    <h1>Notes App</h1>
                    <Tools>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Styled Components</div>
                        <div>Local Storage API</div>
                    </Tools>
                    <P>My personal notes apptilcation built with react that has the basic notes functionalities. 
                        It is <span><b>responsive</b></span> and easy to use. This App leverages your <span><b>local storage API</b></span> to keep track of your saved notes.
                    </P>
                    <ViewDiv>
                        <a href="https://mtukur24.github.io/Notes-App-/" target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/mtukur24/Notes-App-" target="_blank" rel="noopener noreferrer" >View Github Repo</a>
                    </ViewDiv>
                </ProjectDiv>
                <AppImage src={Notes_App} alt=""/>
            </ProjectsList>
            <ProjectsList>
                <ProjectDiv>
                    <h1>Calc App</h1>
                    <Tools>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Styled Components</div>
                    </Tools>
                    <P>This is a calculator App from the <span><b>Frontend Mentor challenges</b></span>. 
                        It can perform mathematical operations like addition, subtraction, multiplication, and division.
                        Users can also adjust the color theme (3 options) based on their preference. 
                    </P>
                    <ViewDiv>
                        <a href="https://mtukur24.github.io/Calculator_App/" target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/mtukur24/Calculator_App/tree/master" target="_blank" rel="noopener noreferrer">View Github Repo</a>
                    </ViewDiv>
                </ProjectDiv>
                <AppImage src={Calc_App} alt=""/>
            </ProjectsList>
            <ProjectsList>
                <ProjectDiv>
                    <h1>REST Countries App</h1>
                    <Tools>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Styled Components</div>
                        <div>REST Countries API</div>
                    </Tools>
                    <P>One of the <span><b>Frontend Mentor challenges </b></span> that integrates with the <span><b>REST Countries API </b></span> 
                        to pull country data and display it on the screen. The user is able to search for a country or filter countries by region, 
                        click on a country to see more detailed information on a separate page and also toggle the color scheme between light and dark mode.
                    </P>
                    <ViewDiv>
                        <a href="https://mtukur24.github.io/RestCountryApp/" target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/mtukur24/RestCountryApp/tree/master" target="_blank" rel="noopener noreferrer">View Github Repo</a>
                    </ViewDiv>
                </ProjectDiv>
                <AppImage src={REST_App} alt=""/>
            </ProjectsList>
            <ProjectsList>
                <ProjectDiv>
                    <h1>IP Address Tracker</h1>
                    <Tools>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Styled Components</div>
                        <div>IP Geolocation API</div>
                        <div>Leaflet Mapping API</div>
                    </Tools>
                    <P>An application that helps users see their own IP address on the map on the initial page load. 
                        You can also <span><b>search for any IP addresses or domains </b></span>and see the key information and location. 
                        For the IP address we make use of the <span><b>IP Geolocation API </b></span>by IPify and the <span><b>Leaflet mapping API </b></span> 
                        for the mapping. This is one the <span><b>Frontend Mentor challenges</b></span>.
                    </P>
                    <ViewDiv>
                        <a href="https://mtukur24.github.io/IPaddressTracker/" target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/mtukur24/IPaddressTracker/tree/master" target="_blank" rel="noopener noreferrer">View Github Repo</a>
                    </ViewDiv>
                </ProjectDiv>
                <AppImage src={IPaddress_App} alt=""/>
            </ProjectsList>
            <ProjectsList>
                <ProjectDiv>
                    <h1>Advice Generator</h1>
                    <Tools>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Styled Components</div>
                        <div>Advice Slip API</div>
                    </Tools>
                    <P>An advice generator app using the <span><b>Advice Slip API </b></span> that generates a new piece of advice by clicking the dice icon. 
                        Users are able to view the optimal layout for the app depending on their device's screen size. Credits to the Frontend Mentor challenges.
                    </P>
                    <ViewDiv>
                        <a href="https://mtukur24.github.io/AdviceGenerator/" target="_blank" rel="noopener noreferrer">View Project</a>
                        <a href="https://github.com/mtukur24/AdviceGenerator/tree/master" target="_blank" rel="noopener noreferrer">View Github Repo</a>
                    </ViewDiv>
                </ProjectDiv>
                <AppImage src={Advice_App} alt=""/>
            </ProjectsList>
        </Maindiv>
        
     );
}
 
export default Projects;