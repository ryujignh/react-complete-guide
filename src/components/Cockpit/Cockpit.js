import React, {useEffect, useRef} from 'react';
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context"

const cockpit = (props) => {
    const toggleBtnRef = React.useRef(null);

    useEffect(() => {
        toggleBtnRef.current.click()
    }, []);

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
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>this is really sowking</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle persons
            </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);