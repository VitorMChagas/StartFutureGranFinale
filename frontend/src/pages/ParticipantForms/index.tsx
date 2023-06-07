import { useEffect, useState } from 'react';
import { Student } from '../../types/Student';
import Home from '../Home';
import FirstSession from '../../components/ParticipantForms/FirstSession';
import SequencialSession from '../../components/ParticipantForms/SequencialSession';
import ConclusionSession from '../../components/ParticipantForms/ConclusionSession';
import StudentService from '../../services/StudentService';
import axios from 'axios';
import { BASE_URL } from '../../utils/Urls';
import { StudentMapper } from '../../utils/StudentMapper';

const ParticipantForms = () => {
    const [page, setPage] = useState<number>(0);
    const [student, setStudent] = useState<Student>(StudentService.getStudentCache());

    useEffect(() => {
        StudentService.setStudentCache(student);
    });

    const pageDisplay = () => {
        if (page === 0) {
            return <FirstSession student={student} nextSession={nextSession} />
        } else if (page === 1) {
            return <SequencialSession student={student} prevSession={prevSession} nextSession={nextSession} />
        } else if (page === 2) {
            return <ConclusionSession student={student} />
        } else {
            return <Home />
        }
    };

    const nextSession = ():void => {
        setPage((currPage) => currPage + 1);

        var currPage = page + 1;
        if (currPage >= 2) {
            axios.post<Student>(`${BASE_URL}/form/register`, StudentMapper(student))
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log('Error: ' + error);
                    return;
            });

            sessionStorage.removeItem('currStudent');
        }
    }

    const prevSession = ():void => {
        if (page > 0) {
            setPage((currPage) => currPage - 1);
        }
    }

    return (
        <div style={{backgroundColor:'#000',minHeight:'100vh'}}>
            {pageDisplay()}
        </div>
    );
}

export default ParticipantForms;
