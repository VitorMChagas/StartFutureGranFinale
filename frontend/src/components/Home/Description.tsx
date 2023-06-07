import style from './css/Description.module.css';
import girlLogo from '../../assets/images/home-now-with-you.svg'

const Description: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.desc}>
        <h2 className={style.title}>Nosso bootcamp irá <br/>proporcionar aos participantes formas de evoluir tecnicamente e socialmente como profissional</h2>
        <p className={style.paragraph}>Venha e saia da sua zona de conforto, trabalhe em equipe, discuta, apresente, treine, erre. Tudo é possível na Start Future.</p>
      </div>
      <div className={style.image}>
        <img src={girlLogo} alt="Girl inside logo" />
      </div>
    </div>
  )
}

export default Description;
