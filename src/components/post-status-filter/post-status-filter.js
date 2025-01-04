import React, { Component } from "react";


import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    buttons = [
        {name:'all', label:'Все'},
        {name:'like', label:'Понравилось'}
    ]

    render() {
        const btns = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazs = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                    className={`btn ${clazs}`} 
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}
                >
                    {label}
                </button>
            )
        });
        return (
            <div className="btn-group">
                {btns}
            </div>
        )
    }   
};
