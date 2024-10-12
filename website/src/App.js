import logo from './logo.svg';
import './App.css';
import './components/footer'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';

function App() {
  return (
    <h1 className="text-3xl font-bold underline">

      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </h1>
  );
}

export default App;
