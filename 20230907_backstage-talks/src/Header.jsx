import "./Header.scss";
import logo from "./assets/logo.png";
export function Header() {
  return (
    <>
      <header className="header" id="header">
        <img className="header__img" src={logo} alt="BACKSTAGE TALKS" />
        <p className="header__link">
          <a className="link" href="mailto:info@backstagetalks.com">
            info@backstagetalks.com
          </a>
        </p>
      </header>
    </>
  );
}
