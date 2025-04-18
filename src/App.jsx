import Header from "./components/Header";
import Portfolios from "./components/Portfolios";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat bg-fixed px-5 md:px-28 pt-10 md:pt-16 pb-10"
        style={{ 
          backgroundImage: `url("/others/bground.webp")`, 
          fontFamily: "'Roboto',sans-serif" 
        }}
      >
        <Header />
        <Portfolios />
      </div>
      <Footer/>
    </>
  );
}

export default App;
