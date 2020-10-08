import React from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import TeacherItem from '../../components/TeacherItem/TeacherItem';

import './TeacherList.css';

const TeacherList = () => {
    return (
        <div id="TeacherList" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem
                    name="Nome do Professor"
                    image="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    subject="Matéria"
                    description="Descrição do professor"
                    price="29,90"
                />
            </main>
        </div>
    )
}

export default TeacherList;