import Header from "./Header";
import '../styles/components/App.scss';
import Information from "./Information";
import { useEffect, useState } from "react";
import Author from "./Author";
import Footer from "./Footer";

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
      <div className="app">
        <Header/>

        {isDesktop
          ? (
            <main className="app__container">
              <Information />
              <Author />
            </main>
          ) : (
            <main className="app__container">
              <Information />
              <Author />
            </main>
          )}
      </div>

      {isDesktop && (<Footer />)}
    </>
  )
}

export default App;
