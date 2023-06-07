import { useEffect, useRef, useState } from 'react';
import style from '../css/SequencialSession.module.css';
import useWindowSize from '../../../hooks/useWindowSize';
import { Student } from '../../../types/Student';

interface IProps {
    student: Student;
    activeNextButton: (arg0: boolean) => void
}

const ParticipantFourthBlockSequencial: React.FC<IProps> = ({student, activeNextButton}) => {
    const [workLinkList, setWorkLinkList] = useState<string[]>(
        student.urls == '' ? [] : student.urls.split(',')
    );

    const [arrLength, setArrLength] = useState<number>(student.urls.length);
    const [text, setText] = useState<string>('');

    const { width } = useWindowSize();
    const buttonText = width && width > 660 ? "+" : "+ Adicionar";

    activeNextButton(
        arrLength > 0 ? true : false
    );

    useEffect(() => {
        arrLength > 0 ? activeNextButton(true) : activeNextButton(false);
        student.urls = workLinkList.toString();
    }, [arrLength]);

    const addButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (arrLength >= 5) {
            window.alert("Limite atingido");
            return;
        }

        if (text && text.trim() != '') {
            workLinkList.push(text);
            setArrLength(workLinkList.length);
        }
    };

    const removeButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        if (arrLength > 0) {
            var link = event.currentTarget.name;
            var index = workLinkList.indexOf(link, 0);
            if (index > -1) {
                workLinkList.splice(index, 1);
                setArrLength(workLinkList.length);
            }
        }
    };

    useEffect(() => {
        const inputText = document.getElementById('addWorkLink') as HTMLInputElement;
        inputText.value = '';
        setText('');
    }, [arrLength])

    const onTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setText(event.target.value);
    }

    return (
    <>
        <div className={style.progress_line}>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line}></hr>
        </div>
        <div className={style.block_text}>
            <h2 className={style.block_text}>
                Tem algum link que queira mostrar sobre os seus trabalhos? (Linkedin / Behance / Github / etc.)
            </h2>
            <form className={style.work_link}>
                <div>
                    <input type="text" id="addWorkLink" name="addWorkLink" 
                        placeholder='Digite aqui' onChange={onTextHandler}/>
                    <button onClick={addButtonHandler}>
                        {buttonText}
                    </button>
                </div>

                {workLinkList.map((link) => (
                    <div style={{display:"flex"}}>
                        <input type="text" disabled value={link} />
                        <button name={link} className={style.work_link_remove_btn}
                            onClick={removeButtonHandler}>x</button>
                    </div>
                ))}
            </form>
        </div>
    </>
    );   
}

export default ParticipantFourthBlockSequencial;