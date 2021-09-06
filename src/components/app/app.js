import React, {Component} from 'react';
import nextId from "react-id-generator";
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';

import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

// const StyledAppBlock = styled(AppBlock)`
//     background-color:grey;
// `

export default class App extends Component 
{
    constructor(props) {
        super(props);
        //пусть это данные с сервера
        this.state = {
            data : [
                {
                    label: 'Going to learn React',
                    important: true,
                    id: nextId()
                },
                {
                    label: 'That is so good',
                    important: false,
                    id: nextId()
                },
                {
                    label: 'I need a break...',
                    important: false,
                    id: nextId()
                }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }
   
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0,index),
                  after = data.slice(index+1),
                  newArr = [...before,...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: nextId()
        }
        this.setState(({data}) => { // ({data}) <=> (state.data)
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        }) 
    }

    render() {
        return (
            //div 
            <AppBlock> 
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                {/* передаем данные из "сервера" в постлист при помощи пропса */}
                <PostList posts={this.state.data} onDelete={this.deleteItem}/> 
                <PostAddForm onAdd={this.addItem} />
            </AppBlock>
        )
    }
}