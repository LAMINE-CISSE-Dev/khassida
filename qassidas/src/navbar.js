 import logo from './images/beugm.png';
const Navbar = () => {

    const ogo = {
        width : '70px',
        height: '70px'
    }

    return ( 
     <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#"><img src={logo} alt="" style={ogo}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Xam-xam</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Magg gni</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Kourel</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Radiass</a>
            </li>
            </ul>
            <div>
              <button type="btn" className="bouton p-1 border-0">Contactez nous</button>
            </div>
        </div>
</nav>
     );
}
 
export default Navbar;