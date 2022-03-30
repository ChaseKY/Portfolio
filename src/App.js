import './App.css';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState(0);
  function determineState() {
    if (current === 0) {
      return <About></About>;
    } else if (current === 1) {
      return <Projects></Projects>;
    } else if (current === 2) {
      return <Resume></Resume>;
    }
  }
  return (
    <div>
      <Header setCurrent={setCurrent}></Header>
      {determineState()}
      <Footer></Footer>
    </div>
  );
}

export default App;
