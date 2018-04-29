import * as React from 'react';
import {ListedItem, TodoItem} from './list';
import data from './data';

interface State {
    title: string;
    list: TodoItem[];
    term: string;

}
export class MyApp extends React.Component<{}, State> {
    private inputElm: HTMLInputElement;
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
    public handleClick(event) {
        const item = this.inputElm.value;
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
        event.preventDefault();
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
                <form onSubmit={this.handleClick} className="form">
                    <input
                        className="todo"
                        type="text"
                        value={this.state.term}
                        onChange={this.clearInput}
                        placeholder="enter task"
                        ref={(input: HTMLInputElement) => this.inputElm = input}
                    />
                    <button
                            className="button"
                            type="submit"
                            disabled={!this.state.term}
                    >Add
                    </button>
                </form>
                <ListedItem
                 deleteFn={this.deleteClick}
                 toDoList={this.state.list}
                 itemCompleted={this.markCompleted}
                />
            </div>
        );
    }
}
