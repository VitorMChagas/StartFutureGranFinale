import { Student } from "../types/Student";

export const StudentMapper = (student: Student) => {
    return {
        full_name: student.fullName,
        email: student.email,
        cellphone: student.cellphone,
        id_career: student.idCareer,
        has_tech_knowledge: student.hasTechKnowledge,
        tech_knowledge: student.techKnowledge,
        tech_skills: student.techSkills,
        id_study_tool: student.idStudyTool,
        urls: student.urls,
        id_referral: student.idReferral
    }
}