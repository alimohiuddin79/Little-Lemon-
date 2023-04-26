import Logo from "../utils/Logo.svg"
import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <Nav />
        </header>
    )
}

export default Header;