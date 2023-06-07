create database startfuture;

create schema website;

set schema 'website';

CREATE TABLE website.career (
	id_career int2 NOT NULL,
	career varchar(50) NOT NULL,
	CONSTRAINT career_pk PRIMARY KEY (id_career)
);

CREATE TABLE website.referral (
	id_referral int2 NOT NULL,
	referral varchar(50) NULL,
	CONSTRAINT referral_pk PRIMARY KEY (id_referral)
);

CREATE TABLE website.study_tool (
	id_study_tool int2 NOT NULL,
	study_tool varchar(50) NOT NULL,
	CONSTRAINT study_tool_pk PRIMARY KEY (id_study_tool)
);

CREATE TABLE website.forms (
	id serial4 NOT NULL,
	full_name varchar(150) NOT NULL,
	email varchar(100) NOT NULL,
	cellphone varchar(14) NOT NULL,
	id_career int2 NOT NULL,
	has_tech_knowledge bool NOT NULL,
	tech_knowledge varchar(255) NULL,
	tech_skills varchar(255) NULL,
	id_study_tool int2 NOT NULL,
	urls varchar(255) NULL,
	id_referral int2 NOT NULL,
	CONSTRAINT forms_pk PRIMARY KEY (id),
	CONSTRAINT forms_un_cellphone UNIQUE (cellphone),
	CONSTRAINT forms_un_email UNIQUE (email)
);


-- website.forms foreign keys

ALTER TABLE website.forms ADD CONSTRAINT forms_fk_career FOREIGN KEY (id_career) REFERENCES website.career(id_career) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE website.forms ADD CONSTRAINT forms_fk_referral FOREIGN KEY (id_referral) REFERENCES website.referral(id_referral) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE website.forms ADD CONSTRAINT forms_fk_study_tool FOREIGN KEY (id_study_tool) REFERENCES website.study_tool(id_study_tool) ON DELETE CASCADE ON UPDATE CASCADE;


insert into career(id_career, career) values ('2', 'Desenvolvedor Back-End'), ('3', 'Desenvolvedor Front-End'), ('1', 'Designer UX/UI'), ('4', 'Scrum Master');
insert into referral(id_referral, referral) values ('1', 'Instagram'), ('2', 'TikTok'), ('3', 'Linkedin'), ('4', 'Youtube'), ('5', 'Indicação'), ('6', 'Ferramenta de pesquisa'), ('7', 'Outros');
insert into study_tool(id_study_tool, study_tool) values ('1', 'Desktop'), ('2', 'Notebook'), ('3', 'Não tenho');