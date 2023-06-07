import Lottie from "lottie-react";
import floatPhoneAnimation from "../../assets/animations/float-phone.json";
import style from './css/InitialHome.module.css';
import { Link } from "react-router-dom";

const InitialHome: React.FC = () => {
  return (
    <div className={style.background}>
      <div className={style.background_animation}>
        <Lottie animationData={floatPhoneAnimation} 
                style={{ width:"40%", marginLeft: "auto", marginRight: "11%", marginTop: "130px" }} />
      </div>

      <div className={style.initial_home}>
        <div className={style.initial_home_text}>
          <span>Comece o seu novo<br />futuro hoje.</span>
          <span className={style.desc}>
            Participe de equipes com designers, programadores e líderes. Adquira conhecimento na prática.
          </span>
          <div className={style.tag_1}>Desenvolvedor</div>
          <div className={style.tag_2}>Designer</div>
          <Link to="/participant/forms">
            <button className={style.initial_home_text}>
                Quero participar
            </button>
          </Link>
        </div>
        <div className={style.tag_3}>Designer</div>
      </div >
    </div >
  )
}

export default InitialHome;