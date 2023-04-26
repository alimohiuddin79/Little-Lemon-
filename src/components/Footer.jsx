import FooterLogo from "../utils/Vector.svg"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <img src={FooterLogo} alt="Logo"/>

            <nav className="doormatNavigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservation">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>

            <nav className="contacts">
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </nav>

            <nav className="socialMedia">
                <li><Link to='facebook.com'>Facebook</Link></li>
                <li><Link to='instagram.com'>Instagram</Link></li>
                <li><Link to='whatsapp.com'>Whatsapp</Link></li>
            </nav>

        </footer>
    )
}

export default Footer;