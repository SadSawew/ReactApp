import React, { Component } from "react";

import './search-panel.css';

export default class SearchPannel extends Component {
    state = {
        term: ''
    }

    onSearchUpdate = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchUpdate(term)
    }

    render() {
        return (
            <input 
                className="form-controll search-input"
                placeholder="Поиск по записям"
                type="text"
                onChange={this.onSearchUpdate}
            />
        )
    }
};

