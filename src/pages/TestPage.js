import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class TestPage extends React.Component {

    constructor(props) {
        super(props);

        this.props.setnavBarName({
            primary: "MERN Pokedex",
            secondary: "Test Page"
        });
    }

    render() {
        return (
            <Button>Test page !!</Button>
        );
    }
}

export default withRouter(TestPage);