import React, {Component} from "react";

import './post-add-form.css';

export default class PostAddForm extends Component {

    state = {
        text: ''
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }


    render () {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    className="form-controll new-post-label"
                    placeholder="О чем думаете сейчас?"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                    type="submit" 
                    className="btn btn-outline-secondary"
                >Добавить</button>
            </form>
        )
    }
}
