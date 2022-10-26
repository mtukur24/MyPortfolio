import styled from "styled-components";
import html5 from "./Images/html5.png";
import css3 from "./Images/css3.png";
import javascript from "./Images/javascript.png";
import commandline from "./Images/commandline.png";
import git_icon from "./Images/git_icon.png"
import github from "./Images/github.png"
import nodejs from "./Images/nodejs.png"
import react from "./Images/react.png"
import sass from "./Images/sass.png"
import typescript from "./Images/typescript.png"
import vscode_icon from "./Images/vscode_icon.png"
import styledcomponents_icon from "./Images/styledcomponents_icon.png"


const Maindiv = styled.div`
    height: auto;
    margin: 30px -40px -10px -40px;
    padding: 20px 40px 20px 40px;
    color: whitesmoke;
    background: #ffb366;
    background-size: max-content; 

    h1 {
        margin-left: 80px;
        color: black;
    }

    @media screen and (max-width: 60em) {
        h1 {
            margin-left: 20px;
            font-size: 30px;
        }
    }

    @media screen and (max-width: 30em) {
        padding: 10px 10px 10px 10px;

        h1 {
            margin-left: 0px;
        }
    }

`;

const Title = styled.div`
    margin-top: 20px;
    font-weight: 300;
    font-size: 25px;
    color: red;
    margin-left: 80px;

    @media screen and (max-width: 60em) {
        margin-left: 20px;
    }

    @media screen and (max-width: 30em) {
        margin: 0px;
    }
`;

const ToolsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
    row-gap: 20px;
    margin-left: 80px;
    margin-right: 80px;

    img {
        height: 80px;
        width: 80px;
    }

    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 60em) {
        margin-left: 20px;
        margin-right: 20px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        row-gap: 20px;
    }

    @media screen and (max-width: 45em) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        row-gap: 20px;
        font-size: 10px;

        img {
            height: 50px;
            width: 50px;
        }
    }

    @media screen and (max-width: 30em) {
        margin: 0px;
    }
`;

const Div = styled.div`
    margin-left: 80px;
    color: white;

    h2 {
        color: black;
    }

    /* div {
        font-size: 20px;
    } */

    @media screen and (max-width: 60em) {
        margin-left: 20px;
        font-size: 15px;
    }

    @media screen and (max-width: 30em) {
        margin: 0px;
        font-size: 10px;
    }
`;

const SkillsTools = () => {
    return ( 
        <Maindiv id="skills">
            <Title>SKILLS &amp; TOOLS</Title>
            <h1>Skills and Tools that I Can Use:</h1>
            <ToolsDiv>
                <div>
                    <img src={html5} alt=""/>
                    <p>HTML5</p>
                </div>
                <div>
                    <img src={css3} alt=""/>
                    <p>CSS3</p>
                </div>
                <div>
                    <img src={javascript} alt=""/>
                    <p>JavaScript</p>
                </div>
                <div>
                    <img src={typescript} alt=""/>
                    <p>TypeScript</p>
                </div>
                <div>
                    <img src={react} alt=""/>
                    <p>React</p>
                </div> 
                <div>
                    <img src={nodejs} alt=""/>
                    <p>Node</p>
                </div>
                <div>
                    <img src={sass} alt=""/>
                    <p>SASS</p>
                </div>
                <div>
                    <img src={styledcomponents_icon} alt=""/>
                    <p>Styled Components</p>
                </div>
                <div>
                    <img src={vscode_icon} alt=""/>
                    <p>VS Code</p>
                </div>
                <div>
                    <img src={commandline} alt=""/>
                    <p>Command Line</p>
                </div>
                <div>
                    <img src={git_icon} alt=""/>
                    <p>Git</p>
                </div>
                <div>
                    <img src={github} alt=""/>
                    <p>Github</p>
                </div>
            </ToolsDiv>
            <Div>
                <h2>Currently:</h2>
                <div>
                    I'm working on improving my frontend skills and tech stack. And also having fun practicing on Frontend Mentor.  
                </div>
            </Div>
            

        </Maindiv>
        
     );
}
 
export default SkillsTools;