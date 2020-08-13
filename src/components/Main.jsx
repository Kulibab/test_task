import React from 'react';
import { connect } from 'react-redux';
import {addGradient, removeGradient} from '../redux/gradients-reducer'
import ReduxGradientsForm from './GradientsForm/GradientsForm';
import c from './Main.module.css';
import { reset } from 'redux-form';
import Gradient from './Gradient/Gradient';

const Main = (props) => {

    const onSubmit = (formData) => {
        props.addGradient(formData);
    }

    return <div className={c.mainWrap}>
        <ReduxGradientsForm onSubmit={onSubmit}/>
        {props.gradientsList.map(val => {
            return <Gradient {...val} removeGradient={props.removeGradient}key={val.id}/>
        })}
        
    </div>
}

let mapStateToProps = (state) => {
    return {
        gradientsList: state.gradientsPage.gradientsList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addGradient: (obj) => {
            dispatch(addGradient(obj));
            dispatch(reset('gradientsForm'));
        },
        removeGradient: (id) => {
            dispatch(removeGradient(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);