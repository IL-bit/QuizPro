import './App.scss';
import Header from "./components/header/header";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/section6";
import Section7 from "./components/section7/section7";
import Section8 from "./components/section8/section8";
import Section9 from "./components/section9/section9";
import Section10 from "./components/section10/section10";
import Section11 from "./components/section11/section11";
import Footer from './components/footer/footer';
function App() {
  return (
    <>
      <div className="container p-3">
        <Header />
        <main>
          <Section1 />
          <Section2 />
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Section7/>
          <Section8/>
          <Section9/>
          <Section10/>
          <Section11/>
          <div id="bg1"></div>
          <div id="bg2"></div>
          <div id="bg3"></div>
          <div id="bg4"></div>
          <div id="bg5"></div>
        </main>
        <Footer/>
        <div id="bg"></div>       
      </div>
    </>
  );
}

export default App;
