import style from './css/CaseItem.module.css';
import PurpleArrow from '../../assets/images/purple-arrow-cases.svg';
import useWindowSize from '../../hooks/useWindowSize';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  image: string;
  image_card: string;
  logo: string;
  mobile_img: string;
  themeColor: string;
  next_id?: string;
  grid: boolean;
}

const CaseItem: React.FC<Props> = ({
  id,
  title,
  subtitle,
  description,
  link,
  image,
  image_card,
  logo,
  mobile_img,
  themeColor,
  next_id,
  grid
}) => {
  const { width } = useWindowSize();

  return (
    <div className={grid ? style.grid : style.full} style={{ background: width && width <= 800 && !grid ? themeColor : '' }}>
      <div className={style.case} id={id}>
        <div className={style.case_image}>
          <Link to={link} target="_blank" rel="noopener noreferrer">
            <img src={grid ? image_card : image} alt={title} />
          </Link>
        </div>
        <div className={style.content}>
          {!grid && (
            <div className={style.logo_image}>
              <img src={logo} alt="logo" />
            </div>
          )}
          <div className={style.title}>
            <Link to={link} target="_blank" rel="noopener noreferrer">{title}</Link>
            <span>{subtitle}</span>
          </div>
          <div className={style.description}>
            <p>{description}</p>
            <Link to={link} className={style.see_more} target="_blank" rel="noopener noreferrer">Ver mais</Link>
            {next_id && <a className={style.arrow} href={`#${next_id}`}><img src={PurpleArrow} alt="Próximo card" /></a>}
          </div>
        </div>
        {!grid && (
          <div className={style.mobile_image}>
            <img src={mobile_img} alt={title} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CaseItem