import "./Product.css";
import Rate from "./Rate"
import productimage from "../../assets/img/showcase/product-1.png";
import buy from "../../assets/img/showcase/buy.svg";
import {useEffect, useState} from 'react';
import apiProdutos from './api_product';

const Card = () => {

    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        const loadProducts = async () => {
            let lista = await apiProdutos.getProducts();
            setProductList(lista);
        }

        loadProducts();
    }, []);

  return (
    <div className="product">
        <h2>Produtos</h2>
        <div className="content__cards">
        {productList.map((item, key)=>(
            <div className="product__card" key={key}>
            <div className="card__image">
            <img src={item.image} />
            </div>
            <div className="card__title">
                <h1>{item.name}</h1>
            </div>
            <div className="card__rate">
            <Rate />
            </div>
            <div className="card__oldprice">
                <span>de R${item.oldPrice}</span>
            </div>
            <div className="card__price">
                <span>R$ {item.price}</span>
            </div>
            <div className="card__installments">
                <span>ou em {item.installments.count} de R${item.installments.value}</span>
            </div>
            <div className="card__comprar">
                <button className="shop__button">
                <img src={buy} alt="buy"/>
                    <span>COMPRAR</span>
                </button>
            </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Card;