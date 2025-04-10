import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { islog } from '../actions';
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
import Section12 from './components/section12/section12';
import Section13 from './components/section13/Section13';
import Footer from './components/footer/footer';
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth);
  useEffect(() => {
    if (!isAuth) {
      dispatch(islog());
    }
  }, [isAuth]);
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
          <Section12/>
          <Section9/>
          <Section10/>
          <Section11/>
          <Section13/>
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
