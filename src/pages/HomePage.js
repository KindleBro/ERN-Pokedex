import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.props.setnavBarName({
            primary: "MERN Pokedex",
            secondary: "Home Page"
        });
    }

    render() {
        return (
            <Button>Test button so the page works</Button>
        );
    }
}

export default withRouter(HomePage);