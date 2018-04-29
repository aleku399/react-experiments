import * as React from 'react';
import {SearchBar} from './SearchBar';
import {ProductTable} from './ProductTable';
import {Row} from './ProductRow';

export interface State {
    filterText: string;
    inStockOnly: boolean;
}

export class FilterableProductTable extends React.Component<{data: Row[]}, State> {
    constructor(props) {
        super(props);
        this.state = {
                    filterText: '',
                    inStockOnly: false
            };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    public handleFilterTextChange(e) {
        this.setState({
          filterText: e.target.value
        });
      }
    public handleInStockChange(e) {
        this.setState({
          inStockOnly: e.target.checked
        });
      }
    public render() {
    return ( <div className="table">
                <SearchBar
                       filterText={this.state.filterText}
                       checked={this.state.inStockOnly}
                       handleFilterText={this.handleFilterTextChange}
                       handleChecked={this.handleInStockChange}
                />
                <ProductTable
                        data={this.props.data}
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                />
            </div>
           );
    }
}
