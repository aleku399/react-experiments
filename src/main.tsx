import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { colorListItems } from './component/palette.js';

const colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363',
'#85FFC7', '#297373', '#FF8552', '#A40E4C'];

class List extends React.Component {
    public render() {
        return (
            <ul>
                {colorListItems(colors)}
            </ul>
        );
    }
}

ReactDOM.render(
    < List />,
    document.getElementById('intro')
);
