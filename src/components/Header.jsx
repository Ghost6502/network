import logo from "../imgs/logo.png"
import Navbar from './Navbar'


function Header() {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="Network" width={60} height={60}/>
            <Navbar />
        </header>
    );
}

export default Header;