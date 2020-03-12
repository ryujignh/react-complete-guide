import React, {Component, useState} from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

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
    }

    render() {

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}><Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                        </ErrorBoundary>
                    })}
                </div>
            );
            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={assignedClasses.join(' ')}>this is really sowking</p>
                <p>{this.state.otherState}</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle persons</button>

                {persons}

            </div>
        );
    }
}

export default App;
