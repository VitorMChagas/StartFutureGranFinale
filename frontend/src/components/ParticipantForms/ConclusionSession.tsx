import style from './css/ConclusionSession.module.css';
import iconLinkedin from '../../assets/images/icon-linkedin.svg'
import iconInstagram from '../../assets/images/icon-instagram.svg'
import iconGithub from '../../assets/images/icon-github.svg'
import iconTikTok from '../../assets/images/icon-tiktok.svg'
import { Student } from '../../types/Student';
import { Link } from 'react-router-dom';

interface IConclusionSessionProps {
  student: Student;
}

const ConclusionSession: React.FC<IConclusionSessionProps> = ({student}) => {
    const firstName = student.fullName.split(' ')[0];

    return (
    <div>
      <div className={style.container_conclusion}>
        <div className={style.container_grid}>
          <div className={style.conclusion_text}>
            <h1>
              <strong>{firstName}</strong>, muito obrigado pela inscrição, entraremos em contato :)
            </h1>
            <h2>
              Aproveite e nos siga nas redes sociais
            </h2>
            <ul className={style.social_media}>
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
          <div className={style.video}>
            <iframe title='Vídeo de apresentação' className={style.iframe} 
              src="https://www.youtube.com/embed/AnBqk1ejYbg" frameBorder="0" allowFullScreen />
          </div>
        </div>
      </div>
      <div className={style.back_home}>
        <button>
          <Link to='/'>Voltar para home</Link>
        </button>
      </div>
    </div>
    );
}

export default ConclusionSession;