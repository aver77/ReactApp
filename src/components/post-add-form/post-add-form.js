import React from 'react';
import './post-add-form.css'

const PostAddForm = (props) => { //вытащили onAdd из пропс при помощи деструктуризации
    return (
        <form className="bottom-panel d-flex">
            <input type="text" placeholder="О чем вы думаете сейчас?" className="form-control new-post-label"/>
            <button type="submit" className="btn btn-outline-secondary" 
            onClick={() => props.onAdd('Hello!')}>
                Добавить
            </button>
        </form>
    )
}

export default PostAddForm;