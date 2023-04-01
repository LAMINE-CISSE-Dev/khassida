import logo from './logo.svg';
import './App.css';
import Home from './home';
import Navbar from './navbar';
import Footer from './footer'
import image1 from './images/pdf.png';
import image2 from './images/mp3.png';
import image3 from './images/mp4.png';
import image4 from './images/coran.png';

import image5 from './images/makgni.jpeg';
import image6 from './images/daroukhoudoss.jpeg';
import image7 from './images/hizbout.jpeg';
import image8 from './images/madj.jpeg';


function App() {
  const taille = {
    width: '150px',
    height: '100px'
  };

  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
        <div className="container">
            <div className="row text-center">
                <div className="col-md-3">
                    <img src={image1} alt=""  className="taille"/>
                    <h1 className="pdf">PDF</h1>
                </div>
                <div className="col-md-3">
                    <img src={image2} alt=""  className="taille"/>
                    <h1 className="son">SON</h1>
                </div>
                <div className="col-md-3">
                    <img src={image3} alt=""  className="taille"/>
                    <h1 className="video">VIDEO</h1>
                </div>
                <div className="col-md-3">
                   <img src={image4} alt="" className="taille-majalis"/>
                   <h1 className="majalis text-center">MAJALIS</h1>
                </div>
            </div>
          </div>
      </div>
      <div className="container">
        <h1 className="text-center pt-4">Les Hizbouts</h1>
        <div className="row g-3 text-center">
          <div className="col-md-3">
            <img src={image5} className="reduire" />
          </div>
          <div className="col-md-3">
            <img src={image6} className="reduire" />
          </div>
          <div className="col-md-3">
            <img src={image7} className="reduire" />
          </div>
          <div className="col-md-3">
            <img src={image8} className="reduire" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
