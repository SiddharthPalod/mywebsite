import React, {useEffect } from 'react';
import { Intro, ContentCategorized, Aboutus, Contactus } from './components';

function App() {

  useEffect(() => {
    function replaceVerticalScrollByHorizontal(event) {
      if (event.deltaY !== 0) {
        window.scroll(window.scrollX + event.deltaY*2, window.scrollY);
        event.preventDefault();
      }
    }

    const mediaQuery = window.matchMedia('(min-width: 770px)');

    if (mediaQuery.matches) {
      window.addEventListener('wheel', replaceVerticalScrollByHorizontal);
    }

    return () => {
      if (mediaQuery.matches) {
        window.removeEventListener('wheel', replaceVerticalScrollByHorizontal);
      }
    };
  }, []);

  return (
    <main className="app transition-all ease-in flex-col md:flex-row md:inline-flex">
      <Intro />
      <ContentCategorized/>
      <Aboutus/>
      <Contactus/>
    </main>
  );
}

export default App;
