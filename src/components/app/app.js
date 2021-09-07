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
                    like: false,
                    id: nextId()
                },
                {
                    label: 'That is so good',
                    important: false,
                    like: false,
                    id: nextId()
                },
                {
                    label: 'I need a break...',
                    important: false,
                    like: false,
                    id: nextId()
                }
            ],
            term: '',
            filter: 'all'
        };
        //биндим ф-ии обработчики событий
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        //this.maxId = 4;
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
            like: false,
            id: nextId()
        }
        this.setState(({data}) => { // ({data}) <=> (state.data)
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        }) 
    }

    onToggleImportant(id) {
                //деструктуризация state в стрелочной ф-ии: {data}
                this.setState(({data}) => {
                    const index = data.findIndex(elem => elem.id === id);
                    const old = data[index]; //параметр для замены поля like
                    const newInsertItem = {...old,important: !old.important}; //измененный параметр для вставки
                    const newArray = [...data.slice(0,index),newInsertItem,...data.slice(index+1)];
        
                    return {
                        data: newArray
                    }
                })
    }

    onToggleLiked(id) {
        //деструктуризация state в стрелочной ф-ии: {data}
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index]; //параметр для замены поля like
            const newInsertItem = {...old,like: !old.like}; //измененный параметр для вставки
            const newArray = [...data.slice(0,index),newInsertItem,...data.slice(index+1)];

            return {
                data: newArray
            }
        })
    }

    searchPost(items,term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        })
    }

    filterPost(items,filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onUpdateSearch(term) {
        // this.setState(({term}) => {
        //     return (
        //         {
        //             term: term
        //         }
        //     )
        // })
        this.setState({term});
    } 

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        //счетчики
        const {data,term,filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data,term),filter);

        return (
            //div 
            <AppBlock> 
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                {/* передаем данные из "сервера" в постлист при помощи пропса */}
                <PostList posts={visiblePosts} onDelete={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked}/> 
                <PostAddForm onAdd={this.addItem} />
            </AppBlock>
        )
    }
}