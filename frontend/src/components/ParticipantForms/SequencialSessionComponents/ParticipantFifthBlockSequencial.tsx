import { useEffect, useRef, useState } from 'react';
import style from '../css/SequencialSession.module.css';
import { Student, studentReferral } from '../../../types/Student';

interface IProps {
    student: Student;
    activeNextButton: (arg0: boolean) => void
}

const ParticipantFifthBlockSequencial: React.FC<IProps> = ({student, activeNextButton}) => {
    const [referralId, setReferralId] = useState(student.idReferral);
    const studentSession = useRef<Student>(student);
    const referralOptions: string[] = Object.keys(studentReferral)

    activeNextButton(
        referralId !== 0 ? true : false
    );

    const handleChange = (keyStr: string):void => {
        setReferralId(Number(keyStr));
        studentSession.current.idReferral = Number(keyStr);
    }

    return (
    <>
        <div className={style.progress_line}>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
            <hr className={style.progress_line_active}></hr>
        </div>
        <div className={style.block_text}>
            <h2 className={style.block_text}>
                Últimaaaaa pergunta, como conheceu a Start Future?
            </h2>
            <form>
                <select onChange={e => handleChange(e.target.value)}>
                    <option selected disabled value={0}>Selecione aqui</option>
                    {referralOptions.map((value) => (
                        value == student.idReferral.toString()
                        ? <option selected value={student.idReferral}>{studentReferral[student.idReferral]}</option>
                        : <option value={value}>{studentReferral[value]}</option>
                    ))}
                </select>
            </form>
        </div>
    </>
    ); 
}

export default ParticipantFifthBlockSequencial;