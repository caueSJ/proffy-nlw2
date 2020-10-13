import React from 'react';
import Input from '../../components/Input/Input';

import PageHeader from '../../components/PageHeader/PageHeader';
import TeacherItem from '../../components/TeacherItem/TeacherItem';

import './TeacherList.css';

const TeacherList = () => {
    return (
        <div id="TeacherList" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week_day" label="Dia da Semana" />
                    <Input type="time" name="time" label="Horário" />
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