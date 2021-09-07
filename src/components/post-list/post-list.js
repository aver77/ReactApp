import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
import { ListGroup } from 'reactstrap';

const PostList = (props) => { //получаем пропс с 'серверными данными'
    const {posts,onDelete,onToggleImportant,onToggleLiked} = props;
    const elements = posts.map((item) => {
        const {id,...itemProps} = item;
        if (typeof(item) === 'object') {
            return ( //передаем его данные с версткой и условием в PostListItem при помощи props
                <li key={id} className="list-group-item">
                    {/* <PostListItem label={item.label} important={item.important}/> */}
                    <PostListItem {...itemProps} onDelete={() => onDelete(id)} onToggleImportant={() => onToggleImportant(id)} onToggleLiked={() => onToggleLiked(id)}/>
                </li>    
            )
        }
    });
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;