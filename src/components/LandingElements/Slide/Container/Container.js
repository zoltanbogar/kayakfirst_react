import React, { Component } from 'react';

import classes from './Container.css';

class Container extends Component {
    render(){
        const arrayOfClasses = [...this.props.bootstrapClasses, classes[this.props.givenClassName]];

        return(
            <div className={arrayOfClasses.join(' ')}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;