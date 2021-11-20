import './App.scss';
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
