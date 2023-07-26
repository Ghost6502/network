import logo from '../../imgs/logo.png'
import Navbar from './Navbar/Navbar'


function Header() {
    return (
        <header>
            <img src={logo} alt="Network" width={60} height={60}/>
            <Navbar />
        </header>
    );
}

export default Header;