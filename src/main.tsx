import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import { App } from './Board';

class List extends React.Component {
      public render() {
        return (
                <div>
                    <App />
                </div>
        );
    }
}

ReactDOM.render(
    <List />,
    document.getElementById('intro')
);
