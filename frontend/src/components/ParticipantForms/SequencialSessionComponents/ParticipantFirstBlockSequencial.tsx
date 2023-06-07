import { useRef, useState } from 'react';
import style from '../css/SequencialSession.module.css';
import { Student } from '../../../types/Student';

interface IProps {
    student: Student;
    activeNextButton: (arg0: boolean) => void
}

const ParticipantFirstBlockSequencial: React.FC<IProps> = ({student, activeNextButton}) => {
    const studentSession = useRef<Student>(student);

    const maxNumberText: number = 280;

    const [textNumberLeft, setTextNumberLeft] = useState<number>(maxNumberText);
    const [yesButton, setYesButton] = useState(
        !student.hasTechKnowledge ? false : student.hasTechKnowledge
    );
    const [noButton, setNoButton] = useState(
        !student.hasTechKnowledge ? false : !student.hasTechKnowledge
    );

    activeNextButton(
        student.hasTechKnowledge == undefined ? false : true
    );

    const buttonHandler = (buttonName: string) => {
        var hasTechKnowledge: boolean|undefined = 'yes' === buttonName;
        if ((yesButton && hasTechKnowledge) || (noButton && !hasTechKnowledge)) {
            hasTechKnowledge = undefined;
            setYesButton(false);
            setNoButton(false);
        } else {
            setYesButton(hasTechKnowledge);
            setNoButton(!hasTechKnowledge);
        }

        studentSession.current.hasTechKnowledge = hasTechKnowledge;
    };

    const textCounterHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();

        var text = event.target.value;
        var numerLeft = maxNumberText-text.length;
        setTextNumberLeft(numerLeft);
        
        studentSession.current.techKnowledge = text;
    };

    return (
        <>
        <div className={style.progress_line}>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line}></hr>
            <hr className={style.progress_line}></hr>
            <hr className={style.progress_line}></hr>
            <hr className={style.progress_line}></hr>
        </div>
        <div className={style.block_text}>
            <h2>
                Atualmente você possui conhecimento em alguma área na tecnologia?
            </h2>
            <div className={style.tech_knowledge_container}>
                <div className={style.tech_knowledge}>
                    <button onClick={e => buttonHandler(e.currentTarget.name)} name="yes">
                        <div className={yesButton ? style.radio_button_active : style.radio_button}></div>
                    </button>
                    <label>Sim</label>
                </div>
                <div className={style.tech_knowledge}>
                    <button onClick={e => buttonHandler(e.currentTarget.name)} name="no">
                        <div className={noButton ? style.radio_button_active : style.radio_button}></div>
                    </button>
                    <label>Não</label>
                </div>
            </div>
            <div style={{display: yesButton ? "grid" : "none"}}>
                <h2>
                    Conte um pouco sobre seus conhecimentos (<strong>{textNumberLeft}</strong> caracteres)
                </h2>
                <form className={style.tech_knowledge_text_area}>
                    <textarea id="techKnowledgeText" name="techKnowledgeText" maxLength={maxNumberText}
                        placeholder='Digite aqui' onChange={textCounterHandler} defaultValue={student.techKnowledge} />
                </form>
            </div>
        </div>
        </>
    );
}

export default ParticipantFirstBlockSequencial;