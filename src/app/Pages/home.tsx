import Header from '../Components/Header';
import MenuNav from '../Components/nav';
import Formularios from '../Components/formularios';
import Footer from '../Components/footer';


import '../Components/styles/nav.css'

const home = () => {
    return (
      <>
        <Header/>
        <MenuNav/>
        <Formularios/>
        <Footer/>
      </>
    );
  };

export default home;
  