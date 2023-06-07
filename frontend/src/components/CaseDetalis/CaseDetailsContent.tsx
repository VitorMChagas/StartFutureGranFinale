import style from './css/CaseDetails.module.css';
import iconLinkedin from '../../assets/images/icon-linkedin.svg'
import iconBehance from '../../assets/images/icon-behance.svg'
import iconGithub from '../../assets/images/icon-github.svg'
import Image4 from '../../assets/images/case_details/case-details-4.svg';
import Image5 from '../../assets/images/case_details/case-details-5.svg';
import Image6 from '../../assets/images/case_details/case-details-6.svg';
import Image7 from '../../assets/images/case_details/case-details-7.svg';
import Image8 from '../../assets/images/case_details/case-details-8.svg';
import Image9 from '../../assets/images/case_details/case-details-9.svg';
import Image10 from '../../assets/images/case_details/case-details-10.svg';
import Image11 from '../../assets/images/case_details/case-details-11.svg';
import Image12 from '../../assets/images/case_details/case-details-12.svg';
import Image13 from '../../assets/images/case_details/case-details-13.svg';
import Image15 from '../../assets/images/case_details/case-details-15.svg';
import Image16 from '../../assets/images/case_details/case-details-16.svg';
import Image17 from '../../assets/images/case_details/case-details-17.svg';
import Image18 from '../../assets/images/case_details/case-details-18.svg';
import Image19 from '../../assets/images/case_details/case-details-19.svg';
import Image20 from '../../assets/images/case_details/case-details-20.svg';
import Image21 from '../../assets/images/case_details/case-details-21.svg';
import Image22 from '../../assets/images/case_details/case-details-22.svg';
import Image23 from '../../assets/images/case_details/case-details-23.svg';
import PhotoGustavoFernandes from '../../assets/images/case_details/photo-gustavo-fernandes.png';
import PhotoGustavoVieira from '../../assets/images/case_details/photo-gustavo-vieira.png';
import PhotoMateusToni from '../../assets/images/case_details/photo-mateus-toni.png';
import PhotoSelenaSaraiva from '../../assets/images/case_details/photo-selena-saraiva.png';

const CaseDetailsContent: React.FC = () => {
    var linkedinGustavoFernandes = 'https://www.linkedin.com/in/gustavofernandesp/'
    var linkedinMateusToni = 'https://www.linkedin.com/in/mateus-toni-941853217/'
    var linkedinGustavoVieira = 'https://www.linkedin.com/in/gustavo-vieira-dev/'
    var linkedinSelenaSaraiva = 'https://www.linkedin.com/in/selena-saraiva-4248611ba/'
    var behanceGustavoFernandes = 'https://www.behance.net/gustavofernandessp22'
    var githubGustavoVieira = 'https://github.com/szvieira'
    var githubMateusToni = 'https://github.com/Mateus-Toni'

    return (
        <div className={style.container_content}>
            <h4 id='sector_1' className={style.case_subtitle}>
                1.0 - Brainstorm
            </h4>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    A Squad começou o levantamento de ideias pelo nome do produto, WORKSTATION, que foi o nome escolhido para representar esse case. Logo em seguida discutiram o que esse produto iria oferecer, quanto iria custar e seu funcionamento de ponta a ponta.
                </span>
            </div>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Com o nome e as característas em mãos, o <a className={style.link_in_text} href={linkedinGustavoFernandes} target="_blank">Gustavo Fernandes</a> integrante da turma responsável pelo design, criou o Branding do Workstation, assim criando as primeiras formas do projeto.
                </span>
            </div>

            <div className={style.container_flex}>
                <div className={style.container_image}>
                    <img src={Image4} alt="Imagem 4" className={style.case_img} />
                </div>

                <div className={style.container_image}>
                    <img src={Image5} alt="Imagem 5" className={style.case_img_responsive_big} />

                    <img src={Image6} alt="Imagem 6" className={style.case_img_responsive_big} />

                    <div className={style.container_flex_start}>
                        <img src={Image7} alt="Imagem 7" className={style.case_img_responsive_small} />

                        <img src={Image8} alt="Imagem 8" className={style.case_img_responsive_small} />
                    </div>
                </div>
            </div>

            <h4 id='sector_2' className={style.case_subtitle}>
                2.0 - UX / UI
            </h4>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Após o brainstorm iniciou o processo de discovery para a squad entender o porquê do projeto e seus respectivos problemas que deveriam ser solucionados. Foram realizados diversos levantamentos de dados analisados por pesquisadores sobre a pandemia e como os trabalhadores se adaptaram a esse "Novo normal".
                </span>
            </div>

            <img src={Image9} alt="Imagem 9" className={style.case_img} />

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Com o objetivo mais claro em mãos, o squad começou a desenhar os seus primeiros wireframes para validar ideias e alinhar com o time de back-end as possibilidades do que fazer. Considerando a tecnologia utilizada e o tempo disponibilizado.
                </span>
            </div>

            <div className={style.container_flex}>
                <div className={style.container_image}>
                    <img src={Image10} alt="Imagem 10" className={style.case_img} />
                </div>

                <div className={style.container_image}>
                    <img src={Image11} alt="Imagem 11" className={style.case_img} />
                </div>
            </div>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Utilizando a base desenhada e alinhada através dos wireframes, o designer migrou todas as ideias levantadas para a interface final.
                </span>
            </div>

            <div className={style.container_flex}>
                <div className={style.container_image}>
                    <img src={Image12} alt="Imagem 12" className={style.case_img} />
                </div>

                <div className={style.container_image}>
                    <img src={Image13} alt="Imagem 13" className={style.case_img} />
                </div>
            </div>

            <h4 id='sector_3' className={style.case_subtitle}>
                3.0 - Back-end
            </h4>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    O time de back-end foi representado pelo <a className={style.link_in_text} href={linkedinMateusToni} target="_blank">Mateus Toni</a>, que foi responsável por toda a aplicação Workstation, disponibilizando um ambiente para as integrações.
                </span>
            </div>

            <h5 className={style.case_text_bold}>
                O que foi disponibilizado:
            </h5>

            <div className={style.case_text_container}>
                <ul className={style.case_text}>
                    <li>Diagramas de caso de uso;</li>
                    <li>Diagramas de caso de teste;</li>
                    <li>Fluxograma da Jornada do Usuário;</li>
                    <li>Diagrama do banco de dados.</li>
                </ul>
            </div>

            <h5 className={style.case_text_bold}>
                O que era esperado:
            </h5>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Aplicação Restfull com endpoints protegidos por JWT e conexão com banco de dados, e a utilização de boas praticas de desenvolvimento. De início foi criado o repositório back-end e a estrutura da aplicação flask, juntamente com o banco de dados seguindo o seguinte diagrama:
                </span>
            </div>

            <img src={Image15} alt="Imagem 15" className={style.case_img} />

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Com a criação de CRUDs necessários para o funcionamento essencial da aplicação (MVP) foi a hora de criar os endpoints e conectar cada um deles com uma chamada ao banco de dados. Realizado todo o fluxo e com testes feitos, a hora de conectar com o front-end finalmente chegou, com todas as requisições vindo agora de uma outra aplicação por meio das comunicações HTTP e protegidas por JWT. Foi realizado algumas correções que não foram previstas na lógica inicial, porém com a aplicação pronta tinha chegado a hora de preparar a apresentação final (pitch), contando em detalhes como foi a experiência do bootcamp e o que foi aprendido no processo.
                </span>
            </div>

            <h5 className={style.case_text_bold}>
                Tecnologias utilizadas
            </h5>

            <div className={style.case_text_container}>
                <ul className={style.case_text}>
                    <li>Flask;</li>
                    <li>MySQL;</li>
                    <li>JWT;</li>
                    <li>Docker;</li>
                    <li>Git e GitHub;</li>
                    <li>Comunicação Restfull.</li>
                </ul>
            </div>

            <h4 id='sector_4' className={style.case_subtitle}>
                4.0 - Front-end
            </h4>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    O time de front-end foi representado pelo <a className={style.link_in_text} href={linkedinGustavoVieira} target="_blank">Gustavo Vieira</a>, responsável por toda a parte visual do sistema Workstation. Em mãos tinha as telas e protótipos navegáveis das telas necessárias, alinhadas internamente com os Staff's e toda a equipe participante.
                </span>
            </div>

            <h5 className={style.case_text_bold}>
                O que era esperado:
            </h5>

            <div className={style.case_text_container}>
                <ul className={style.case_text}>
                    <li>Criação de telas com o layout definido pelo designer;</li>
                    <li>Código limpo e bem estruturado;</li>
                    <li>Responsividade (visualização web e mobile);</li>
                    <li>Validação e funcionalidade de elementos interativos.</li>
                </ul>
            </div>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Assim como a jornada do back-end, inicialmente foi feita a criação do ambiente de desenvolvimento (repositórios e estrutura do projeto). Depois se seguiu para o planejamento da estrutura das primeiras telas, montando como serão escritas os níveis de hierarquia do HTML e CSS.
                </span>
            </div>

            <img src={Image16} alt="Imagem 16" className={style.case_img} />

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    O desenvolvimento seguiu para a criação e montagem das telas e seus respectivos fluxos. Focando na visualização Web. Após construção do Web foi convertido para uma visualização Mobile, ou seja, adicionado a responsividade das telas para sua visualização em qualquer tela. Nas telas de Login, Criação de Usuários e Recuperação de senha, foi adicionado as respectivas validações dos dados dos campos, por exemplo CPF, E-mail etc. Foi finalizado com a publicação do site para visualização no sistema Netlify, correção de bugs, revisão de textos e conexão Front-end e Back-end. Prática e mais prática para o pitch, e a apresentação final do projeto junto com o que foi aprendido na trajetória.
                </span>
            </div>

            <h5 className={style.case_text_bold}>
                Tecnologias utilizadas:
            </h5>

            <div className={style.case_text_container}>
                <ul className={style.case_text}>
                    <li>HTML;</li>
                    <li>CSS;</li>
                    <li>JavaScript;</li>
                    <li>Bootstrap;</li>
                    <li>Git e Github;</li>
                    <li>Deploy em nuvem Netlify.</li>
                </ul>
            </div>

            <h4 id='sector_5' className={style.case_subtitle}>
                5.0 - Gestão de projetos
            </h4>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Para facilitar a organização do projeto, decidimos utilizar a metodologia ágil chamada SCRUM. Com a liderança de projetos feita pela <a className={style.link_in_text} href={linkedinSelenaSaraiva} target="_blank">Selena Saraiva</a>  a equipe se reunia uma vez por dia para realizar sua “Daily” com o objetivo de compartilhar o que estavam fazendo e seus impedimentos, dessa forma a nossa gestora de projetos conseguia organizar e acompanhar cada demanda feita. Essas demandas foram planejadas e criadas 1 vez a cada 2 semanas em uma cerimonia chamada de “Planning” em que, com base no planejamento e especificações do projeto, a gestora criava as “Tasks” para cada integrante trabalhar nas próximas 2 semanas, chamamos essa organização de “Sprint de 2 semanas”. A cada encerramento de “Sprint” tivemos entregas e a cada início de “Sprint” novas tarefas.
                </span>
            </div>

            <img src={Image17} alt="Imagem 17" className={style.case_img} />            

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    A organização de todas as tarefas eram feitas através do “Kanban”, assim a gestora tinha visibilidade e controle de tudo que estavam fazendo nas Sprints atuais, tudo o que entregaram nas passadas e também tudo que precisava ser feito nas futuras.
                </span>
            </div>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    As “Task” eram criadas e documentadas da seguinte forma: 
                </span>

                <ul className={style.case_text}>
                    <li>Status (Qual momento essa tarefa está);</li>
                    <li>Release (Qual pacote de entrega essa tarefa pertence);</li>
                    <li>Sprint (Qual sprint ela foi desenvolvida);</li>
                    <li>Journey (Qual fluxo essa tarefa se trata);</li>
                    <li>Squad/Participante (Quem está responsável por essa tarefa).</li>
                </ul>
            </div>

            <img src={Image18} alt="Imagem 18" className={style.case_img} />            

            <img src={Image19} alt="Imagem 19" className={style.case_img} />            

            <h4 id='sector_6' className={style.case_subtitle}>
                6.0 - Apresentação
            </h4>

            <div className={style.case_text_container}>
                <span className={style.case_text}>
                    Nada melhor do que finalizar o seu primeiro projeto com a sua primeira apresentação. Os integrantes foram até um escritório apresentar o seu projeto para pessoas de diversas aréas da tecnologia. O objetivo da apresentação foi explicar para pessoas de fora o porquê do projeto, quais foram os problemas que iriam solucionar e principalmente o que cada um fez durante esses 3 meses. Além de mostrar o que foram capazes de aprender e desenvolver em um curto período, os mesmos criavam o seu primeiro “Networking”.
                </span>
            </div>

            <div className={style.case_text_container}>
                <span className={style.case_text_bold}>
                    Essa última etapa do bootcamp é o que chamamos de “Cereja do bolo”, pois em 3 meses foram ensinados diversos itens da tecnologia essenciais para o mercado de trabalho, mas durante esta etapa foi mostrado em aplicação como a comunicação é o fator mais importante da carreira de cada um, como saber apresentar o seu trabalho, suas opiniões e também, como receber e aprender com feedbacks construtivos.
                </span>
            </div>

            <img src={Image20} alt="Imagem 20" className={style.case_img} />

            <div className={style.container_flex}>
                <div className={style.container_image}>
                    <img src={Image21} alt="Imagem 21" className={style.case_img} />
                </div>

                <div className={style.container_image}>
                    <img src={Image22} alt="Imagem 22" className={style.case_img} />
                </div>
            </div>

            <img src={Image23} alt="Imagem 23" className={style.case_img} />

            <h4 id='sector_7' className={style.case_subtitle}>
                7.0 - Sobre a equipe
            </h4>

            <div>
                <div className={style.container_flex}>
                    <div className={style.case_user_card}>
                        <img src={PhotoGustavoFernandes} alt="Foto Gustavo Fernandes" className={style.case_card_img} />

                        <div className={style.container_flex}>
                            <div className={style.case_card_text_container}>
                                <span className={style.case_card_text_title}>
                                    Gustavo Fernandes
                                </span> <br/>

                                <span className={style.case_card_text}>
                                    Designer UX/UI
                                </span>
                            </div>

                            <div className={style.container_flex_card_icons}>
                                <a href={linkedinGustavoFernandes} target="_blank">
                                    <img src={iconLinkedin} alt="icon from linkedin" />
                                </a>

                                <a href={behanceGustavoFernandes} target="_blank">
                                    <img src={iconBehance} alt="icon from behance" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={style.case_user_card}>
                        <img src={PhotoGustavoVieira} alt="Foto Gustavo Vieira" className={style.case_card_img} />

                        <div className={style.container_flex}>
                            <div className={style.case_card_text_container}>
                                <span className={style.case_card_text_title}>
                                    Gustavo Vieira
                                </span> <br/>

                                <span className={style.case_card_text}>
                                    Desenvolvedor Front-end
                                </span>
                            </div>

                            <div className={style.container_flex_card_icons}>
                                <a href={linkedinGustavoVieira} target="_blank">
                                    <img src={iconLinkedin} alt="icon from linkedin" />
                                </a>

                                <a href={githubGustavoVieira} target="_blank">
                                    <img src={iconGithub} alt="icon from github" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.container_flex}>
                    <div className={style.case_user_card}>
                        <img src={PhotoMateusToni} alt="Foto Mateus Toni" className={style.case_card_img} />

                        <div className={style.container_flex}>
                            <div className={style.case_card_text_container}>
                                <span className={style.case_card_text_title}>
                                    Mateus Toni
                                </span> <br/>

                                <span className={style.case_card_text}>
                                    Desenvolvedor Back-end
                                </span>
                            </div>

                            <div className={style.container_flex_card_icons}>
                                <a href={linkedinMateusToni} target="_blank">
                                    <img src={iconLinkedin} alt="icon from linkedin" />
                                </a>

                                <a href={githubMateusToni} target="_blank">
                                    <img src={iconGithub} alt="icon from github" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={style.case_user_card}>
                        <img src={PhotoSelenaSaraiva} alt="Foto Selena Saraiva" className={style.case_card_img} />

                        <div className={style.container_flex}>
                            <div className={style.case_card_text_container}>
                                <span className={style.case_card_text_title}>
                                    Selena Saraiva
                                </span> <br/>

                                <span className={style.case_card_text}>
                                    Gerente de Projetos
                                </span>
                            </div>

                            <div className={style.container_flex_card_icons}>
                                <a href={linkedinSelenaSaraiva} target="_blank">
                                    <img src={iconLinkedin} alt="icon from linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseDetailsContent