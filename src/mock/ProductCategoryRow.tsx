import * as React from 'react';

export interface Props {
    category: string;
}
export class ProductCategoryRow extends React.Component<Props> {
    public render() {
        return (
            <tr>
                <th>{this.props.category}</th>
            </tr>
        );
    }
}
