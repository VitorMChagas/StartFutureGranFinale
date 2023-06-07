import { KeyValue } from "./KeyValue";

export type Student = {
    fullName:string;
    idCareer:number;
    email:string;
    cellphone:string;
    hasTechKnowledge:boolean|undefined;
    techKnowledge:string;
    techSkills:string;
    idStudyTool:number;
    urls:string;
    idReferral:number;
}

export const studentCarrer:KeyValue = {
    '1':'Design UX/UI',
    '2':'Desenvolvedor Back-end',
    '3':'Desenvolvedor Front-end',
    '4':'Gestão de Projetos'
};

export const studentStudyTool:KeyValue = {
    '1':'notebook',
    '2':'desktop',
    '3':'dont-have'
};

export const studentReferral:KeyValue = {
    '1':'Instagram',
    '2':'TikTok',
    '3':'Linkedin',
    '4':'Youtube',
    '5':'Indicação',
    '6':'Ferramenta de pesquisa',
    '7':'Outros'
};