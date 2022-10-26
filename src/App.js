import { createGlobalStyle } from "styled-components";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import SkillsTools from "./Components/SkillsTools";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background: white;
    padding: 10px 40px 10px 40px; 
  }
`;

function App() {
  return (
    <div >
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <SkillsTools />
      <Projects />
      <Contacts />
      <Footer />

    </div>
  );
}

export default App;
