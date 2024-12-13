import React from "react";

import PostListItem from "../post-list-item/post-list-item";
import { ListGroup } from "reactstrap";

import "./post-list.css";

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem {...item} onDelete={onDelete}/>
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
};

export default PostList;