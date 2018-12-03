import * as React from 'react';

export interface Props {
    itemCompleted: (id: number) => void;
    delete: (id: number) => void;
    completed: boolean;
    id: number;
    text: string;
}

export class TodoItem extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.markCompleted = this.markCompleted.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    public markCompleted() {
        this.props.itemCompleted(this.props.id);
    }
    public deleteItem(e) {
        this.props.delete(this.props.id);
    }
    public render() {
        return(
            <li className="check" style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
                <label>
                    <input type="checkbox" className="check-input" onChange={this.markCompleted}/>
                    {this.props.text}
                </label>
                <button
                    type="button"
                    className="btn"
                    onClick={this.deleteItem}
                >
                    x
                </button>
            </li>
        );
    }
}
