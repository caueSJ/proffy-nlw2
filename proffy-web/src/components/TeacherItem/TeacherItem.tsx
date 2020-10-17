import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './TeacherItem.css';

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    subject: string;
    bio: string;
    cost: number;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
};

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    return (
        <article className="teacher-item">
            <header>
                <div className="teacher-img">
                    <img src={teacher.avatar} alt={teacher.name}/>
                </div>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a href={`https://wa.me/${teacher.whatsapp}`} target="_blank">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;