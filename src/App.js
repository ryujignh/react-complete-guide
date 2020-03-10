import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person'

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

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>this is really sowking</p>
                <p>{this.state.otherState}</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle persons
                </button>

                {persons}

            </div>
        );
    }
}

export default App;


// const App = props => {
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             {name: 'Max', age: 28},
//             {name: 'Maxaaa', age: 29},
//             {name: 'Stept', age: 22},
//         ],
//         otherState: 'Hello world'
//
//     });
//
//     const switchNameHundler = () => {
//         setPersonsState({
//             persons: [
//                 {name: 'Ryuji', age: 31},
//                 {name: 'Maxaaa', age: 29},
//                 {name: 'Stept', age: 22},
//             ]
//         })
//     }
//
//     return (
//         <div className="App">
//             <h1>Hi, I'm a React App</h1>
//             <p>this is really sowking</p>
//             <p>{personsState.otherState}</p>
//             <button onClick={switchNameHundler}>Switch Name</button>
//             <Person
//                 name={personsState.persons[0].name}
//                 age={personsState.persons[0].age}/>
//             <Person
//                 name={personsState.persons[1].name}
//                 age={personsState.persons[1].age}
//                 click={this.switchNameHandler}/>
//             <Person
//                 name={personsState.persons[2].name}
//                 age={personsState.persons[2].age}/>
//         </div>
//     );
// }
