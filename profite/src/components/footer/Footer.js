import "./Footer.css";
import contact1 from "../../assets/img/footer/contact-1.svg";
import contact2 from "../../assets/img/footer/contact-2.svg";
import profite from "../../assets/img/footer/profite.svg";
import vtex from "../../assets/img/footer/vtex.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <h2>Localização</h2>
                <div className="footer__adress">
                    <div className="adress">
                        <span>São Paulo</span>
                        <p>Rua do Rócio, 413/1801</p>
                        <p>Vila Olímpia - SP</p>
                        <p>04552-000</p>
                        <p>+55 11 3333 3333</p>
                    </div>
                    <div className="adress">
                        <span>Rio de Janeiro</span>
                        <p>Vol. da Pátria, 301/702</p>
                        <p>Botafogo - RJ</p>
                        <p>22270-000</p>
                        <p>+55 21 3333 3333</p>
                    </div>
                </div>
            </div>
            <div className="footer__center">
                <div className="footer__button">
                    <button type="button" className="contact">
                        <img src={contact1} alt="contact" /> <span>Entre em contato</span>
                    </button>
                    <button type="button" className="contact">
                        <img src={contact2} alt="contact" /> <span>Fale com o nosso consultor online</span>
                    </button>
                </div>
            </div>
            <div className="footer__right">
                <div className="footer__logo">
                    <div className="footer__logocol">
                    <small className="footer__small">Created by</small>
                    <img src={profite} alt="profite" width="60px" height="17px" />
                    </div>
                    <div className="footer__logocol">
                    <small className="footer__small">Created by</small>
                    <img src={vtex} alt="vtex" width="49px" height="18px" />
                    </div>
                </div>
            </div>
        </div>
            );
};

            export default Footer;