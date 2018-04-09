import * as React from 'react';
import {TodoItem} from './item';

export interface TodoItem {
    text: string;
    id: number;
    done: boolean;
}
export interface Props {
    toDoList: any;
    itemCompleted: (id: number) => void;
    delete: (id: number) => void;
}
export class ListedItem extends React.Component<Props> {
 public   render() {
        return (
            <ul className="myUl">{this.props.toDoList.map((toDo: any) =>
                <TodoItem
                    key={toDo.id}
                    id={toDo.id}
                    text={toDo.text}
                    completed={toDo.done}
                    itemCompleted={this.props.itemCompleted}
                    delete={this.props.delete}
                />
            )}</ul>
        );
    }
}
