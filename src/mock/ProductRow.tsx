import * as React from 'react';
export interface Row {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}
export interface Props {
    row: Row;
}
export class ProductRow extends React.Component<Props> {
    public render() {
        const name = this.props.row.stocked ? this.props.row.name :
            <span style={{color: 'red'}}>{this.props.row.name}</span>;
        return(
            <tr>
                <td>{name}</td>
                <td>{this.props.row.price}</td>
            </tr>
        );
    }
}
