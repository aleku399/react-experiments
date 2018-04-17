import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FilterableProductTable } from './mock/FilterableProductTable';
import products from './mock/data';

class List extends React.Component {
    public render() {
        return (
            <div>
              <FilterableProductTable data={products}/>
            </div>
        );
    }
}

ReactDOM.render(
    < List />,
    document.getElementById('intro')
);
