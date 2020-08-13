import React from 'react';
import { Field, reduxForm } from 'redux-form';
import c from './GradientsForm.module.css'
import { requiredField, isHex } from '../../validators/validators';
import { Input } from '../common/FormsControls';

const GradientsForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={c.form}>
        <Field component={Input} name={'firstGrad'} placeholder={'#000000'} className={c.input} validate={[requiredField, isHex]}/>
        <Field component={Input} name={'secondGrad'} placeholder={'#000000'} className={c.input} validate={[requiredField, isHex]}/>
        <button className={c.button}>add gradient</button>
    </form>
}

const ReduxGradientsForm = reduxForm ({form: 'gradientsForm'})(GradientsForm);

export default ReduxGradientsForm;