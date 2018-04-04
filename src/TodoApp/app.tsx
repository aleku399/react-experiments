import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ListedItem} from './list.js';

export class MyApp extends React.Component {
    public state: {
        title: string;
        list: any;
    };
    private _item: any;
    constructor(props) {
        super(props);
        this.state = {
            title: 'todos',
            list: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    public handleClick(e) {
        const item = this._item.value;
        const arrList = this.state.list;
        if (item !== '') {
            arrList.unshift({
                text: item,
                key: Date.now()
            });
            this.setState({
                list: arrList
            });
        }
        e.preventDefault();
    }
    public clearInput() {
        this.setState({
            list: []
        });
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    public deleteClick(key) {
        const arrList = this.state.list;
        const filteredlist = arrList.filter((item) => {
            return item.key !== key;
        });
        this.setState({
            list: filteredlist
        });
    }
    public render() {
        return(
            <div className="box">
                <h1 className="title">{this.state.title}</h1>
                <div className="inputbox">
                    <input
                        className="todo"
                        type="text"
                        onChange={this.clearInput}
                        placeholder="enter task"
                        ref={input => this._item = input}
                    />
                    <button className="button" onClick={this.handleClick}>Add</button>
                </div>
                <ListedItem delete={this.deleteClick} toDoList={this.state.list} />
            </div>
        );
    }
}
