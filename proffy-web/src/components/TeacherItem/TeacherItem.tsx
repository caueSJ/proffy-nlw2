import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './TeacherItem.css';

interface TeacherItemProps {
    name?: string,
    image?: string,
    subject?: string,
    description?: string,
    price?: string
};

const TeacherItem: React.FC<TeacherItemProps> = props => {
    return (
        <article className="teacher-item">
            <header>
                <div className="teacher-img">
                    <img src={props.image} alt="Teacher"/>
                </div>
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>
            <p>
                {props.description}
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ {props.price}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;