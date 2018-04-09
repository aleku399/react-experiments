import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyApp } from './TodoApp/app';

class List extends React.Component {
    public render() {
        return (
            <div>
              <MyApp />
            </div>
        );
    }
}

ReactDOM.render(
    < List />,
    document.getElementById('intro')
);
