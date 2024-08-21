import Header from "./Header";
import '../styles/components/App.scss';
import Information from "./Information";
import { useEffect, useState } from "react";
import Author from "./Author";
import Footer from "./Footer";
import Form from "./Form";
import AsideIcons from "./AsideIcons";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1040);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <span className="app__rect1"></span>
      <span className="app__rect2"></span>
      <div className="app">
        <Header/>
        <AsideIcons />

        {isDesktop
          ? (
            <main className="app__container">
              <div className="app__container-info">
                <Information />
                <Author />
              </div>

              <Form />
            </main>
          ) : (
            <main className="app__container">
              <Information />
              <Form />
              <Author />
            </main>
          )}
      </div>

      {isDesktop && (<Footer />)}
    </>
  )
}

export default App;
