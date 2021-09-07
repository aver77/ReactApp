import React from 'react';
import './post-list-item.css'

export default class PostListItem extends React.Component {
    // constructor(props) { 
    //     super(props); 
        //данные пропс из postlist записаны
        // this.state = {
        //     important: false,
        //     like: false,
        //     del: false
        // }
        // this.onImportant = this.onImportant.bind(this);
        // this.onLike = this.onLike.bind(this);
    // }

    // onImportant() {
    //     this.setState(({important}) => ({
    //         important: !important
    //     }))
    // }

    // onLike() {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))
    // }

    render() {
        const {label,onDelete,onToggleImportant,onToggleLiked,important,like} = this.props; //св-во, которое приходит в каждый новосозданный компонент this.props (app->postlist->postlistitem)
        // const {important,like} = this.state; //новые св-ва каждого айтема
        let classNames = 'app-list-item d-flex justify-content-between'; 
        if (important) {
            classNames += ' important'; //пробел! чтобы класс правильно добавился в строку со всеми классами
        }
        if (like) {
            classNames += ' like'; //пробел! чтобы класс правильно добавился в строку со всеми классами
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" onClick={onDelete} className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}