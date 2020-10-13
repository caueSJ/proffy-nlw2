import React from 'react';
import Input from '../../components/Input/Input';
import PageHeader from '../../components/PageHeader/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './TeacherForm.css';

const TeacherForm = () => {
    return (
        <div id="TeacherForm" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
 
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                </fieldset>
                
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Input name="subject" label="Matéria" />
                    <Input name="cost" label="Valor da sua hora/aula" />
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;