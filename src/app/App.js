import Header from "./components/header/header";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
function App() {
  return (
    <>
      <div className="container-fluid">
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
          <section></section>
        </main>
        <footer>

        </footer>
      </div>
    </>
  );
}

export default App;
