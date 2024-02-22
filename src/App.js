import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/Skills";
import Contact from  "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Projects from "./components/Projects/Projectse";
import Qualification from "./components/Qualification/Qualifiaction";








function App() {
  return (
    <div className="App"> 
<Navbar/>
<Intro/>
<Projects/>
<Skills/>
<Qualification/>
<Contact/>
<Footer/>

    </div>
  );
}

export default App;
