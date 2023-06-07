import { useEffect, useRef, useState } from 'react';
import style from '../css/SequencialSession.module.css';
import useWindowSize from '../../../hooks/useWindowSize';
import { Student } from '../../../types/Student';

interface IProps {
    student: Student;
    activeNextButton: (arg0: boolean) => void
}

const ParticipantSecondBlockSequencial: React.FC<IProps> = ({student, activeNextButton}) => {
    const [arrLength, setArrLength] = useState<number>(student.techSkills ? student.techSkills.length : 0);
    const [wishedTechText, setWishedTechText] = useState<string>('');
    const [wishedTechList, setWishedTechList] = useState<string[]>(
        (!student.techSkills || student.techSkills == '') ? [] : student.techSkills.split(',')
    );

    const { width } = useWindowSize();

    useEffect(() => {
        arrLength > 0 ? activeNextButton(true) : activeNextButton(false);

        student.techSkills = wishedTechList.toString();
        const inputText = document.getElementById('wishedTechText') as HTMLInputElement;
        inputText.value = '';
        setWishedTechText('');
    }, [arrLength]);

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key == 'Enter'){
            event.preventDefault();
            saveWishedTechList();         
        }
    }

    const addButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        saveWishedTechList();
    }

    const onTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setWishedTechText(event.target.value);
    }

    const onClickWishedTechHandler = (wishedTechText: string) => {
        if (arrLength > 0) {
            const index = wishedTechList.indexOf(wishedTechText, 0);
            if (index > -1) {
                wishedTechList.splice(index, 1);
                setArrLength(wishedTechList.length);
            }
        }
    }

    const saveWishedTechList = () => {
        if (arrLength >= 6) {
            window.alert("Limite atingido");
            return;
        }

        if (wishedTechText 
                && wishedTechText.trim() != ''
                && wishedTechText.replaceAll(',',' ').trim() != '') {
            wishedTechList.push(wishedTechText.replaceAll(',','|'));
            setArrLength(wishedTechList.length);
        }
    }

    return (
    <>
        <div className={style.progress_line}>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line}></hr>
            <hr className={style.progress_line}></hr>
            <hr className={style.progress_line}></hr>
        </div>
        <div className={style.block_text} 
            style={{
                display: width && width > 660 ? "flex" : "block",
                justifyContent:"space-between"
            }}>
            <div className={style.wished_tech_text}>
                <h2>
                    Digite os seus interesses em tecnologia (Max 6)
                </h2>
                <label style={{display: width && width > 660 ? "block" : "none"}}>
                    Digite 1 interesse por vez e aperte “Enter” para adicionar na listagem
                </label>
                <form>
                    <input type="text" id="wishedTechText" name="wishedTechText" maxLength={40}
                        placeholder='Digite aqui' onKeyDown={onKeyDown} onChange={onTextHandler} />
                </form>
            </div>
            <div className={style.wished_tech_button} style={{display: width && width <= 660 ? "block" : "none"}}>
                <button onClick={addButtonHandler}>+ Adicionar</button>
            </div>
            <div className={style.wished_tech_label}>
                {wishedTechList.map((wishedTech) => (
                    <div className={style.wished_tech_option} onClick={() => onClickWishedTechHandler(wishedTech)}>
                        <label>{wishedTech}</label>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}

export default ParticipantSecondBlockSequencial;