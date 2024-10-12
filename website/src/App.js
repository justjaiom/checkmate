
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';

function App() {
  return (
    <div className='app-container lg: text-lg xl: text-5xl'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;
