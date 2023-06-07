import style from './css/TeamWorkWith.module.css';
import UxUiTeamImg from '../../assets/images/ux-ui-team.png';
import FrontTeamImg from '../../assets/images/front-team.png';
import BackTeamImg from '../../assets/images/back-team.png';
import AgileTeamImg from '../../assets/images/agile-team.png';

const TeamWorkWith: React.FC = () => {
  function ContentItem(image: any) {
    return (
      <div className={style.item}>
          <div 
            className={style.item_image}
            style={{
              backgroundImage: `url(${image.url})`
            }}
            >
          </div>
          <div
            className={style.item_text}
            style={{
              backgroundImage: `linear-gradient(123.09deg, #782DD4 12.99%, rgba(120, 45, 212, 0) 75.15%)`
            }}
            >
            <h3>{image.title}</h3>
            <p>{image.text}</p>
          </div>
        </div>
    )
  }

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Seu time</h2>
        <h2>trabalhará com</h2>
      </div>

      <div className={style.divisor} />

      <div className={style.content}>
        <ContentItem url={UxUiTeamImg} title="UX/UI" text="Design" />

        <ContentItem url={FrontTeamImg} title="Front-end" text="Development" />

        <ContentItem url={BackTeamImg} title="Back-end" text="Development" />

        <ContentItem url={AgileTeamImg} title="Métodos Ágeis" text="Management" />
      </div>
    </div>
  )
}

export default TeamWorkWith;
