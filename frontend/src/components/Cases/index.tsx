import { useEffect, useState } from 'react';
import WorkstationImg from '../../assets/images/cases_images/workstation_tiktok.svg';
import WorkstationLogo from '../../assets/images/cases_images/workstation_logo.svg';
import WorkstationTiktokMobile from '../../assets/images/cases_images/workstation_tiktok_mobile.svg';
import WorkstationCard from '../../assets/images/cases_images/workstation_card.svg';
import MenisaudeImg from '../../assets/images/cases_images/menisaude_tiktok.svg';
import MenisaudeLogo from '../../assets/images/cases_images/menisaude_logo.svg';
import MenisaudeTiktokMobile from '../../assets/images/cases_images/menisaude_tiktok_mobile.svg';
import CaseItem from './CaseItem';
import style from './css/CaseItem.module.css';
import ColumnGray from '../../assets/images/column-gray.svg';
import ColumnPurple from '../../assets/images/column-purple.svg';
import GridGray from '../../assets/images/grid-gray.svg';
import GridPurple from '../../assets/images/grid-purple.svg';
import useWindowSize from '../../hooks/useWindowSize';

const Cases: React.FC = () => {
  const [grid, setGrid] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width <= 800) {
      setGrid(false);
    }
  }, [width]);

  const cases = [
    {
      id: 'workstation1',
      title: 'Workstation',
      subtitle: 'Web Application',
      description: 'Case desenvolvido em nosso primeiro bootcamp. Seu objetivo é atender a demanda de alugueis de espaços para trabalhos individuais que necessitam de uma sala equipada com o que um escritório teria. Seu diferencial é a locomoção, ou seja, uma “box” que pode ser implementada em uma estação de trem, shoppings, parques etc.',
      link: '/cases/details',
      image: WorkstationImg,
      image_card: WorkstationCard,
      logo: WorkstationLogo,
      mobile_img: WorkstationTiktokMobile,
      themeColor: '#FF0A55'
    },
  ]

  return (
    <div className={`${grid ? style.case_full_background : style.case_half_background}`}>
      <div className={`${grid ? style.grid_container : style.full_container}`}>
        <div className={style.choose_grid_background}>
          <div className={style.choose_grid_container}>
            <div className={style.choose_grid}>
              <button
                className={`${style.grid_button} ${!grid ? style.active : ''}`}
                onClick={() => setGrid(false)}
              >
                <img src={grid ? ColumnGray : ColumnPurple} alt="grid" />
              </button>

              <button
                className={`${style.grid_button} ${grid ? style.active : ''}`}
                onClick={() => setGrid(true)}
              >
                <img src={grid ? GridPurple : GridGray} alt="grid" />
              </button>
            </div>
          </div>
        </div>

        {
          cases.map((caseItem, item) => (
            <CaseItem
              key={caseItem.id}
              {...caseItem}
              next_id={item + 1 < cases.length ? cases[item + 1].id : undefined}
              grid={grid}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Cases