import React from 'react';
import Input from '../../components/Input/Input';

import PageHeader from '../../components/PageHeader/PageHeader';
import Select from '../../components/Select/Select';
import TeacherItem from '../../components/TeacherItem/TeacherItem';

import './TeacherList.css';

const TeacherList = () => {
    return (
        <div id="TeacherList" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value:'Artes', label:'Artes' },
                            { value:'Biologia', label:'Biologia' },
                            { value:'Ciências', label:'Ciências' },
                            { value:'Educação Física', label:'Educação Física' },
                            { value:'Física', label:'Física' },
                            { value:'Geografia', label:'Geografia' },
                            { value:'História', label:'História' },
                            { value:'Inglês', label:'Inglês' },
                            { value:'Língua Portuguesa', label:'Língua Portuguesa' },
                            { value:'Matemática', label:'Matemática' },
                            { value:'Química', label:'Química' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value:'0', label:'Domingo' },
                            { value:'1', label:'Segunda-feira' },
                            { value:'2', label:'Terça-feira' },
                            { value:'3', label:'Quarta-feira' },
                            { value:'4', label:'Quinta-feira' },
                            { value:'5', label:'Sexta-feira' },
                            { value:'6', label:'Sábado' },
                        ]}
                    />
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