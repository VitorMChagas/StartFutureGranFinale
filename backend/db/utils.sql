insert into forms(full_name, email, cellphone, id_career, has_tech_knowledge, tech_knowledge, id_study_tool, urls, id_referral) values ('Someone', 'some@gmail.com', '1111111111111', '1', false, 'asd,asd,asd,asd', '1', 'linkedin/lucas,github/lucas', '2');

select * from career;
select * from referral;
select * from study_tool st;
select * from forms;

select full_name, email, cellphone, c.career, has_tech_knowledge, tech_knowledge, st.study_tool, urls, r.referral from forms f
left join career c ON c.id_career = f.id_career
left join study_tool st on st.id_study_tool = f.id_study_tool
left join referral r on r.id_referral = f.id_referral
;