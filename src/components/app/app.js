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
            {label: 'First massage', important:true, like: false, id: 1},
            {label: 'second', important:false, like: false, id: 2},
            {label: '3', important:false, like: false, id: 3},
        ],
        term: '',
        filter: 'all'
    }

    maxId = 4;


    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newData = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newData
            }
        });
    }


    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        });
    }


    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }


    searchTerm = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }


    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }


    onSearchUpdate = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter((item) => item.like)
        } else {
            return items
        }
    }
    
    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchTerm(data, term), filter);


        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onSearchUpdate={this.onSearchUpdate}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}
