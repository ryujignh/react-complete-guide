import React, {Component, useState} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    state = {
        persons: [
            {id: 'asd1', name: 'Max', age: 28},
            {id: 'asd2', name: 'Maxaaa', age: 29},
            {id: 'asd3', name: 'Stept', age: 22},
        ],
        otherState: 'Hello world',
        showPersons: false,

    };

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

        this.setState({persons: persons})
    };
    
    render() {

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}/>
                </div>
            );
        }


        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}

            </div>
        );
    }
}

export default App;
