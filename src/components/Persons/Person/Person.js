import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux'
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context"

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        this.inputElement.current.focus();
    }

    render() {
        return (
            <Aux>
                <AuthContext.Consumer>
                    {context =>
                        context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.click}> I 'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p key='i2'> {this.props.children}</p>
                <input
                    key="i3"
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
        )
    }
}

Person.prototypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass(Person, classes.Person);