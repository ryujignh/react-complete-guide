import React from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>this is really sowking</p>
            <button className={btnClass} onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default cockpit;