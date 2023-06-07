import style from './css/CaseDetails.module.css';
import Image1 from '../../assets/images/case_details/case-details-1.svg';
import Image2 from '../../assets/images/case_details/case-details-2.svg';
import Image3 from '../../assets/images/case_details/case-details-3.svg';
import { Link } from 'react-router-dom';

const CaseDetailsIntroduction: React.FC = () => {
    return (
        <div className={style.container}>
            <div>
                <span className={style.case_previous_page_text}>
                    Cases / <strong>Workstation</strong>
                </span>
            </div>

            <h1 className={style.case_title}>
                Workstation
            </h1>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    O Workstation foi um case desenvolvido em bootcamp e seu objetivo é atender a demanda de alugueis de espaços para trabalhos individuais que necessitam de uma sala equipada com tudo o que um escritório normal teria. Seu diferencial é a locomoção, ou seja, uma “box” que pode ser implementada em uma estação de trem, shoppings, parques etc.
                </span>
            </div>

            <img src={Image1} alt="Imagem 1" className={style.case_img} />

            <h4 className={style.case_subtitle_initial}>
                O home office é conhecido há um bom tempo pelos trabalhadores de tecnologia e, com a pandemia, se tornou uma forma de trabalho comum.
            </h4>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Com a necessidade imediata de se adaptar ao novo modo de trabalho, algumas pessoas não conseguiram um “espacinho” em casa ou uma mesa adequada para trabalhar. Após 2 anos de pandemia percebemos os ganhos e as perdas de trabalhar em casa. Pensando nisso criamos o case para o primeiro bootcamp da Start Future. Um case que nos ajude a se adaptar ao “novo normal”, visto que, muitas empresas ainda mantém o estilo home office, seja por escolha própria, ou por motivos mais complexos, por exemplo a venda dos seus escritórios ou a necessidade da contratação de profissionais de outros estados/países.
                </span>
            </div>

            <h4 className={style.case_subtitle_initial}>
                Nas suas marcar, apontar... Já
            </h4>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Juntando todos os detalhes sobre o case apresentados iniciamos uma nova turma extremamente animada e com motivação para chegar até o final. Essa turma teve 4 integrantes que foram responsáveis pelo design, desenvolvimento, testes e gestão de projetos. Assim formando a nossa SQUAD.
                </span>
            </div>

            <div>
                <div className={style.container_flex}>
                    <div className={style.container_image}>
                        <img src={Image2} alt="Imagem 2" className={style.case_img} />
                    </div>

                    <div className={style.container_image}>
                        <img src={Image3} alt="Imagem 3" className={style.case_img} />
                    </div>
                </div>

                <div className={style.case_img_subtitle_container}>
                    <span className={style.case_img_subtitle}>A equipe foi separada por cargos e em seguida recebeu o nosso Welcome Kit</span>
                </div>
            </div>

            <hr/>
        </div>
    );
}

export default CaseDetailsIntroduction;