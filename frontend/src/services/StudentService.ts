import axios, { AxiosError } from "axios";
import { Student } from "../types/Student";
import { BASE_URL } from "../utils/Urls";

class StudentService {
    getStudentCache = ():Student => {
        var student:Student = {
            fullName:'',
            idCareer:0,
            email:'',
            cellphone:'',
            hasTechKnowledge:undefined,
            techKnowledge:'',
            techSkills:'',
            idStudyTool:0,
            urls:'',
            idReferral:0
        };

        var studentStr = sessionStorage.getItem('currStudent');
        if (studentStr) {
            student = JSON.parse(studentStr);
        }

        return student;
    }

    setStudentCache = (student:Student):void => {
        sessionStorage.setItem('currStudent', JSON.stringify(student));
    }
}

export default new StudentService();