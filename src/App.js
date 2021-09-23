import Header from './components/Header'
import Showcase from './components/Showcase';
import CreationsMobile from './components/CreationsMobile';
import Interactive from './components/Interactive';
import Footer from './components/Footer';
import CreationsDesktop from './components/CreationsDesktop'


const App = () => {
  return (
    <>
    <Header/>
    <Showcase />
    <Interactive/>
    <CreationsMobile/>
    <CreationsDesktop/>
    <Footer/>
    </>
  );
}

export default App;
