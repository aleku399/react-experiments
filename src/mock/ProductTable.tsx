import * as React from 'react';
import {ProductCategoryRow} from './ProductCategoryRow';
import {ProductRow, Row} from './ProductRow';

export interface Props {
    data: Row[];
    filterText: string;
    inStockOnly: boolean;
}
export class ProductTable extends React.Component<Props> {
    public render() {
        const arrData: any = [];
        let lastCategory = '';
        this.props.data.forEach( (product: Row) => {
            if (product.name.indexOf(this.props.filterText) === -1) {
                return;
              }
            if (this.props.inStockOnly && !product.stocked) {
                return;
              }
            if (product.category !== lastCategory)
            arrData.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            arrData.push(
                <ProductRow
                    row={product}
                    key={product.name}
                />
        );
            lastCategory = product.category;
        });
        return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {arrData}
            </tbody>
        </table>
    );
    }
}
