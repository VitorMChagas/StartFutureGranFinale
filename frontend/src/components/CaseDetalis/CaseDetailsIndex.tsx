import style from './css/CaseDetails.module.css';

const CaseDetailsIndex: React.FC = () => {
    return (
        <div className={style.container_content_index}>
            <h4 className={style.case_subtitle_initial}>
                Vamos falar de cada ponto do case
            </h4>
            
            <div className={style.container_flex}>
                <ul className={style.case_text_index_anchor_container}>
                    <li>
                        <a href="#sector_1" className={style.case_text_index_anchor}>
                            1.0      Brainstorm
                        </a>
                    </li>
                    <li>
                        <a href="#sector_2" className={style.case_text_index_anchor}>
                            2.0      UX/UI
                        </a>
                    </li>
                    <li>
                        <a href="#sector_3" className={style.case_text_index_anchor}>
                            3.0      Back-end
                        </a>
                    </li>
                    <li>
                        <a href="#sector_4" className={style.case_text_index_anchor}>
                            4.0      Front-end
                        </a>
                    </li>
                    <li>
                        <a href="#sector_5" className={style.case_text_index_anchor}>
                            5.0      Gestão de projetos
                        </a>
                    </li>
                    <li>
                        <a href="#sector_6" className={style.case_text_index_anchor}>
                            6.0      Apresentação
                        </a>
                    </li>
                    <li>
                        <a href="#sector_7" className={style.case_text_index_anchor}>
                            7.0      Sobre a equipe
                        </a>
                    </li>
                </ul>

                <span className={style.case_text_index}>
                    Clique na seção que deseja ler ou apenas siga a tela.
                </span>
            </div>
            <hr/>
        </div>
    );
}

export default CaseDetailsIndex