import Download from "./components/downlaod/Download";
import Faq from "./components/faq/Faq";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Subscribe from "./components/subscribe/Subscribe";

const App = () => {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </main>
  );
};

export default App;
