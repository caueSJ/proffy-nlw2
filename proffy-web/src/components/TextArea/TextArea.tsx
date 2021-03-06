import React, { TextareaHTMLAttributes } from 'react';

import './TextArea.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} >
            </textarea>
        </div>
    );
}

export default TextArea;