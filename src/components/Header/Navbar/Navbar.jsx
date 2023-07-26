import { NavLink } from 'react-router-dom';
import classes from './Mavbar.module.css'

function Navbar() {
    return (
        <nav className={classes.nav}>
            <NavLink to='/profile' className={({ isActive }) => isActive ? classes.active : ''}>Profile</NavLink>
            <NavLink to='/messages' className={({ isActive }) => isActive ? classes.active : ''}>Messages</NavLink>
            <NavLink to='/news' className={({ isActive }) => isActive ? classes.active : ''}>News</NavLink>
            <NavLink to='/music' className={({ isActive }) => isActive ? classes.active : ''}>Music</NavLink>
            <NavLink to='/settings' className={({ isActive }) => isActive ? classes.active : ''}>Settings</NavLink>
        </nav>
    );
}

export default Navbar;