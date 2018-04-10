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
    deleteFn: (id: number) => void;
}

export const ListedItem = ({toDoList, itemCompleted, deleteFn}: Props) =>
    <ul className="myUl">
        {toDoList.map((toDo: any) =>
            <TodoItem
                key={toDo.id}
                id={toDo.id}
                text={toDo.text}
                completed={toDo.done}
                itemCompleted={itemCompleted}
                delete={deleteFn}
            />
        )}
    </ul>;
