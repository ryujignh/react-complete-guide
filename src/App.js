import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Maxaaa', age: 29},
            {name: 'Stept', age: 22},
        ],
        otherState: 'Hello world'

    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 31},
                {name: 'Maxaaa', age: 29},
                {name: 'Stept', age: 22},
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 31},
                {name: event.target.value, age: 29},
                {name: 'Stept', age: 22},
            ]
        })
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>this is really sowking</p>
                <p>{this.state.otherState}</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('From the button!')}>Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Arisa')}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Arisa')}
                    changed={this.nameChangedHandler}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
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
