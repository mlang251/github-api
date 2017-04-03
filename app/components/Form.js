import React from 'react';
import Radium from 'radium';

const Form = props => (
    <form onSubmit = {props.handleSubmit}
          className = "row form-inline"
          style = {styles.form}>
        <label className = "col-sm-3">Github Username</label>
        <input type = "text"
               id = "usernameInput"
               className = "form-control col-sm-7"
               placeholder = "eg: Gitboy69"
               value = {props.value}
               onChange = {props.handleChange}
               style = {styles.input} />
        <button id = "search" className = "btn btn-primary col-sm-2"><label htmlFor = "search">Search</label></button>
    </form>
);

const styles = {
    form: {
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        height: 39,
        marginRight: 5
    }
};

export default Radium(Form);
