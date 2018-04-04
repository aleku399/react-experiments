import * as React from 'react';

export interface TodoItem {
    text: string;
    key: number;
}
export interface Props {
    toDoList: TodoItem[];
    delete: (toDo: number, e: any) => void;
}
export class ListedItem extends React.Component<Props> {
 public   render() {
        const listeditems = this.props.toDoList.map((toDo: TodoItem) => {
            // tslint:disable-next-line:jsx-no-lambda
            return <li onClick={(e) => this.props.delete(toDo.key, e)} key={toDo.key}>
                {toDo.text}</li>;
        });
        return (
            <ul className="myUl">{listeditems}</ul>
        );
    }
}
