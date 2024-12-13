import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {

    state = {
        data:[
            {label: 'First massage', important:true, id: 'sddsa'},
            {label: 'second', important:false, id: 'saasas'},
            {label: '3', important:false, id: 'asassd'},
        ]
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.splice(0, index);
            const after = data.splice(index + 1);

            const newData = [...before, ...after]

            return {
                data: newData
            }
        });
    }

    render() {
        return (
            <AppBlock>
                    <AppHeader/>
                    <div className='search-panel d-flex'>
                        <SearchPanel/>
                        <PostStatusFilter/>
                    </div>
                    <PostList 
                        posts={this.state.data}
                        onDelete={this.deleteItem}
                    />
                    <PostAddForm/>
            </AppBlock>
        )
    }
}
