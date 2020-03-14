import React, {Component, useState} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            {id: 'asd1', name: 'Max', age: 22},
            {id: 'asd2', name: 'Maxaaa', age: 29},
            {id: 'asd3', name: 'Stept', age: 22},
        ],
        otherState: 'Hello world',
        showPersons: false,
        changeCounter: 0,
        authenticated: false,
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state
    }

    deletePersonHandler = (personIndex) => {
        // Adding slice will create a copy of original state
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    loginHandler = () => {
        this.setState({authenticated: true})
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            // Return index of person that it id matches the passed id
            return p.id === id;
        });

        // Alternative way
        // const person = Object.assign({}, this.state.persons[personIndex]);
        const person = {
            ...this.state.persons[personIndex]
        };

        // Set new name with inputted value
        person.name = event.target.value;

        // Make sure we dominate a copy of original state
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState((prevState, props) => {
                return {
                    persons: persons,
                    changeCounter: this.state.changeCounter + 1
                }
            }
        )
    };

    render() {
        console.log('[App.js] render')

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    isAuthenticated={this.state.authenticated}
                />
            );
        }


        return (
            <Aux>
                <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
                    <Cockpit
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                    {persons}
                </AuthContext.Provider>

            </Aux>
        );
    }
}

export default withClass(App, classes.App);
