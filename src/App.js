import './App.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Headre'
import Hero from './components/Hero/Hero';
import Conteiner from './components/Conteiner/Conteiner';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Hero/>
      <Conteiner/>
      <Footer/>
    </div>
  );
}

export default App;
