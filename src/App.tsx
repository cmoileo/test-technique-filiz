import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Section1 from "./layouts/home/Section1.tsx";
import Section2 from "./layouts/home/Section2.tsx";
import Banner from "./layouts/home/Banner.tsx";

function App() {

  return (
    <>
        <Header />
          <main>
              <Banner />
              <Section1 />
              <Section2 />
          </main>
        <Footer />
    </>
  )
}

export default App
