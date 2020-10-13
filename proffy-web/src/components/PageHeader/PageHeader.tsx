import React from 'react';
import { Link } from 'react-router-dom';

// import backIcon from '../../assets/images/icons/back.svg';
// import logoImg from '../../assets/logo.svg';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './PageHeader.css';

interface PageHeaderProps {
    title: string;
    description?: string;
};

const PageHeader: React.FC<PageHeaderProps> = props => {
    return (
        <header className="page-header">
            <nav className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>

                <img src={logoImg} alt="Proffy" />
            </nav>

            <div className="header-content">
                <strong> {props.title} </strong>
                { props.description && <p>{props.description}</p> }

                {props.children}
            </div>
        </header>
    );
};

export default PageHeader;