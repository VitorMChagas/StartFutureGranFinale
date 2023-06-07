import { Link, useLocation } from 'react-router-dom';
import LogoWhite from '../../assets/images/logo-name-icon-white.svg';
import LogoBlack from '../../assets/images/logo-name-icon-black.svg';
import FlagBrazil from '../../assets/images/flag-brazil.svg';
import FlagUsa from '../../assets/images/flag-usa.svg';
import style from './css/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useMemo, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const NavBar: React.FC = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const [language, setLanguage] = useState('pt');
  const { width } = useWindowSize();

  const isDarkThemePage = useMemo(() => {
    switch (location.pathname) {
      case '/':
        return true;
      case '/cases':
        return true;
      case '/participant/forms':
        return true;
      default:
        return false;
    }
  }, [location.pathname]);

  return (
    <header
      className={`${style.header} ${isDarkThemePage ? style.is_dark : ''}`}
      style={{
        backgroundColor: location.pathname === '/cases' && width && width > 800 ? '#181818' : '',
        boxShadow: location.pathname === '/cases' && width && width <= 800 ? 'none' : ''
      }}
    >
      <div className={style.container}>
        <Link to="/" className={style.logo}>
          {
            isDarkThemePage ? (
              <img src={LogoWhite} alt="Logo" />
            ) : (
              <img src={LogoBlack} alt="Logo" />
            )
          }
        </Link>
        <nav className={`${style.nav} ${active && style.active}`}>
          <button
            title='Menu'
            aria-haspopup={true}
            aria-controls='menu'
            aria-expanded={active}
            aria-label={`${!active ? 'Abrir' : 'Fechar'} menu`}
            className={style.menu_button} onClick={() => 
              { 
                setActive((prev) => !prev)
                !active ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto' 
              }
            }
          />
          <ul className={style.ul} id="menu" role="menu">
            <li className={style.li}>
              <NavLink
                className={({ isActive }) => `${style.navlink} ${isActive ? style.navlink_active : ''}`}
                to="/" end
                onClick={() => { setActive(false); document.body.style.overflow = 'auto' }}
              >
                Home
              </NavLink>
            </li>
            <li className={style.li}>
              <NavLink
                className={({ isActive }) => `${style.navlink} ${isActive ? style.navlink_active : ''}`}
                to="cases"
                onClick={() => { setActive(false); document.body.style.overflow = 'auto' }}
              >
                Cases
              </NavLink>
            </li>
            {/* <li className={style.li}>
              <NavLink
                className={({ isActive }) => `${style.navlink} ${isActive ? style.navlink_active : ''}` }
                to="about"
                onClick={() => { setActive(false) }}
              >
                Sobre
              </NavLink>
            </li>
            <li className={style.li}>
              <NavLink
                className={({ isActive }) => `${style.navlink} ${isActive ? style.navlink_active : ''}` }
                to="certificates"
                onClick={() => { setActive(false) }}
              >
                Certificados
              </NavLink>
            </li> */}
          </ul>
        </nav>
        <div className={style.language}>
          {/* <button
            className={`${style.language_btn} ${language === 'pt' ? style.active_lang : ''}`}
            onClick={() => { setLanguage('pt') }}
          >
            <img src={FlagBrazil} alt="Brazil" />
          </button>
          <button
            className={`${style.language_btn} ${language === 'en' ? style.active_lang : ''}`}
            onClick={() => { setLanguage('en') }}
          >
            <img src={FlagUsa} alt="USA" />
          </button> */}
        </div>
      </div>
    </header>
  )
}

export default NavBar