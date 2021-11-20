import "./Product.css";
import Rate from "./Rate"
import productimage from "../../assets/img/showcase/product-1.png";
import buy from "../../assets/img/showcase/buy.svg";

const Card = () => {
  return (
    <div className="product">
        <h2>Produtos</h2>
        <div className="content__cards">
            <div className="product__card">
            <div className="card___imagem">
            <img src={productimage} alt="product-image"/>
            </div>
            <div className="card__title">
                <h1>Tênis Couro Puma R698 Q4 V2</h1>
            </div>
            <div className="card__rate">
            <Rate />
            </div>
            <div className="card__oldprice">
                <span>de R$299</span>
            </div>
            <div className="card__price">
                <span>R$ 399</span>
            </div>
            <div className="card__installments">
                <span>ou em 3x de R$ 133,00</span>
            </div>
            <div className="card__comprar">
                <button className="shop__button">
                <img src={buy} alt="buy"/>
                    <span>COMPRAR</span>
                </button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Card;