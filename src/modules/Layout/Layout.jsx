import AppBar from "../AppBar/AppBar";

import Main from "../Main/Main";
import About from "../About/About";
import Electricity from "../Electricity/Electricity";
import Cases from "../Cases/Cases";
import Questions from "../Questions/Questions";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main className="container">
        <Main />
        <About />
        <Electricity />
        <Cases />
        <Questions />
        <Contact />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
