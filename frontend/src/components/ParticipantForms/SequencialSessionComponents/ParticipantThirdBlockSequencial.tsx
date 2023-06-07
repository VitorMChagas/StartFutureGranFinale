import style from '../css/SequencialSession.module.css';
import NotebookIcon from '../../../assets/images/icon-notebook-purple.svg';
import ComputerIcon from '../../../assets/images/icon-computer-purple.svg';
import DontHaveIcon from '../../../assets/images/icon-dont-have-purple.svg';
import { useEffect, useRef, useState } from 'react';
import { Student, studentStudyTool } from '../../../types/Student';
import useWindowSize from '../../../hooks/useWindowSize';

interface IProps {
    student: Student;
    activeNextButton: (arg0: boolean) => void
}

const ParticipantThirdBlockSequencial: React.FC<IProps> = ({student, activeNextButton}) => {
    const studentSession = useRef<Student>(student);

    const setCardState = (studyToolKey: number, studyToolExpected: string, btnStatus: boolean):boolean => {
        if (btnStatus && (studentStudyTool[studyToolKey] == studyToolExpected)) {
            studentSession.current.idStudyTool = 0;
            return false;
        }
        return studentStudyTool[studyToolKey] == studyToolExpected;
    }

    const [notebookBtn, setNotebookBtn] = useState(setCardState(student.idStudyTool, 'notebook', false));
    const [desktopBtn, setDesktopBtn] = useState(setCardState(student.idStudyTool, 'desktop', false));
    const [dontHaveBtn, setDontHaveBtn] = useState(setCardState(student.idStudyTool, 'dont-have', false));

    const { width } = useWindowSize();

    activeNextButton(
        studentSession.current.idStudyTool !== 0 ? true : false
    );

    const buttonHandler = (studyToolKey: string) => {
        var key = Number(studyToolKey);
        studentSession.current.idStudyTool = key;
        setNotebookBtn(setCardState(key, 'notebook', notebookBtn));
        setDesktopBtn(setCardState(key, 'desktop', desktopBtn));
        setDontHaveBtn(setCardState(key, 'dont-have', dontHaveBtn));
    };

    return (
    <>
        <div className={style.progress_line}>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line}></hr>
            <hr className={style.progress_line}></hr>
        </div>
        <div className={style.block_text}>
            <h2 className={style.block_text}>
                Selecione qual sua ferramenta para estudo pessoal
            </h2>
            <div className={style.study_tools_container} style={{display: width && width > 660 ? "flex" : "none"}}>
                <div className={style.study_tool_card} style={{border: notebookBtn ? "solid 3px #782DD4" : "none"}}
                    onClick={e => buttonHandler('1')}>
                    <img src={NotebookIcon} alt='Notebook Purple Icon' />
                    <label>Notebook</label>
                    <button>
                        <div className={notebookBtn ? style.radio_button_active : style.radio_button}></div>
                    </button>
                </div>
                <div className={style.study_tool_card} style={{border: desktopBtn ? "solid 3px #782DD4" : "none"}}
                    onClick={e => buttonHandler('2')}>
                    <img src={ComputerIcon} alt='Desktop Purple Icon' />
                    <label>Desktop</label>
                    <button>
                        <div className={desktopBtn ? style.radio_button_active : style.radio_button}></div>
                    </button>
                </div>
                <div className={style.study_tool_card} style={{border: dontHaveBtn ? "solid 3px #782DD4" : "none"}}
                    onClick={e => buttonHandler('3')}>
                    <img src={DontHaveIcon} alt='Dont Have Purple Icon' />
                    <label>Não tenho</label>
                    <button>
                        <div className={dontHaveBtn ? style.radio_button_active : style.radio_button}></div>
                    </button>
                </div>
            </div>

            <div className={style.study_tools_container} style={{display: width && width <= 660 ? "block" : "none"}}>
                <div className={style.study_tool_card} style={{border: notebookBtn ? "solid 3px #782DD4" : "none"}}
                    onTouchStart={e => buttonHandler('1')}>
                    <div className={style.study_tool_card_label_mobile}>
                        <button>
                            <div className={notebookBtn ? style.radio_button_active : style.radio_button}></div>
                        </button>
                        <label>Notebook</label>
                    </div>
                    <img src={NotebookIcon} alt='Notebook Purple Icon' />
                </div>
                <div className={style.study_tool_card} style={{border: desktopBtn ? "solid 3px #782DD4" : "none"}}
                    onTouchStart={e => buttonHandler('2')}>
                    <div className={style.study_tool_card_label_mobile}>
                        <button>
                            <div className={desktopBtn ? style.radio_button_active : style.radio_button}></div>
                        </button>
                        <label>Desktop</label>
                    </div>
                    <img src={ComputerIcon} alt='Desktop Purple Icon' />
                </div>
                <div className={style.study_tool_card} style={{border: dontHaveBtn ? "solid 3px #782DD4" : "none"}}
                    onTouchStart={e => buttonHandler('3')}>
                    <div className={style.study_tool_card_label_mobile}>
                        <button>
                            <div className={dontHaveBtn ? style.radio_button_active : style.radio_button}></div>
                        </button>
                        <label>Não tenho</label>
                    </div>
                    <img src={DontHaveIcon} alt='Dont Have Purple Icon' />
                </div>
            </div>
        </div>
    </>
  );
}

export default ParticipantThirdBlockSequencial;