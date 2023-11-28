import AppBar from "../AppBar/AppBar";

import Main from "../Main/Main";
import About from "../About/About";
import Electricity from "../Electricity/Electricity";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main className="container">
        <Main />
        <About />
        <Electricity/>
      </main>
    </>
  );
};

export default Layout;
