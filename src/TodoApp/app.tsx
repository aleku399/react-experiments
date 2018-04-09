import * as React from 'react';
import {ListedItem, TodoItem} from './list';
import data from './data';

export class MyApp extends React.Component {
    public state: {
        title: string;
        list: TodoItem[];
        term: '';

    };
    private _item: any;
    constructor(props) {
        super(props);
        this.state = {
            title: 'todos',
            list: data,
            term: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
        this.showCompleted = this.showCompleted.bind(this);
    }
    public handleClick(e) {
        const item = this._item.value;
        const arrList = this.state.list;
        if (item !== '') {
            arrList.unshift({
                text: item,
                id: Date.now(),
                done: false
            });
            this.setState({
                term: '',
                list: arrList
            });
        }
        e.preventDefault();
    }
    public clearInput(e) {
        this.setState({
            term: e.target.value
        });
    }
    public deleteClick(id) {
        const arrList = this.state.list;
        const filteredlist = arrList.filter((item) => {
            return item.id !== id;
        });
        this.setState({
            list: filteredlist
        });
    }
    public markCompleted(id) {
        const arrList = this.state.list;
        const newList = arrList.map((item) => {
             if (item.id === id ) item.done = !item.done;
             return item;
        });
        this.setState({
            list: newList
        });
    }
    public showCompleted(id) {
        const arrList = this.state.list;
        const newList = arrList.filter((item) => {
             return item.id !== id && item.done === true;
        });
        this.setState({
            list: newList
        });
    }
    public render() {
        return(
            <div className="box">
                <h1 className="title">{this.state.title}</h1>
                <form onSubmit={this.handleClick}>
                    <input
                        className="todo"
                        type="text"
                        value={this.state.term}
                        onChange={this.clearInput}
                        placeholder="enter task"
                        ref={input => this._item = input}
                    />
                    <button
                            className="button"
                            type="submit"
                            disabled={!this.state.term}
                    >Add
                    </button>
                    <button className="completed" onClick={this.showCompleted}>All</button>
                </form>
                <ListedItem
                 delete={this.deleteClick}
                 toDoList={this.state.list}
                 itemCompleted={this.markCompleted}
                />
            </div>
        );
    }
}
