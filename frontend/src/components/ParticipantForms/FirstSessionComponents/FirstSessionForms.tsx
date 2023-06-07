import { useRef } from 'react';
import style from '../css/FirstSession.module.css';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { Student, studentCarrer } from '../../../types/Student';

interface IFirstSessionFormsProps {
    student: Student;
    handleChangeName:(fullName:string) => void;
    handleChangeCareer:(career:string) => void;
    handleChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePhone: (phone?: 'E164Number' | undefined) => void;
}

const FirstSessionForms: React.FC<IFirstSessionFormsProps> = ({
    student, 
    handleChangeName, 
    handleChangeCareer, 
    handleChangeEmail, 
    handleChangePhone
}) => {
    const formValues = {
        fullName: student.fullName,
        careerOptions: Object.keys(studentCarrer),
        email: student.email,
        phone: student.cellphone ? '+' + student.cellphone.slice(1) : ''
    }

    return (
        <>
        <form className={style.input_forms}>
            <input type="text" id="name" name="name" required placeholder='Nome completo' 
                onChange={e => handleChangeName(e.target.value)} maxLength={50}
                defaultValue={formValues.fullName} />

            <select onChange={e => handleChangeCareer(e.target.value)}>
                <option selected disabled>Qual área deseja entrar no bootcamp?</option>
                {formValues.careerOptions.map((value) => (
                    value == student.idCareer.toString()
                    ? <option selected value={student.idCareer}>{studentCarrer[student.idCareer]}</option>
                    : <option value={value}>{studentCarrer[value]}</option>
                ))}
            </select>

            <input type="email" id="email" name="email" required placeholder='E-mail' 
                onChange={handleChangeEmail} defaultValue={formValues.email}/>

            <PhoneInput className={style.phone_country} placeholder='Celular' defaultCountry="BR" 
                onChange={handleChangePhone} value={formValues.phone}/>
        </form>
        </>
    );
}

export default FirstSessionForms;