import './App.scss';
import Header from "./components/header/header";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/section6";
function App() {
  return (
    <>
      <div className="container p-3">
        <header>
          <Header />
        </header>
        <main>
          <section>
            <Section1 />
          </section>
          <section>
            <Section2 />
          </section>
          <section>
            <Section3/>
          </section>
          <section>
            <Section4/>
          </section>
          <section>
            <Section5/>
          </section>
          <section>
            <Section6/>
          </section>
          <div id="bg1"></div>
          <div id="bg2"></div>
        </main>
        <footer>

        </footer>
      </div>
    </>
  );
}

export default App;
