import "./Main.css";
import Banner from "../banner/Banner";
import Product from "../showcase/Product";

const Main = () => {
  return (
    <main>
      <div className="main__container">
          <Banner />
          <Product />
      </div>
    </main>
  );
};

export default Main;