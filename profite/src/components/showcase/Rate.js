import "./Product.css";
import fullstar from "../../assets/img/showcase/full-star.svg";
import emptystar from "../../assets/img/showcase/empty-star.svg";

const Rate = () => {
  return (
            <ul class="card__rate">
                <li class="avaliacao-item">
                <img src={fullstar} alt="fullstar" />
                </li>
                <li class="avaliacao-item">
                <img src={emptystar} alt="emptystar" />
                </li>
                <li class="avaliacao-item">
                <img src={emptystar} alt="emptystar" />
                </li>
                <li class="avaliacao-item">
                <img src={emptystar} alt="emptystar" />
                </li>
                <li class="avaliacao-item">
                <img src={emptystar} alt="emptystar" />
                </li>
            </ul>
            
  );
};

export default Rate;