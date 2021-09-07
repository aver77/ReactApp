import React from 'react';
import './post-add-form.css'

export default class PostAddForm extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState(({text}) => {
            return {
                text: ''
            }
        })
    }

    render() {
        return (
            // Важно!!! На button не нужно вешать обработчики в форме. Вешаем onSubmit на form и onChange на input!!!
        <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
            <input type="text" placeholder="О чем вы думаете сейчас?" className="form-control new-post-label" onChange={this.onValueChange} value={this.state.text}/>
            <button type="submit" className="btn btn-outline-secondary">
                Добавить
            </button>
        </form> 
        )
    }
}