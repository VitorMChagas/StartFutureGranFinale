import React, { useEffect, useRef, useState } from 'react';
import style from './css/FirstSession.module.css';
import FirstSessionForms from './FirstSessionComponents/FirstSessionForms';
import { Student, studentCarrer } from '../../types/Student';
import { getInitials } from '../../utils/StringUtils';
import StudentService from '../../services/StudentService';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../utils/Urls';

interface IFirstSessionProps {
    student:Student
    nextSession: () => void
}

type LabelBox = {
    initials:string;
    fullName:string;
    careerValue:string;
}

const FirstSession: React.FC<IFirstSessionProps> = ({student, nextSession}) => {
    const studentFirstSession = useRef<Student>(student);
    const [studentEmailExist, setStudentEmailExist] = useState(false);
    const [studentPhoneExist, setStudentPhoneExist] = useState(false);
    const [emailIncorrect, setEmailIncorrect] = useState(false);
    const [phoneIncorrect, setPhoneIncorrect] = useState(false);
    const [labelBox, setLabelBox] = useState<LabelBox>({
        initials: '',
        fullName: 'Nome aluno',
        careerValue: 'Cargo'
    });

    const handleChangeCareer = (careerKey: string):void => {
        setLabelBox({
            ...labelBox,
            careerValue: studentCarrer[careerKey],
        });

        studentFirstSession.current.idCareer = Number(careerKey);
    }

    const handleChangeName = (fullName: string):void => {
        setLabelBox({
            ...labelBox,
            initials: getInitials(fullName), 
            fullName: fullName,
        });
        
        studentFirstSession.current.fullName = fullName;
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        
        studentFirstSession.current.email = event.target.value;
    }

    const handleChangePhone = (phone?: 'E164Number' | undefined) => {
        if(phone !== undefined) {
            studentFirstSession.current.cellphone = phone.toString().replace('+','0');
        }
    }

    const validateForms = ():void => {
        setStudentPhoneExist(false);
        setPhoneIncorrect(false);
        setStudentEmailExist(false);
        setEmailIncorrect(false);

        if (!studentFirstSession.current.fullName || studentFirstSession.current.fullName.trim() == '') {
            return;
        }
        if (!studentFirstSession.current.email || studentFirstSession.current.email.trim() == '') {
            return;
        }
        if (!studentFirstSession.current.cellphone || studentFirstSession.current.cellphone.trim() == '') {
            return;
        }
        if (!studentFirstSession.current.idCareer || studentFirstSession.current.idCareer == 0) {
            return;
        }
        if (emailIncorrect) {
            alert('Email inválido!');
            return;
        }
        if (phoneIncorrect) {
            alert('Telefone inválido!');
            return;
        }
        if (studentEmailExist || studentPhoneExist) {
            alert('Aluno já cadastrado, agora só aguardar nossa resposta ;)');
            return;
        }

        nextSession();
    }

    useEffect(() => {
        axios.get<Student>(`${BASE_URL}/form/email/${studentFirstSession.current.email}`)
            .then(respose => {
                setStudentEmailExist(false);
            }).catch((reason: AxiosError) => {
                if (reason.response!.status === 409) {
                    setStudentEmailExist(true);
                } else if (reason.response!.status === 422) {
                    setEmailIncorrect(true);
                }
        });
    }, [validateForms]);

    useEffect(() => {
        axios.get<Student>(`${BASE_URL}/form/cellphone/${studentFirstSession.current.cellphone}`)
            .then(respose => {
                setStudentPhoneExist(false);
            }).catch((reason: AxiosError) => {
                if (reason.response!.status === 409) {
                    setStudentPhoneExist(true);
                } else if (reason.response!.status === 422) {
                    setPhoneIncorrect(true);
                }
        });
    }, [validateForms]);

    return (
        <div className={style.session_grid}>
            <div className={style.label_container}>
                <div className={style.label_box}>
                    <div className={style.box_photo}>
                        <label>{labelBox.initials}</label>
                    </div>

                    <div className={style.box_text}>
                        <h1>{labelBox.fullName}</h1>

                        <label>{labelBox.careerValue}</label>
                    </div>
                </div>

                <div className={style.label_tag}>
                    Designer
                </div>
            </div>
            <div className={style.forms_container}>
                <h1>
                    Nos informe mais sobre você :)
                </h1>

                <FirstSessionForms 
                    student={studentFirstSession.current} 
                    handleChangeName={handleChangeName} 
                    handleChangeCareer={handleChangeCareer}
                    handleChangeEmail={handleChangeEmail}
                    handleChangePhone={handleChangePhone} />

                <button onClick={validateForms}>
                    Prosseguir
                </button>
            </div>
        </div>
    );
}

export default FirstSession;