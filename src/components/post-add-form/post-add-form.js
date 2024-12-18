import React from "react";

import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                className="form-controll new-post-label"
                placeholder="О чем думаете сейчас?"
            />
            <button 
                type="submit" 
                className="btn btn-outline-secondary"
            >Добавить</button>
        </form>
    )
};

export default PostAddForm;