import Header from "./Header";
import '../styles/components/App.scss';
import Information from "./Information";
import { useEffect, useState } from "react";

const App = () => {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <Header/>

      {isDesktop
        ? (
          <main className="app__container">
            <Information />
          </main>
        ) : (
          <main className="app__container">
            <Information />
          </main>
        )}
    </div>
  )
}

export default App;
