import style from './css/SequencialSession.module.css';
import ParticipantFirstBlockSequencial from './SequencialSessionComponents/ParticipantFirstBlockSequencial';
import { useState } from 'react';
import ParticipantSecondBlockSequencial from './SequencialSessionComponents/ParticipantSecondBlockSequencial';
import ParticipantThirdBlockSequencial from './SequencialSessionComponents/ParticipantThirdBlockSequencial';
import ParticipantFourthBlockSequencial from './SequencialSessionComponents/ParticipantFourthBlockSequencial';
import ParticipantFifthBlockSequencial from './SequencialSessionComponents/ParticipantFifthBlockSequencial';
import { Student } from '../../types/Student';

interface ISequencialSessionProps {
    student: Student;
    prevSession: () => void
    nextSession: () => void
}

const SequencialSession: React.FC<ISequencialSessionProps> = ({student, prevSession, nextSession}) => {
    const firstName = student.fullName.split(' ')[0];

    const [page, setPage] = useState(0);
    const [nextButton, setNextButton] = useState(false);

    const pageDisplay = () => {
        if (page === 0) {
            return <ParticipantFirstBlockSequencial student={student} activeNextButton={activeNextButton} />
        } else if (page === 1) {
            return <ParticipantSecondBlockSequencial student={student} activeNextButton={activeNextButton} />
        } else if (page === 2) {
            return <ParticipantThirdBlockSequencial student={student} activeNextButton={activeNextButton} />
        } else if (page === 3) {
            return <ParticipantFourthBlockSequencial student={student} activeNextButton={activeNextButton} />
        } else {
            return <ParticipantFifthBlockSequencial student={student} activeNextButton={activeNextButton} />
        }
    };

    const nextBlock = ():void => {
        if (page < 4) {
            setPage((currPage) => currPage + 1);
        } else {
            nextSession();
        }
    }

    const prevBlock = ():void => {
        if (page > 0) {
            setPage((currPage) => currPage - 1);
        } else {
            prevSession();
        }
    }

    const activeNextButton = (isActive :boolean) :void => {
        setNextButton(isActive);
    }

    return (
        <div className={style.container_grid}>
            <div>
                <button className={style.top_back_session_button} onClick={() => prevSession()}>
                    <div className={style.left_arrow}></div> Voltar as informações pessoais
                </button>
                <div className={style.session_title}>
                    <h1>
                        Perfeito <strong>{firstName}</strong>, agora vamos entender melhor sobre o seu momento
                    </h1>
                </div>
                <div className={style.page_display}>
                    {pageDisplay()}
                </div>
                <div className={style.session_buttons}>
                    <button className={style.back_session_button}
                        onClick={() => prevBlock()}>
                        Voltar
                    </button>
                    <button className={style.next_session_button} disabled={!nextButton} 
                        style={{backgroundColor: nextButton ? "#782DD4" : "gray"}}
                        onClick={() => nextBlock()}>
                        Prosseguir
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SequencialSession;