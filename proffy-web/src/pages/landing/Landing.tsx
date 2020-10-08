import React from 'react'

import logoProffy from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './Landing.css';

const Landing = () => {
    return (
        <div id="Landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoProffy} alt="Logo Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>
                    
                    <a href="" className="give-classes">
                        <img src={giveClassIcon} alt="Dar aulas"/>
                        Dar aulas
                    </a>
                </div>

                <span className="total-conections">
                    Total de 100 conexões já realizadas! <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;