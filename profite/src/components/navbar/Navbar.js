import "./Navbar.css";
import flaggb from "../../assets/img/navbar/flag-gb.svg";
import flages from "../../assets/img/navbar/flag-es.svg";
import flagbr from "../../assets/img/navbar/flag-br.svg";
import line from "../../assets/img/navbar/line.svg";
import cart from "../../assets/img/navbar/cart.svg";
import user from "../../assets/img/navbar/user.svg";
import logo from "../../assets/img/navbar/logo.svg";
import search from "../../assets/img/navbar/search.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__left">
            <img src={logo} alt="logo-profite" />
            </div>
            <div className="navbar__center">
                <div className="navbar__search">
                <form action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="v-hidden">O que está procurando?</span>
                    </label>
                </form>
                <input 
                type="text" 
                id="header-search" 
                placeholder="O que está procurando?" 
                name="s" 
                />
                <input type="image" src={search} name="submit" width="18" height="18" alt="submit"/>
                </div>
            </div>
            <div className="navbar__right">
                <div className="navbar__account">
                    <a href="#">
                        <img src={user} width="20px" alt="account-user" />
                        <span>Minha Conta</span>
                    </a>
                </div>
                <div className="navbar__cart">
                    <img src={cart} width="20px" alt="cart" />
                </div>
                <div className="navbar__line">
                    <img src={line} alt="line" />
                </div>
                <div className="navbar__flags">
                    <a href="#">
                        <img width="30" src={flagbr} alt="flag-br" />
                    </a>
                    <a href="#">
                        <img width="30" src={flages} alt="flag-es" />
                    </a>
                    <a href="#">
                        <img width="30" src={flaggb} alt="flag-gb" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;