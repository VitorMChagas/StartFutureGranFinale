import style from './css/Footer.module.css';
import LogoPurple from '../../assets/images/logo-purple.svg';
import iconLinkedin from '../../assets/images/icon-linkedin.svg'
import iconInstagram from '../../assets/images/icon-instagram.svg'
import iconGithub from '../../assets/images/icon-github.svg'
import iconTikTok from '../../assets/images/icon-tiktok.svg'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className={style.background}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={LogoPurple} alt="logo" className={style.logoImg} />
          <br />
          <span>Start Future - CNPJ 46.241.846/0001-14</span>
        </div>

        <div className={style.linksContainer}>
          <div>
            <span className={style.titleContainer}>Sitemap</span>

            <ul className={style.sitemap}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              {/* <li>
                <Link to='/'>Sobre</Link>
              </li> */}
              <li>
                <Link to='/cases'>Cases</Link>
              </li>
              {/* <li>
                <Link to='/'>Certificados</Link>
              </li> */}
            </ul>
          </div>

          <div>
            <span className={style.titleContainer}>Nos siga nas redes</span>

            <ul className={style.socialMedia}>
              <li>
                <a href="https://www.linkedin.com/company/startfuture" target="_blank">
                  <img src={iconLinkedin} alt="icon from linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/startfuturebootcamp/" target="_blank">
                  <img src={iconInstagram} alt="icon from instagram" />
                </a>
              </li>
              <li>
                <a href="https://github.com/StartFuture" target="_blank">
                  <img src={iconGithub} alt="icon from github" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@startfuturebootcamp" target="_blank">
                  <img src={iconTikTok} alt="icon from tiktok" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer