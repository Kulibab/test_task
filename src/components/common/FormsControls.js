import React from 'react';
import c from './FormsControls.module.css'

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={c.formControl + ' ' + (hasError ? c.error : '')}>
            <input {...input} {...props}/>
                {hasError && <span>{meta.error}</span>}
        </div>
    )
}