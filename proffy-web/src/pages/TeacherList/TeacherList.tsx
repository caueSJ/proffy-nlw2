import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input/Input';

import PageHeader from '../../components/PageHeader/PageHeader';
import Select from '../../components/Select/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem/TeacherItem';
import api from '../../services/api';

import './TeacherList.css';

const TeacherList = () => {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        
        setTeachers(response.data);
    }

    return (
        <div id="TeacherList" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value)}}
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
                        value={week_day}
                        onChange={(e) => {setWeekday(e.target.value)}}
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
                    <Input
                        type="time"
                        name="time"
                        label="Horário"
                        value={time}
                        onChange={(e) => {setTime(e.target.value)}}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    )
}

export default TeacherList;