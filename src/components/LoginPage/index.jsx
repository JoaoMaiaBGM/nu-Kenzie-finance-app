import image from "../../assets/image.png";
import Nu_Kenzie from "../../assets/Nu_Kenzie.png";
import "./style.css";

const LoginPage = ({ Login }) => {
  return (
    <div className="loginPage-container">
      <div className="loginPage-action">
        <img src={Nu_Kenzie} alt="Nu Kenzie logo" />
        <h1 className="loginPage-title">
          Centralize o controle das suas finanças
        </h1>
        <p className="loginPage-paragraph">de forma rápida e segura</p>
        <button className="login-btn" onClick={() => Login()}>
          Iniciar
        </button>
      </div>
      <div className="loginPage-info">
        <img src={image} alt="login art" />
      </div>
    </div>
  );
};

export default LoginPage;
