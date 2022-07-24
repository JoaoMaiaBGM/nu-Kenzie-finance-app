import NuKenzie from "../../assets/NuKenzie.png";

import "./style.css";

const Header = ({ logOut }) => {
  return (
    <>
      <header className="header-nu">
        <div className="header-container">
          <img src={NuKenzie} alt="Nu Kenzie logo" className="logo" />
          <button
            className="header-btn"
            type="button"
            onClick={() => {
              logOut();
            }}
          >
            Início
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
